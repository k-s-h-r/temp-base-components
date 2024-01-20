import { composeStories } from '@storybook/react'
import '@testing-library/jest-dom'
import { getByLabelText, getByText, render, screen } from '@testing-library/react'
import * as stories from './Button.stories'

// const { Default, Primary, Secondary, Teriary, SizeSm, SizeMd, SizeLg, WithIcon, PageTopButton, Link, NextjsLink, Disabled } = composeStories(stories)

describe('Button', () => {
  /*
  test('Default', async () => {
    // render(<Default />)
    // expect(screen.getByRole('button', { name: '送信する' })).toBeInTheDocument()
    const { container } = render(<Default />)
    await Default.play?.({ canvasElement: container } as any)
  })
  test('Primary Color', async () => {
    const { container } = render(<Primary />)
    await Primary.play?.({ canvasElement: container } as any)
  })
  */

  // 一括テスト
  const testCases = Object.values(composeStories(stories)).map((Story) => [
    // The ! is necessary in Typescript only, as the property is part of a partial type
    Story.storyName!,
    // type errorになるのでanyで回避
    Story as any,
  ])
  // Batch
  test.each(testCases)('Renders %s story', async (_storyName, Story) => {
    const { container } = render(<Story />)
    await Story.play?.({ canvasElement: container } as any)
    // expect(tree.baseElement).toMatchSnapshot();
  })
})
