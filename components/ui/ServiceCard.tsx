import { Card } from '@/components/ui/card'
import { getIcon } from '@/lib/icons'

interface ServiceCardProps {
	icon: string
	title: string
	description: string
	features: string[]
}

export function ServiceCard({
	icon,
	title,
	description,
	features,
}: ServiceCardProps) {
	const IconComponent = getIcon(icon)

	return (
		<Card className='p-6 hover:shadow-lg transition-shadow duration-300'>
			<div className='text-center mb-6'>
				<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
					<IconComponent className='h-8 w-8 text-blue-600' />
				</div>
				<h3 className='text-xl font-bold text-gray-900 mb-3'>{title}</h3>
				<p className='text-gray-600'>{description}</p>
			</div>

			<div className='space-y-3'>
				{features.map((feature, index) => (
					<div key={index} className='flex items-center gap-3'>
						<div className='w-2 h-2 bg-orange-400 rounded-full flex-shrink-0'></div>
						<span className='text-gray-700'>{feature}</span>
					</div>
				))}
			</div>

			<div className='mt-6 pt-6 border-t'>
				<a
					href='tel:0763333336'
					className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block'
				>
					Appeler maintenant
				</a>
			</div>
		</Card>
	)
}
