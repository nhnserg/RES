'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Card } from '@/components/ui/card'
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
import { Send, CheckCircle } from 'lucide-react'

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

type FormData = z.infer<typeof formSchema>

export function RequestForm() {
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
		watch,
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
	})

	const onSubmit = async (data: FormData) => {
		setIsSubmitting(true)

		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 1000))

		console.log('Request form submitted:', data)
		setIsSubmitted(true)
		setIsSubmitting(false)
		reset()

		// Reset success message after 5 seconds
		setTimeout(() => setIsSubmitted(false), 5000)
	}

	if (isSubmitted) {
		return (
			<Card className='p-8 text-center'>
				<CheckCircle className='h-16 w-16 text-green-600 mx-auto mb-4' />
				<h3 className='text-2xl font-bold text-gray-900 mb-2'>
					Demande envoyée !
				</h3>
				<p className='text-gray-600 mb-4'>
					Nous vous contacterons dans les plus brefs délais pour confirmer votre
					intervention.
				</p>
				<p className='text-sm text-gray-500'>
					Pour une urgence, appelez-nous directement au{' '}
					<strong>07 63 33 33 36</strong>
				</p>
			</Card>
		)
	}

	return (
		<Card className='p-8 mt-8'>
			<h3 className='text-2xl font-bold text-gray-900 mb-6'>
				Formulaire de Demande de Remorquage
			</h3>

			<form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					<div>
						<Label htmlFor='name'>Nom complet *</Label>
						<Input
							id='name'
							{...register('name')}
							className={errors.name ? 'border-red-500' : ''}
						/>
						{errors.name && (
							<p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>
						)}
					</div>

					<div>
						<Label htmlFor='phone'>Téléphone *</Label>
						<Input
							id='phone'
							type='tel'
							{...register('phone')}
							className={errors.phone ? 'border-red-500' : ''}
						/>
						{errors.phone && (
							<p className='text-red-500 text-sm mt-1'>
								{errors.phone.message}
							</p>
						)}
					</div>
				</div>

				<div>
					<Label htmlFor='email'>Email (optionnel)</Label>
					<Input
						id='email'
						type='email'
						{...register('email')}
						className={errors.email ? 'border-red-500' : ''}
					/>
					{errors.email && (
						<p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
					)}
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					<div>
						<Label>Type de véhicule *</Label>
						<Select onValueChange={value => setValue('vehicleType', value)}>
							<SelectTrigger
								className={errors.vehicleType ? 'border-red-500' : ''}
							>
								<SelectValue placeholder='Sélectionnez le type' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='voiture'>Voiture</SelectItem>
								<SelectItem value='utilitaire'>Utilitaire</SelectItem>
								<SelectItem value='moto'>Moto</SelectItem>
								<SelectItem value='camionnette'>Camionnette</SelectItem>
								<SelectItem value='autre'>Autre</SelectItem>
							</SelectContent>
						</Select>
						{errors.vehicleType && (
							<p className='text-red-500 text-sm mt-1'>
								{errors.vehicleType.message}
							</p>
						)}
					</div>

					<div>
						<Label>Urgence *</Label>
						<Select onValueChange={value => setValue('urgency', value)}>
							<SelectTrigger className={errors.urgency ? 'border-red-500' : ''}>
								<SelectValue placeholder="Niveau d'urgence" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='urgent'>Urgent (moins 1h)</SelectItem>
								<SelectItem value='rapide'>Rapide (entre 1 et 4h)</SelectItem>
								<SelectItem value='standard'>
									Standard (aujourd&apos;hui)
								</SelectItem>
								<SelectItem value='planifie'>
									Planifié (date ultérieure)
								</SelectItem>
							</SelectContent>
						</Select>
						{errors.urgency && (
							<p className='text-red-500 text-sm mt-1'>
								{errors.urgency.message}
							</p>
						)}
					</div>
				</div>

				<div>
					<Label htmlFor='location'>Lieu de prise en charge *</Label>
					<Input
						id='location'
						{...register('location')}
						placeholder='ex: 123 Avenue de la République, Marseille'
						className={errors.location ? 'border-red-500' : ''}
					/>
					{errors.location && (
						<p className='text-red-500 text-sm mt-1'>
							{errors.location.message}
						</p>
					)}
				</div>

				<div>
					<Label htmlFor='destination'>Destination *</Label>
					<Input
						id='destination'
						{...register('destination')}
						placeholder='ex: Garage Dupont, 456 Rue de la Paix, Marseille'
						className={errors.destination ? 'border-red-500' : ''}
					/>
					{errors.destination && (
						<p className='text-red-500 text-sm mt-1'>
							{errors.destination.message}
						</p>
					)}
				</div>

				<div>
					<Label htmlFor='description'>Description de la situation *</Label>
					<Textarea
						id='description'
						rows={4}
						{...register('description')}
						placeholder='Décrivez brièvement la situation (panne, accident, etc.)'
						className={errors.description ? 'border-red-500' : ''}
					/>
					{errors.description && (
						<p className='text-red-500 text-sm mt-1'>
							{errors.description.message}
						</p>
					)}
				</div>

				<Button
					type='submit'
					disabled={isSubmitting}
					className='w-full bg-blue-600 hover:bg-blue-700'
				>
					{isSubmitting ? (
						'Envoi en cours...'
					) : (
						<>
							<Send className='h-4 w-4 mr-2' />
							Envoyer la demande
						</>
					)}
				</Button>
			</form>

			<div className='mt-6 p-4 bg-yellow-50 rounded-lg'>
				<p className='text-yellow-800 text-sm'>
					<strong>Important :</strong> Ce formulaire est pour les demandes non
					urgentes. En cas d&apos;urgence ou d&apos;accident, appelez-nous
					directement au{' '}
					<a
						href='tel:0763333336'
						className='font-semibold text-yellow-900 hover:underline'
					>
						07 63 33 33 36
					</a>
				</p>
			</div>
		</Card>
	)
}
