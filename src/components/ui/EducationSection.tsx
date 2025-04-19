
import { motion } from "framer-motion";

export const EducationSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Education & Experience
          </h2>
          <div className="space-y-12">
            <div className="relative pl-8 border-l-2 border-blue-200">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative mb-10"
              >
                <div className="absolute -left-10 top-0 w-4 h-4 bg-blue-600 rounded-full" />
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Software Development Intern
                  </h3>
                  <p className="text-blue-600 mb-2">Citi Bank</p>
                  <p className="text-gray-600">Upcoming</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-10 top-0 w-4 h-4 bg-blue-600 rounded-full" />
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    B.Tech in Computer Science (AI & ML)
                  </h3>
                  <p className="text-blue-600 mb-2">SRM Institute of Science and Technology</p>
                  <p className="text-gray-600">2022 - Present</p>
                  <p className="text-gray-600 mt-2">
                    Pursuing specialization in Artificial Intelligence and Machine Learning at SRMIST, Chennai
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
