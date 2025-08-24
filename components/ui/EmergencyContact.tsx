import { Phone, Clock, AlertTriangle } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function EmergencyContact() {
	return (
		<Card className='bg-red-50 border-red-200 p-6 mb-8'>
			<div className='flex items-start gap-4'>
				<AlertTriangle className='h-8 w-8 text-red-600 flex-shrink-0 mt-1' />
				<div className='flex-1'>
					<h3 className='text-lg font-bold text-red-900 mb-2'>
						Urgence ? Appelez-nous directement !
					</h3>
					<p className='text-red-800 mb-4'>
						Pour une intervention d&apos;urgence, appelez-nous maintenant. Notre
						équipe est disponible 24h/24 et interviendra dans les plus brefs
						délais.
					</p>
					<div className='flex flex-col sm:flex-row gap-3'>
						<a
							href='tel:0763333336'
							className='bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2'
						>
							<Phone className='h-5 w-5' />
							07 63 33 33 36
						</a>
						<div className='flex items-center gap-2 text-red-700'>
							<Clock className='h-5 w-5' />
							<span className='font-medium'>Intervention moins 30 minutes</span>
						</div>
					</div>
				</div>
			</div>
		</Card>
	)
}
