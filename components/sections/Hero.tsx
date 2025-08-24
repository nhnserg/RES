'use client'

import { motion } from 'framer-motion'
import { Phone, Clock, MapPin } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
	return (
		<section className='relative min-h-screen flex items-center bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900'>
			{/* Background Image */}
			<div className='absolute inset-0 z-0'>
				<Image
					src='https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg'
					alt='Remorquage professionnel à Marseille'
					fill
					className='object-cover opacity-20'
					priority
				/>
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					{/* Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className='text-white'
					>
						<h1 className='text-4xl md:text-6xl font-bold leading-tight mb-6'>
							<span className='text-orange-400'>Remorquage Voiture</span>
							<br />à Marseille 24/7
						</h1>

						<p className='text-xl md:text-2xl mb-8 text-blue-100'>
							Service professionnel de dépannage et remorquage
							<br />
							Intervention rapide partout à Marseille
						</p>

						<div className='flex flex-col sm:flex-row gap-4 mb-12'>
							<motion.a
								href='tel:0763333336'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className='bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-3'
							>
								<Phone className='h-6 w-6' />
								Appeler maintenant
							</motion.a>

							<motion.a
								href='/demande'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className='bg-white text-blue-600 border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-3'
							>
								Demander un devis
							</motion.a>
						</div>

						{/* Features */}
						<div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
							<div className='flex items-center gap-3'>
								<Clock className='h-8 w-8 text-orange-400' />
								<div>
									<div className='font-semibold'>24h/24 - 7j/7</div>
									<div className='text-blue-200 text-sm'>
										Service d&apos;urgence
									</div>
								</div>
							</div>
							<div className='flex items-center gap-3'>
								<MapPin className='h-8 w-8 text-orange-400' />
								<div>
									<div className='font-semibold'>Toute Marseille</div>
									<div className='text-blue-200 text-sm'>
										Intervention moins 30min
									</div>
								</div>
							</div>
							<div className='flex items-center gap-3'>
								<Phone className='h-8 w-8 text-orange-400' />
								<div>
									<div className='font-semibold'>07 63 33 33 36</div>
									<div className='text-blue-200 text-sm'>Appel gratuit</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Image */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='relative'
					>
						<Image
							src='https://images.pexels.com/photos/13065641/pexels-photo-13065641.jpeg'
							alt='Camion de remorquage professionnel'
							width={600}
							height={400}
							className='rounded-lg shadow-2xl'
						/>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
