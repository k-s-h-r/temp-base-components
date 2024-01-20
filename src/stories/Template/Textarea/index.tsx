import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Textarea } from '@/components/ui/Textarea'
import { Input } from '@/components/ui/Input'
import { Grid } from '@/components/ui/Grid'

type FormValues = {
  textarea: string
}

const LIMIT = 100
const schema: z.ZodType<FormValues> = z.object({
  textarea: z.string().max(LIMIT, { message: '入力できる文字数を超えています。' }),
})

export const TextareaTemplate = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormValues>({ mode: 'onChange', resolver: zodResolver(schema) })
  const onSubmit = handleSubmit((data) => console.log(data))
  const textareaCount = watch().textarea?.length || 0

  return (
    <form onSubmit={onSubmit}>
      <Input isError={!isValid}>
        <Input.Label htmlFor="testcharacterlimit">Textarea</Input.Label>
        <Textarea {...register('textarea')} placeholder="input text" id="testcharacterlimit" isError={!!errors?.textarea} />
        <Grid gridType="1fr_max" gap="m">
          <Grid.Item>
            {errors?.textarea && (
              <Input.Error>
                <p>{errors.textarea.message}</p>
              </Input.Error>
            )}
          </Grid.Item>
          <Grid.Item>
            <Input.Count count={textareaCount} limit={LIMIT} isError={!!errors?.textarea} />
          </Grid.Item>
        </Grid>
      </Input>
    </form>
  )
}
