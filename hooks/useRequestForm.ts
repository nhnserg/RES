'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { RequestFormData } from '@/types'
import { sendRequestEmail } from '@/utils/emailService'

const formSchema = z.object({
	name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
	phone: z.string().min(10, 'Numéro de téléphone invalide'),
	email: z
		.string()
		.email('Adresse email invalide')
		.optional()
		.or(z.literal('')),
	vehicleType: z.string().min(1, 'Veuillez sélectionner le type de véhicule'),
	location: z.string().min(5, 'Veuillez indiquer le lieu du véhicule'),
	destination: z.string().min(5, 'Veuillez indiquer la destination'),
	urgency: z.string().min(1, "Veuillez indiquer le niveau d'urgence"),
	description: z.string().min(10, 'Veuillez décrire la situation'),
})

export type FormData = z.infer<typeof formSchema>

export function useRequestForm() {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)

	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
	})

	const onSubmit = async (data: FormData) => {
		setIsSubmitting(true)
		try {
			await sendRequestEmail(data as RequestFormData)
			setIsSubmitted(true)
			form.reset()
			setTimeout(() => setIsSubmitted(false), 5000)
		} catch (error) {
			console.error("Erreur lors de l'envoi de la demande :", error)
		} finally {
			setIsSubmitting(false)
		}
	}

	return { form, onSubmit, isSubmitting, isSubmitted }
}
