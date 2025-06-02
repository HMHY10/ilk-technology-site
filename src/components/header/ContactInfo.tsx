import { Phone, Mail } from "lucide-react";
interface ContactInfoProps {
  isScrolled: boolean;
}
export const ContactInfo = ({
  isScrolled
}: ContactInfoProps) => <div className="flex flex-col items-end justify-center gap-1">
    <a href="tel:02030510367" className={`flex items-center gap-2 text-sm font-medium ${isScrolled ? "text-primary hover:text-accent" : "text-primary hover:text-accent"}`}>
      <Phone className="h-4 w-4 sm:text-inherit text-accent" />
      <span className="hidden sm:inline">0203 051 0367</span>
    </a>
    <a href="mailto:info@ilktechnologies.com" className={`flex items-center gap-2 text-sm font-medium ${isScrolled ? "text-primary hover:text-accent" : "text-primary hover:text-accent"}`}>
      <Mail className="h-4 w-4 sm:text-inherit text-accent" />
      <span className="hidden sm:inline">sales@ilktechnology.com</span>
    </a>
  </div>;