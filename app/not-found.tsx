'use client'
import Link from 'next/link'
import { Phone, Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4'>
			<div className='max-w-md w-full text-center'>
				<div className='mb-8'>
					<h1 className='text-9xl font-bold text-gray-200'>404</h1>
					<h2 className='text-2xl font-bold text-gray-900 mb-4'>
						Page non trouvée
					</h2>
					<p className='text-gray-600 mb-8'>
						La page que vous recherchez n&apos;existe pas ou a été déplacée.
					</p>
				</div>

				<div className='space-y-4'>
					<div className='bg-orange-600 text-white rounded-lg p-6 mb-6'>
						<h3 className='text-lg font-bold mb-2'>
							Besoin d&apos;un dépanneur ?
						</h3>
						<p className='text-orange-100 mb-4'>
							En cas d&apos;urgence, appelez-nous directement
						</p>
						<a
							href='tel:0763333336'
							className='bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center gap-2'
						>
							<Phone className='h-5 w-5' />
							07 63 33 33 36
						</a>
					</div>

					<div className='flex flex-col sm:flex-row gap-4'>
						<Link
							href='/'
							className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2'
						>
							<Home className='h-5 w-5' />
							Accueil
						</Link>
						<button
							onClick={() => window.history.back()}
							className='bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center gap-2'
						>
							<ArrowLeft className='h-5 w-5' />
							Retour
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
