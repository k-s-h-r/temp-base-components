import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z, ZodError } from 'zod'

import { Textarea } from '@/components/ui/Textarea'
import { TextInput } from '@/components/ui/TextInput'
import { Input } from '@/components/ui/Input'
import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/Button'
import { Grid } from '@/components/ui/Grid'
import { Stack } from '@/components/ui/Stack'

type FormValues = {
  mail: string
  password: string
}

const schema: z.ZodType<FormValues> = z.object({
  mail: z.string().email({ message: '正しいメールアドレスを入力してください' }),
  password: z
    .string()
    .min(8, 'パスワードは8文字以上で入力してください')
    .regex(/^(?=.*?[a-z])(?=.*?\d)$/i, 'パスワードは半角英数字混合で入力してください'),
})

export const LoginTemplate = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  console.log(errors)
  return (
    <form onSubmit={onSubmit}>
      <Stack space="2xl">
        <Heading size="l" as="h1">
          ログイン
        </Heading>

        <Stack space="l">
          <Input isRequired={true} isError={!!errors?.mail}>
            <Input.Label htmlFor="sample1" labelAfterText="必須">
              メールアドレス
            </Input.Label>
            <TextInput {...register('mail')} id="sample1" required isError={!!errors?.mail} />

            {errors?.mail && (
              <Input.Error>
                <p>{errors.mail.message}</p>
              </Input.Error>
            )}
          </Input>
          <Input isRequired={true} isError={!!errors?.password}>
            <Input.Label htmlFor="sample2" labelAfterText="必須">
              パスワード
            </Input.Label>
            <TextInput {...register('password')} id="sample2" type="password" required isError={!!errors?.password} />

            {errors?.password && (
              <Input.Error>
                <p>{errors.password.message}</p>
              </Input.Error>
            )}
          </Input>
        </Stack>
        <Stack space="s">
          <Button variant="primary" type="submit">
            ログイン
          </Button>
          <Button variant="secondary" as="a" href="#">
            新規登録
          </Button>
          <Button variant="teriary" as="a" href="#">
            パスワードをお忘れの方
          </Button>
        </Stack>
      </Stack>
    </form>
  )
}
