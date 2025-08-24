import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ContactForm } from '@/components/forms/ContactForm';
import { ContactInfo } from '@/components/sections/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact - Remorquage Marseille 24/7',
  description: 'Contactez-nous pour un remorquage urgent à Marseille. Téléphone 24h/24, WhatsApp, email. Intervention rapide garantie.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <PageHeader 
        title="Contactez-Nous"
        subtitle="Service client disponible 24h/24 et 7j/7"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}