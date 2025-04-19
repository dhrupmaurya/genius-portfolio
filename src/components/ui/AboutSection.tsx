
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm a third-year B.Tech student at SRM Institute of Science and Technology (SRMIST), Chennai,
            pursuing Computer Science W/S Artificial Intelligence and Machine
            Learning. My academic journey has equipped me with strong foundations in programming,
            data structures, web development and Machine Learning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="font-semibold text-blue-600 mb-2">Academic Focus</h3>
              <p className="text-gray-600">AI & ML Specialization</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="font-semibold text-blue-600 mb-2">University</h3>
              <p className="text-gray-600">SRMIST Chennai</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="font-semibold text-blue-600 mb-2">Next Step</h3>
              <p className="text-gray-600">To grab a good job</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
