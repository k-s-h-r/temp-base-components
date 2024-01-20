import { Button } from '@/components/ui/Button'
import { SiStorybook } from 'react-icons/si'

type Props = {
  href: string
}

export default function StorybookButton(props: Props): JSX.Element {
  return (
    <Button as="a" target="_blank" variant="secondary" size="s" href={props.href}>
      <SiStorybook className="mr-2 h-4 w-4 text-[#ff4785]" aria-hidden />
      <span>Storybook</span>
    </Button>
  )
}
