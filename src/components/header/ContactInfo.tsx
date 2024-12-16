import { Phone, Mail } from "lucide-react";

interface ContactInfoProps {
  isScrolled: boolean;
}

export const ContactInfo = ({ isScrolled }: ContactInfoProps) => (
  <div className="flex flex-col items-end justify-center gap-1">
    <a
      href="tel:+15551234567"
      className={`flex items-center gap-2 text-sm ${
        isScrolled ? "text-white" : "text-white"
      } hover:text-accent`}
    >
      <Phone className="h-4 w-4" />
      <span>+1 (555) 123-4567</span>
    </a>
    <a
      href="mailto:info@ilktechnologies.com"
      className={`flex items-center gap-2 text-sm ${
        isScrolled ? "text-white" : "text-white"
      } hover:text-accent`}
    >
      <Mail className="h-4 w-4" />
      <span>info@ilktechnologies.com</span>
    </a>
  </div>
);