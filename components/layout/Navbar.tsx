'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import navigationData from '@/data/navigation.json';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
		<nav className='bg-white shadow-lg sticky top-0 z-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					{/* Logo */}
					<Link href='/' className='flex items-center'>
						<span className='text-2xl font-bold text-blue-600'>
							Remorquage Marseille
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center space-x-8'>
						{navigationData.mainNavigation.map(item => (
							<Link
								key={item.name}
								href={item.href}
								className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors'
							>
								{item.name}
							</Link>
						))}
						<a
							href='tel:0763333336'
							className='bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center gap-2'
						>
							<Phone className='h-4 w-4' />
							07 63 33 33 36
						</a>
					</div>

					{/* Mobile menu button */}
					<div className='md:hidden'>
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className='text-gray-700 hover:text-blue-600'
						>
							{mobileMenuOpen ? (
								<X className='h-6 w-6' />
							) : (
								<Menu className='h-6 w-6' />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className='md:hidden bg-white border-t'
					>
						<div className='px-2 pt-2 pb-3 space-y-1'>
							{navigationData.mainNavigation.map(item => (
								<Link
									key={item.name}
									href={item.href}
									onClick={() => setMobileMenuOpen(false)}
									className='text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium'
								>
									{item.name}
								</Link>
							))}
							<a
								href='tel:0763333336'
								className='bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center gap-2 mx-3 mt-4'
							>
								<Phone className='h-4 w-4' />
								Appeler maintenant
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}
