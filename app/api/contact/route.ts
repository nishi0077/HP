import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const contactSchema = z.object({
  company: z.string().min(1),
  name: z.string().min(1),
  email: z.string().email(),
  budget: z.string().optional(),
  objectives: z.string().optional(),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = contactSchema.safeParse(body)
    
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: parsed.error.issues },
        { status: 400 }
      )
    }

    const { company, name, email, budget, objectives } = parsed.data

    // Rate limiting could be implemented here
    
    // Send email using Resend (if API key is configured)
    if (process.env.RESEND_API_KEY && process.env.MAIL_TO) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      
      const emailContent = `
新規お問い合わせがありました。

会社名: ${company}
担当者名: ${name}
メールアドレス: ${email}
月間広告予算: ${budget || '未選択'}
目的: ${objectives || '記載なし'}

送信日時: ${new Date().toLocaleString('ja-JP')}
      `.trim()

      await resend.emails.send({
        from: 'noreply@nextsociality.com',
        to: process.env.MAIL_TO,
        subject: `【Next Sociality】新規お問い合わせ - ${company}`,
        text: emailContent,
      })
    } else {
      // Fallback: Log to console for development
      console.log('New contact form submission:', {
        company,
        name,
        email,
        budget,
        objectives,
        timestamp: new Date().toISOString(),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}


