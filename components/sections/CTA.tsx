'use client'

import { motion } from 'framer-motion'
import { Phone, Clock, ArrowRight } from 'lucide-react'

export function CTA() {
	return (
		<section className='py-20 bg-gradient-to-r from-orange-600 to-orange-700'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<div className='flex justify-center mb-6'>
						<Clock className='h-16 w-16 text-white' />
					</div>

					<h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
						Besoin d&apos;un Remorquage Urgent ?
					</h2>

					<p className='text-xl text-orange-100 mb-8 max-w-3xl mx-auto'>
						Notre équipe intervient 24h/24 et 7j/7 partout à Marseille. Appelez
						maintenant pour une prise en charge immédiate !
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
						<motion.a
							href='tel:0763333336'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors flex items-center gap-3'
						>
							<Phone className='h-6 w-6' />
							07 63 33 33 36
						</motion.a>

						<motion.a
							href='/demande'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-white hover:text-orange-600 transition-colors flex items-center gap-3'
						>
							Demander un devis
							<ArrowRight className='h-6 w-6' />
						</motion.a>
					</div>

					<p className='text-orange-200 mt-6 text-lg'>
						Intervention garantie en moins de 30 minutes
					</p>
				</motion.div>
			</div>
		</section>
	)
}
