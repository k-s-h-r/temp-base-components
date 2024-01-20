import { composeStories } from '@storybook/react'
import '@testing-library/jest-dom'
import { getByLabelText, getByText, render, screen } from '@testing-library/react'
import * as stories from './Checkbox.stories'

describe('Checkbox', () => {
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
  })
})
