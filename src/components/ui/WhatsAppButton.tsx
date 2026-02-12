'use client';

import { MessageCircle } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';
import businessData from '@/data/business.json';
import { useLocale } from 'next-intl';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
}

export default function WhatsAppButton({ message, className = '' }: WhatsAppButtonProps) {
  const locale = useLocale();
  
  const defaultMessage = locale === 'ar' 
    ? 'مرحباً، أود الاستفسار عن خدماتكم'
    : 'Hello, I would like to inquire about your services';

  const whatsappUrl = generateWhatsAppLink(
    businessData.contact.whatsapp,
    message || defaultMessage
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 ${locale === 'ar' ? 'left-6' : 'right-6'} z-50 group ${className}`}
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
        
        {/* Button */}
        <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="text-white" size={28} />
        </div>

        {/* Tooltip */}
        <div className={`absolute bottom-full mb-2 ${locale === 'ar' ? 'right-0' : 'left-0'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}>
          <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
            {locale === 'ar' ? 'تواصل معنا عبر واتساب' : 'Chat on WhatsApp'}
          </div>
        </div>
      </div>
    </a>
  );
}
