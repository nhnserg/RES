'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ContactFormData } from '@/types'
import { sendEmail } from '@/utils/emailService'

const formSchema = z.object({
	name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
	email: z.string().email('Adresse email invalide'),
	phone: z.string().min(10, 'Numéro de téléphone invalide'),
	subject: z.string().min(5, 'Le sujet doit contenir au moins 5 caractères'),
	message: z
		.string()
		.min(10, 'Le message doit contenir au moins 10 caractères'),
})

export type FormData = z.infer<typeof formSchema>

export function useContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)

	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
	})

	const onSubmit = async (data: FormData) => {
		setIsSubmitting(true)
		try {
			await sendEmail(data as ContactFormData)
			setIsSubmitted(true)
			form.reset()
			setTimeout(() => setIsSubmitted(false), 5000)
		} catch (error) {
			console.error('Erreur lors de l’envoi du message :', error)
		} finally {
			setIsSubmitting(false)
		}
	}

	return { form, onSubmit, isSubmitting, isSubmitted }
}
