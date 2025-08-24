import type { Metadata } from 'next'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { PageHeader } from '@/components/ui/PageHeader'
import servicesData from '@/data/services.json'

export const metadata: Metadata = {
	title: 'Nos Services de Remorquage',
	description:
		'Découvrez tous nos services de remorquage à Marseille : voitures, utilitaires, dépannage urgent 24h/24.',
}

export default function ServicesPage() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
			<PageHeader
				title='Nos Services de Remorquage'
				subtitle='Solutions complètes de remorquage et dépannage automobile à Marseille'
			/>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{servicesData.servicesPage.map((service, index) => (
						<ServiceCard key={index} {...service} />
					))}
				</div>

				<div className='mt-16 bg-blue-50 rounded-2xl p-8 text-center'>
					<h3 className='text-2xl font-bold text-gray-900 mb-4'>
						Besoin d&apos;un service personnalisé ?
					</h3>
					<p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
						Contactez-nous pour discuter de vos besoins spécifiques. Nous
						adaptons nos services à chaque situation.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<a
							href='tel:0763333336'
							className='bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors'
						>
							Appeler maintenant
						</a>
						<a
							href='/contact'
							className='bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors'
						>
							Demander un devis
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
