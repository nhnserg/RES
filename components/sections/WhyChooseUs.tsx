'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin } from 'lucide-react'
import { getIcon } from '@/lib/icons'
import whyChooseUsData from '@/data/whyChooseUs.json'

export function WhyChooseUs() {
	return (
		<section className='py-20 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'
				>
					<h2 className='text-4xl font-bold text-gray-900 mb-4'>
						Pourquoi Nous Choisir ?
					</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
						Leader du remorquage à Marseille, nous garantissons un service de
						qualité supérieure à prix compétitif
					</p>
				</motion.div>

				{/* Stats */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-16'
				>
					{whyChooseUsData.stats.map((stat, index) => (
						<div key={index} className='text-center'>
							<div className='text-3xl md:text-4xl font-bold text-blue-600 mb-2'>
								{stat.number}
							</div>
							<div className='text-gray-600 font-medium'>{stat.label}</div>
						</div>
					))}
				</motion.div>

				{/* Features */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
					>
						<div className='space-y-8'>
							{whyChooseUsData.features.map((feature, index) => {
								const IconComponent = getIcon(feature.icon)
								return (
									<div key={index} className='flex items-start gap-4'>
										<div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0'>
											<IconComponent className='h-6 w-6 text-blue-600' />
										</div>
										<div>
											<h3 className='text-xl font-bold text-gray-900 mb-2'>
												{feature.title}
											</h3>
											<p className='text-gray-600'>{feature.description}</p>
										</div>
									</div>
								)
							})}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='bg-blue-600 text-white rounded-2xl p-8'
					>
						<h3 className='text-2xl font-bold mb-6'>
							Contactez-nous maintenant
						</h3>
						<p className='text-blue-100 mb-8'>
							Notre équipe est disponible 24h/24 et 7j/7 pour tous vos besoins
							de remorquage d&apos;urgence à Marseille.
						</p>

						<div className='space-y-4 mb-8'>
							<div className='flex items-center gap-3'>
								<Phone className='h-5 w-5 text-orange-400' />
								<span>07 63 33 33 36</span>
							</div>
							<div className='flex items-center gap-3'>
								<MapPin className='h-5 w-5 text-orange-400' />
								<span>Toute la région marseillaise</span>
							</div>
						</div>

						<div className='flex flex-col sm:flex-row gap-4'>
							<a
								href='tel:0763333336'
								className='bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center'
							>
								Appeler maintenant
							</a>
							<a
								href='https://wa.me/33763333336'
								target='_blank'
								rel='noopener noreferrer'
								className='bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center'
							>
								WhatsApp
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
