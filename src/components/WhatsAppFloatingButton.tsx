import Link from 'next/dist/client/link';
import React from 'react';

interface WhatsAppFloatingButtonProps {
  phoneNumber?: string;
}

const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ phoneNumber }) => {
  if (!phoneNumber) return null;

  // Clean the number: remove spaces, dashes, parentheses, etc.
  // Assuming the input might be like "+91 98765 43210" or "09876543210"
  // For WhatsApp API, we usually need the country code without plus, but let's just strip non-digits and keep leading plus if present to handle it gracefully or rely on user entering correct format
  // Actually, wa.me expects pure digits, preferably with country code.
  const cleanNumber = phoneNumber.replace(/[^\d]/g, '');

  if (!cleanNumber) return null;

  return (
    <Link
      href={`https://wa.me/${cleanNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp text-3xl"></i>
    </Link>
  );
};

export default WhatsAppFloatingButton;
