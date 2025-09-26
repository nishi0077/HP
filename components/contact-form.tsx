"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { SiteData } from '@/lib/content'

const contactSchema = z.object({
  company: z.string().min(1, '会社名は必須です'),
  name: z.string().min(1, '担当者名は必須です'),
  email: z.string().email('正しいメールアドレスを入力してください'),
  budget: z.string().optional(),
  objectives: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactFormProps {
  formFields: SiteData['contact']['form_fields']
}

export function ContactForm({ formFields }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        
        // GA4 tracking
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'generate_lead', {
            currency: 'JPY',
            value: 0,
          })
        }

        // Meta Pixel tracking
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('track', 'Lead')
        }
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const budgetField = formFields.find(field => field.name === 'budget')

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>お問い合わせ</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {formFields.map((field) => (
            <div key={field.name} className="space-y-2">
              <Label htmlFor={field.name}>
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </Label>

              {field.type === 'select' && field.options ? (
                <Select onValueChange={(value) => setValue(field.name as keyof ContactFormData, value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={`${field.label}を選択`} />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : field.type === 'textarea' ? (
                <Textarea
                  id={field.name}
                  placeholder={field.placeholder}
                  {...register(field.name as keyof ContactFormData)}
                />
              ) : (
                <Input
                  id={field.name}
                  type={field.type || 'text'}
                  placeholder={field.placeholder}
                  {...register(field.name as keyof ContactFormData)}
                />
              )}

              {errors[field.name as keyof ContactFormData] && (
                <p className="text-sm text-red-500">
                  {errors[field.name as keyof ContactFormData]?.message}
                </p>
              )}
            </div>
          ))}

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? '送信中...' : '送信'}
          </Button>

          {submitStatus === 'success' && (
            <p className="text-green-600 text-center">
              お問い合わせありがとうございます。担当者よりご連絡いたします。
            </p>
          )}

          {submitStatus === 'error' && (
            <p className="text-red-600 text-center">
              送信に失敗しました。もう一度お試しください。
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  )
}

// Global type declarations for tracking
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    fbq?: (...args: any[]) => void
  }
}


