import { Mail, MapPin, GraduationCap } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="flex flex-col space-y-2 text-gray-800 dark:text-gray-200">
      <div className="flex items-center space-x-2">
        <Mail className="w-4 h-4" />
        <a href="mailto:svr@cit.tum.de" className="hover:underline">
          anja.svraka@uni-hamburg.de
        </a>
      </div>

      <div className="flex items-center space-x-2">
        <MapPin className="w-4 h-4" />
        <span>Hamburg, Germany</span>
      </div>

      <div className="flex items-center space-x-2">
        <GraduationCap className="w-4 h-4" />
        <span> University of Hamburg</span>
      </div>
    </div>
  );
};

export default ContactInfo;