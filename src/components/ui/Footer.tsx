
import { Mail, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-blue-50 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Connect With Me</h3>
          <div className="flex space-x-6">
            <a
              href="mailto:dm4214@srmist.edu.in"
              className="text-blue-600 hover:text-blue-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/dhrupmaurya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/dhrup-chandra-maurya-058120246/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
