'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function FloatingButtons() {
	return (
		<div className='fixed bottom-6 right-6 z-50 flex flex-col gap-4'>
			{/* WhatsApp Button */}
			<motion.a
				href='https://wa.me/33763333336'
				target='_blank'
				rel='noopener noreferrer'
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				className='w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors'
				title='Contactez-nous sur WhatsApp'
			>
				<MessageCircle className='h-7 w-7' />
			</motion.a>

			{/* Phone Button */}
			<motion.a
				href='tel:+33763333336'
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				className='w-16 h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors'
				title='Appeler maintenant'
			>
				<Phone className='h-8 w-8' />
			</motion.a>

			{/* Pulse animation for phone button */}
			<div className='absolute bottom-0 right-0 w-16 h-16 bg-orange-600 rounded-full animate-ping opacity-20 pointer-events-none'></div>
		</div>
	)
}
