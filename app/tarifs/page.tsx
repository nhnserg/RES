import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { PriceCard } from '@/components/ui/PriceCard'
import { Clock } from 'lucide-react'
import pricingData from '@/data/pricing.json'

export const metadata: Metadata = {
	title: 'Tarifs Remorquage Marseille',
	description:
		'Tarifs transparents pour le remorquage à Marseille. Prix fixe, pas de surprise. Devis gratuit par téléphone.',
}

export default function TarifsPage() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
			<PageHeader
				title='Tarifs Transparents'
				subtitle='Prix fixes, pas de surprise. Devis gratuit par téléphone.'
			/>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
					{pricingData.pricingZones.map((zone, index) => (
						<PriceCard key={index} {...zone} />
					))}
				</div>

				<div className='bg-white rounded-2xl shadow-lg p-8'>
					<h3 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
						Services Complémentaires
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						{pricingData.additionalServices.map((item, index) => (
							<div
								key={index}
								className='flex justify-between items-center p-4 bg-gray-50 rounded-lg'
							>
								<span className='font-medium text-gray-900'>
									{item.service}
								</span>
								<span className='text-orange-600 font-semibold'>
									{item.price}
								</span>
							</div>
						))}
					</div>
				</div>

				<div className='mt-12 text-center bg-blue-600 text-white rounded-2xl p-8'>
					<h3 className='text-2xl font-bold mb-4'>
						Devis Gratuit en 2 Minutes
					</h3>
					<p className='text-blue-100 mb-6 max-w-2xl mx-auto'>
						Appelez-nous maintenant pour obtenir un devis précis et transparent.
						Pas de frais cachés, prix annoncé = prix payé.
					</p>
					<a
						href='tel:0763333336'
						className='bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center gap-2 text-lg'
					>
						<Clock className='h-5 w-5' />
						07 63 33 33 36
					</a>
				</div>
			</div>
		</div>
	)
}
