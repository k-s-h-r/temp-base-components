import React from 'react'

type Props = {
  children?: React.ReactNode
}

export const Page = ({ children }: Props): JSX.Element => {
  return (
    <article>
      <section>{children}</section>
    </article>
  )
}
