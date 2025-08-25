import { ContactFormData, RequestFormData } from '@/types'
import emailjs from 'emailjs-com'

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!

// === Envoi du formulaire de contact ===
export const sendEmail = async (data: ContactFormData): Promise<void> => {
	const templateParams = {
		from_name: data.name,
		from_email: data.email,
		from_phone: data.phone,
		message: data.message,
		service: data.subject,
	}

	await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
}

export const sendRequestEmail = async (
	data: RequestFormData
): Promise<void> => {
	const templateParams = {
		from_name: data.name,
		from_phone: data.phone,
		from_email: data.email || 'non fourni',
		vehicle: data.vehicleType,
		location: data.location,
		destination: data.destination,
		urgency: data.urgency,
		description: data.description,
	}

	await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
}
