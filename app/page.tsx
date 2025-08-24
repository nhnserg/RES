import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { CTA } from '@/components/sections/CTA'

export default function HomePage() {
	return (
		<>
			<Hero />
			<Services />
			<WhyChooseUs />
			<CTA />
		</>
	)
}
