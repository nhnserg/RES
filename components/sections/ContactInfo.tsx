import { Clock } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { getIcon } from '@/lib/icons'
import contactData from '@/data/contact.json'
import { MapPin } from 'lucide-react'

export function ContactInfo() {
	return (
		<div>
			<h3 className='text-2xl font-bold text-gray-900 mb-8'>Contactez-nous</h3>

			<div className='space-y-6 mb-8'>
				{contactData.contactMethods.map((method, index) => {
					const IconComponent = getIcon(method.icon)
					return (
						<Card key={index} className='p-6'>
							<div className='flex items-start gap-4'>
								<div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0'>
									<IconComponent className='h-6 w-6 text-blue-600' />
								</div>
								<div className='flex-1'>
									<h4 className='font-semibold text-gray-900 mb-1'>
										{method.title}
									</h4>
									{method.href === '#' ? (
										<div>
											<div className='text-blue-600 font-medium'>
												{method.content}
											</div>
											<div className='text-gray-600 text-sm'>
												{method.description}
											</div>
										</div>
									) : (
										<a
											href={method.href}
											className='text-blue-600 hover:text-blue-700 font-medium'
											target={
												method.href.startsWith('http') ? '_blank' : undefined
											}
											rel={
												method.href.startsWith('http')
													? 'noopener noreferrer'
													: undefined
											}
										>
											{method.content}
										</a>
									)}
									<p className='text-gray-600 text-sm mt-1'>
										{method.description}
									</p>
								</div>
							</div>
						</Card>
					)
				})}
			</div>

			{/* Hours */}
			<Card className='p-6 bg-blue-50'>
				<div className='flex items-start gap-4'>
					<Clock className='h-6 w-6 text-blue-600 mt-1' />
					<div>
						<h4 className='font-semibold text-gray-900 mb-2'>
							Horaires d&apos;ouverture
						</h4>
						<div className='space-y-1 text-sm text-gray-600'>
							<div className='flex justify-between'>
								<span>Service d&apos;urgence</span>
								<span className='font-medium text-blue-600'>24h/24 - 7j/7</span>
							</div>
							<div className='flex justify-between'>
								<span>Bureau administratif</span>
								<span>Lun-Ven 8h-18h</span>
							</div>
							<div className='flex justify-between'>
								<span>Samedi</span>
								<span>9h-16h</span>
							</div>
						</div>
					</div>
				</div>
			</Card>

			{/* Map placeholder */}
			<div className='mt-8'>
				<div className='w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center'>
					<div className='text-center text-gray-500'>
						<MapPin className='h-12 w-12 mx-auto mb-2' />
						<p>Carte Google Maps</p>
						<p className='text-sm'>13009 Marseille</p>
					</div>
				</div>
			</div>
		</div>
	)
}
