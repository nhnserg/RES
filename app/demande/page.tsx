import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { RequestForm } from '@/components/forms/RequestForm';
import { EmergencyContact } from '@/components/ui/EmergencyContact';

export const metadata: Metadata = {
  title: 'Demander un Remorquage',
  description: 'Demandez un remorquage à Marseille en quelques clics. Formulaire simple et rapide. Pour les urgences, appelez directement.',
};

export default function DemandePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <PageHeader 
        title="Demander un Remorquage"
        subtitle="Remplissez le formulaire ci-dessous ou appelez-nous directement pour une intervention urgente"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <EmergencyContact />
        <RequestForm />
      </div>
    </div>
  );
}