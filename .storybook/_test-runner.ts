import type { TestRunnerConfig } from '@storybook/test-runner'
import { getStoryContext } from '@storybook/test-runner'
import { injectAxe, checkA11y, configureAxe } from 'axe-playwright'

const config: TestRunnerConfig = {
  // Hook that is executed before the test runner starts running tests
  setup() {
    // Add your configuration here.
  },
  /* Hook to execute before a story is rendered.
   * The page argument is the Playwright's page object for the story.
   * The context argument is a Storybook object containing the story's id, title, and name.
   */
  async preRender(page, context) {
    // Add your configuration here.
  },
  /* Hook to execute after a story is rendered.
   * The page argument is the Playwright's page object for the story
   * The context argument is a Storybook object containing the story's id, title, and name.
   */
  async postRender(page, context) {
    // Add your configuration here.
    const storyContext = await getStoryContext(page, context)
    if (storyContext.parameters?.a11y?.disable) {
      return
    }
    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    })
    await checkA11y(page, '#root', {
      includedImpacts: ['critical', 'serious'],
      detailedReport: false,
      detailedReportOptions: { html: true },
      axeOptions: storyContext.parameters?.a11y?.options,
    })
  },
}

module.exports = config
