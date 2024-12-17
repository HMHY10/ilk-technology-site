import { Phone, Mail } from "lucide-react";

interface ContactInfoProps {
  isScrolled: boolean;
}

export const ContactInfo = ({ isScrolled }: ContactInfoProps) => (
  <div className="flex flex-col items-end justify-center gap-1">
    <a
      href="tel:02081234567"
      className={`flex items-center gap-2 text-sm ${
        isScrolled ? "text-primary hover:text-accent" : "text-white hover:text-accent"
      }`}
    >
      <Phone className="h-4 w-4 sm:text-inherit text-accent" />
      <span className="hidden sm:inline">020 8123 4567</span>
    </a>
    <a
      href="mailto:info@ilktechnologies.com"
      className={`flex items-center gap-2 text-sm ${
        isScrolled ? "text-primary hover:text-accent" : "text-white hover:text-accent"
      }`}
    >
      <Mail className="h-4 w-4 sm:text-inherit text-accent" />
      <span className="hidden sm:inline">info@ilktechnologies.com</span>
    </a>
  </div>
);