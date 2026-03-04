import { motion } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiFlutter, SiPandas,
  SiFigma, SiNodedotjs, SiTailwindcss, SiDart, SiGithub
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: SiHtml5, color: "group-hover:text-[#E34F26]" },
  { name: "CSS3", icon: SiCss3, color: "group-hover:text-[#1572B6]" },
  { name: "JavaScript", icon: SiJavascript, color: "group-hover:text-[#F7DF1E]" },
  { name: "TypeScript", icon: SiTypescript, color: "group-hover:text-[#3178C6]" },
  { name: "React", icon: SiReact, color: "group-hover:text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "group-hover:text-foreground" },
  { name: "Node.js", icon: SiNodedotjs, color: "group-hover:text-[#339933]" },
  { name: "Flutter", icon: SiFlutter, color: "group-hover:text-[#02569B]" },
  { name: "Pandas", icon: SiPandas, color: "group-hover:text-[#150458]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "group-hover:text-[#F24E1E]" },
  { name: "Figma", icon: SiFigma, color: "group-hover:text-[#F24E1E]" },
  { name: "Dart", icon: SiDart, color: "group-hover:text-[#02569B]" },
  { name: "Github", icon: SiGithub, color: "group-hover:text-[#24292E]" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building modern, scalable, and user-centric applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group"
            >
              <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <skill.icon className={`w-12 h-12 mb-4 text-muted-foreground transition-colors duration-300 ${skill.color}`} />
                <h3 className="font-semibold text-sm text-foreground">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
