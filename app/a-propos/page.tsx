import type { Metadata } from 'next'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from '@/components/ui/card'
import { Shield, Clock, Users, Award, MapPin } from 'lucide-react'
import Image from 'next/image'
import { getIcon } from '@/lib/icons'
import aboutData from '@/data/about.json'

export const metadata: Metadata = {
	title: 'À Propos - Remorquage Marseille',
	description:
		'Entreprise de remorquage familiale à Marseille depuis 2010. Équipe expérimentée, matériel moderne, service de qualité.',
}

export default function AboutPage() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
			<PageHeader
				title='À Propos de Nous'
				subtitle='Votre partenaire de confiance pour le remorquage à Marseille depuis 2010'
			/>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				{/* Notre Histoire */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20'>
					<div>
						<h2 className='text-3xl font-bold text-gray-900 mb-6'>
							Notre Histoire
						</h2>
						<p className='text-gray-600 mb-4'>
							Fondée en 2010 par Jean Dupont, notre entreprise familiale
							s&apos;est rapidement imposée comme l&apos;un des leaders du
							remorquage à Marseille. Avec plus de 15 années d&apos;expérience,
							nous avons développé une expertise unique dans tous les domaines
							du dépannage automobile.
						</p>
						<p className='text-gray-600 mb-6'>
							Notre mission est simple : offrir un service de remorquage rapide,
							fiable et abordable à tous les automobilistes marseillais. Que ce
							soit pour une panne, un accident ou un transport planifié, nous
							sommes là 24h/24 et 7j/7 pour vous accompagner.
						</p>
						<div className='flex flex-wrap gap-4'>
							<div className='bg-blue-100 text-blue-800 px-4 py-2 rounded-lg'>
								<span className='font-semibold'>Licence transport public</span>
							</div>
							<div className='bg-green-100 text-green-800 px-4 py-2 rounded-lg'>
								<span className='font-semibold'>Assurance tous risques</span>
							</div>
							<div className='bg-orange-100 text-orange-800 px-4 py-2 rounded-lg'>
								<span className='font-semibold'>Certifié Qualité</span>
							</div>
						</div>
					</div>
					<div className='relative'>
						<Image
							src='https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg'
							alt='Équipe de remorquage professionnel'
							width={600}
							height={400}
							className='rounded-lg shadow-lg'
						/>
					</div>
				</div>

				{/* Statistiques */}
				<div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-20'>
					{aboutData.stats.map((stat, index) => {
						const IconComponent = getIcon(stat.icon)
						return (
							<Card key={index} className='p-6 text-center'>
								<IconComponent className='h-8 w-8 text-blue-600 mx-auto mb-4' />
								<div className='text-3xl font-bold text-gray-900 mb-2'>
									{stat.value}
								</div>
								<div className='text-gray-600 text-sm'>{stat.label}</div>
							</Card>
						)
					})}
				</div>

				{/* Notre Équipe */}
				<div>
					<h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
						Notre Équipe
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{aboutData.team.map((member, index) => (
							<Card key={index} className='p-6 text-center'>
								<div className='w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center'>
									<Users className='h-8 w-8 text-gray-500' />
								</div>
								<h3 className='text-xl font-bold text-gray-900 mb-2'>
									{member.name}
								</h3>
								<p className='text-blue-600 font-semibold mb-2'>
									{member.role}
								</p>
								<p className='text-orange-600 text-sm mb-3'>
									{member.experience}
								</p>
								<p className='text-gray-600 text-sm'>{member.description}</p>
							</Card>
						))}
					</div>
				</div>

				{/* Nos Engagements */}
				<div className='mt-20 bg-blue-600 text-white rounded-2xl p-8'>
					<h3 className='text-2xl font-bold mb-6 text-center'>
						Nos Engagements
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div className='text-center'>
							<Shield className='h-12 w-12 mx-auto mb-4' />
							<h4 className='text-lg font-semibold mb-2'>Sécurité Maximale</h4>
							<p className='text-blue-100'>
								Matériel moderne et équipe formée aux dernières normes de
								sécurité.
							</p>
						</div>
						<div className='text-center'>
							<Clock className='h-12 w-12 mx-auto mb-4' />
							<h4 className='text-lg font-semibold mb-2'>Réactivité</h4>
							<p className='text-blue-100'>
								Intervention rapide partout à Marseille, 24h/24 et 7j/7.
							</p>
						</div>
						<div className='text-center'>
							<Award className='h-12 w-12 mx-auto mb-4' />
							<h4 className='text-lg font-semibold mb-2'>Excellence</h4>
							<p className='text-blue-100'>
								Service de qualité supérieure à prix compétitif.
							</p>
						</div>
					</div>
				</div>

				{/* Map placeholder */}
				<div className='mt-8'>
					<div className='w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center'>
						<div className='text-center text-gray-500'>
							<MapPin className='h-12 w-12 mx-auto mb-2' />
							<p>Carte Google Maps</p>
							<p className='text-sm'> 13009 Marseille</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
