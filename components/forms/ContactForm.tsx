'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Send, CheckCircle } from 'lucide-react'
import { useContactForm } from '@/hooks/useContactForm.ts'

export function ContactForm() {
	const { form, onSubmit, isSubmitting, isSubmitted } = useContactForm()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = form

	if (isSubmitted) {
		return (
			<Card className='p-8 text-center'>
				<CheckCircle className='h-16 w-16 text-green-600 mx-auto mb-4' />
				<h3 className='text-2xl font-bold text-gray-900 mb-2'>
					Message envoyé !
				</h3>
				<p className='text-gray-600'>
					Nous vous répondrons dans les plus brefs délais.
				</p>
			</Card>
		)
	}

	return (
		<Card className='p-8'>
			<h3 className='text-2xl font-bold text-gray-900 mb-6'>
				Envoyez-nous un message
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
					<Label htmlFor='email'>Email *</Label>
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

				<div>
					<Label htmlFor='subject'>Sujet *</Label>
					<Input
						id='subject'
						{...register('subject')}
						className={errors.subject ? 'border-red-500' : ''}
					/>
					{errors.subject && (
						<p className='text-red-500 text-sm mt-1'>
							{errors.subject.message}
						</p>
					)}
				</div>

				<div>
					<Label htmlFor='message'>Message *</Label>
					<Textarea
						id='message'
						rows={5}
						{...register('message')}
						className={errors.message ? 'border-red-500' : ''}
					/>
					{errors.message && (
						<p className='text-red-500 text-sm mt-1'>
							{errors.message.message}
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
							Envoyer le message
						</>
					)}
				</Button>
			</form>

			<p className='text-gray-500 text-sm mt-4'>
				* Champs obligatoires. Vos données sont protégées et ne seront pas
				partagées.
			</p>
		</Card>
	)
}
