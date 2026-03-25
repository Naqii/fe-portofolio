'use client'

import { useRouter, useSearchParams } from 'next/navigation' // Ubah impor
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, useState } from 'react'
import * as Yup from 'yup'
import { ILogin } from '@/types/Auth'
import { signIn } from 'next-auth/react'
import { useMutation } from '@tanstack/react-query'
import { ToasterContext } from '@/components/ui/Toaster/ToasterContext'

const loginSchema = Yup.object().shape({
  identifier: Yup.string().required('Please input your Email / Username'),
  password: Yup.string().required('Please input your password'),
})

const useLogin = () => {
  const router = useRouter()
  const searchParams = useSearchParams() // Untuk mengambil query params
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)
  const { setToaster } = useContext(ToasterContext)

  // Ambil callbackUrl dari searchParams
  const callbackUrl: string = searchParams.get('callbackUrl') || '/'

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const loginService = async (payload: ILogin) => {
    const result = await signIn('credentials', {
      ...payload,
      redirect: false,
      callbackUrl,
    })
    if (result?.error && result.status === 401) {
      throw new Error('Email or username not match with password')
    }
  }

  const { mutate: mutateLogin, isPending: isPendingLogin } = useMutation({
    mutationFn: loginService,
    onError: (error) => {
      setToaster({
        type: 'error',
        message: error.message,
      })
    },
    onSuccess() {
      reset()
      setToaster({
        type: 'success',
        message: 'Login Success',
      })
      router.push(callbackUrl) // router.push masih sama
    },
  })

  const handleLogin = (data: ILogin) => mutateLogin(data)

  return {
    isVisible,
    toggleVisibility,
    control,
    handleSubmit,
    handleLogin,
    isPendingLogin,
    errors,
  }
}

export default useLogin
