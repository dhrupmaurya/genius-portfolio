
import { motion } from "framer-motion";
import { GraduationCap, Book, Code } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Hello, I'm <span className="text-blue-600">Dhrup Maurya</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              B.Tech CSE Student W/S AI & ML
            </h2>
            <div className="flex flex-col gap-3 text-gray-600">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <span>Currently in 3rd year pursuing B.Tech CSE W/S AI & ML at SRMIST Chennai</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-600" />
                <span>Upcoming Software Intern @ Citi Bank</span>
              </div>
              <div className="flex items-center gap-2">
                <Book className="w-5 h-5 text-blue-600" />
                <span>Passionate about AI/ML & Web Development</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/placeholder.jpg"
                alt="Professional Photo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <span className="text-blue-600 font-semibold">Upcoming Intern</span>
              <img
                src="/logo.jpeg"
                alt="Citi Bank Logo"
                className="h-8 mt-2"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
