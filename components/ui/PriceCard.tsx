import { Card } from '@/components/ui/card'
import { getIcon } from '@/lib/icons'
import { Check } from 'lucide-react'

interface PriceCardProps {
	icon: string
	title: string
	price: string
	description: string
	features: string[]
	isPopular?: boolean
}

export function PriceCard({
	icon,
	title,
	price,
	description,
	features,
	isPopular,
}: PriceCardProps) {
	const IconComponent = getIcon(icon)

	return (
		<Card
			className={`p-6 relative ${
				isPopular ? 'ring-2 ring-orange-600 shadow-lg' : ''
			}`}
		>
			{isPopular && (
				<div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
					<span className='bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold'>
						Le plus populaire
					</span>
				</div>
			)}

			<div className='text-center mb-6'>
				<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
					<IconComponent className='h-6 w-6 text-blue-600' />
				</div>
				<h3 className='text-xl font-bold text-gray-900 mb-2'>{title}</h3>
				<p className='text-gray-600 text-sm mb-4'>{description}</p>
				<div className='mb-4'>
					<span className='text-4xl font-bold text-blue-600'>{price}€</span>
					<span className='text-gray-600 ml-2'>TTC</span>
				</div>
			</div>

			<div className='space-y-3 mb-6'>
				{features.map((feature, index) => (
					<div key={index} className='flex items-center gap-3'>
						<Check className='w-5 h-5 text-green-500 flex-shrink-0' />
						<span className='text-gray-700 text-sm'>{feature}</span>
					</div>
				))}
			</div>

			<a
				href='tel:0763333336'
				className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors text-center block ${
					isPopular
						? 'bg-orange-600 text-white hover:bg-orange-700'
						: 'bg-blue-600 text-white hover:bg-blue-700'
				}`}
			>
				Commander maintenant
			</a>
		</Card>
	)
}
