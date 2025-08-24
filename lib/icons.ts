import {
	Car,
	Truck,
	Clock,
	MapPin,
	Shield,
	Wrench,
	Users,
	Award,
	Phone,
	MessageCircle,
	Mail,
	DivideIcon as LucideIcon,
} from 'lucide-react'

export const iconMap: Record<string, typeof LucideIcon> = {
	Car,
	Truck,
	Clock,
	MapPin,
	Shield,
	Wrench,
	Users,
	Award,
	Phone,
	MessageCircle,
	Mail,
}

export function getIcon(iconName: string): typeof LucideIcon {
	return iconMap[iconName] || Car
}
