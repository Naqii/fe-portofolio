'use client'

import { useContext, useEffect } from 'react'
import { ToasterContext, defaultToaster } from './ToasterContext'
import Toaster from './Toaster'

export default function ToastContainer() {
  const { toaster, setToaster } = useContext(ToasterContext)

  useEffect(() => {
    if (toaster.type !== '') {
      const timeout = setTimeout(() => {
        setToaster(defaultToaster)
      }, 3000)
      return () => clearTimeout(timeout)
    }
  }, [toaster, setToaster])

  if (toaster.type === '') return null

  return <Toaster type={toaster.type} message={toaster.message} />
}
