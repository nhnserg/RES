import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import navigationData from '@/data/navigation.json'

export function Footer() {
	return (
		<footer className='bg-gray-900 text-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					{/* Company Info */}
					<div className='col-span-1'>
						<h3 className='text-xl font-bold mb-4'>Remorquage Marseille</h3>
						<p className='text-gray-400 mb-4'>
							Service de remorquage professionnel à Marseille depuis 2010.
							Intervention rapide 24h/24 et 7j/7.
						</p>
						<div className='flex items-center gap-2 text-gray-400 mb-2'>
							<Clock className='h-4 w-4' />
							<span>24h/24 - 7j/7</span>
						</div>
					</div>

					{/* Services */}
					<div>
						<h3 className='text-lg font-semibold mb-4'>Nos Services</h3>
						<ul className='space-y-2'>
							{navigationData.footerNavigation.services.map(item => (
								<li key={item.name}>
									<Link
										href={item.href}
										className='text-gray-400 hover:text-white transition-colors'
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className='text-lg font-semibold mb-4'>Entreprise</h3>
						<ul className='space-y-2'>
							{navigationData.footerNavigation.company.map(item => (
								<li key={item.name}>
									<Link
										href={item.href}
										className='text-gray-400 hover:text-white transition-colors'
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className='text-lg font-semibold mb-4'>Contact</h3>
						<div className='space-y-3'>
							<a
								href='tel:0763333336'
								className='flex items-center gap-2 text-gray-400 hover:text-white transition-colors'
							>
								<Phone className='h-4 w-4' />
								07 63 33 33 36
							</a>
							<a
								href='mailto:tadevosyan050@gmail.com'
								className='flex items-center gap-2 text-gray-400 hover:text-white transition-colors'
							>
								<Mail className='h-4 w-4' />
								tadevosyan050@gmail.com
							</a>
							<div className='flex items-start gap-2 text-gray-400'>
								<MapPin className='h-4 w-4 mt-1' />
								<span>13009 Marseille</span>
							</div>
						</div>
					</div>
				</div>

				<div className='border-t border-gray-800 mt-8 pt-8'>
					<div className='flex flex-col md:flex-row justify-between items-center'>
						<p className='text-gray-400 text-sm'>
							© 2024 Remorquage Marseille. Tous droits réservés.
						</p>
						<div className='flex space-x-6 mt-4 md:mt-0'>
							<Link
								href='/mentions-legales'
								className='text-gray-400 hover:text-white text-sm'
							>
								Mentions légales
							</Link>
							<Link
								href='/confidentialite'
								className='text-gray-400 hover:text-white text-sm'
							>
								Confidentialité
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
