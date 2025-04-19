
import { motion } from "framer-motion";
import { Github, Link } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "AgriShield",
      description: "A deep learning model that detects pest and recommends pestcides for treatement.",
      technologies: ["Python", "PyTorch", "Deep Learning", "SQL", "Streamlit"],
      githubLink: "https://github.com/vedant281104/AgriShield",
      image: "/agr.png"
    },
    
    {
      title: "Customer App",
      description: "This is a Full-Stack Customer Management Application built using the MEAN stack . The app allows users to  CRUD customer records efficiently.",
      technologies: ["MongoDB", "Express.js", "Angular", "Node.js"],
      githubLink: "https://github.com/dhrupmaurya/Customer-App",
      image: "/cus.jpg"
    },
    ,
    {
      title: "Eduleytics",
      description: "An intelligent task management application with priority prediction and deadline recommendations.",
      technologies: [ "Machine Learning","Python","SQL","Streamlit"],
      githubLink: "https://github.com/vedant281104/Edulytics",
      image: "/edu.jpg"
    },
    {
      title: "Tic Tac Toe Game",
      description: "An interesting game made for people fun and timepass.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/dhrupmaurya/Tic-Tac-Toe",
      image: "/tic.png"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-lg mb-4"
                    />
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end space-x-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Link className="w-5 h-5" />
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};