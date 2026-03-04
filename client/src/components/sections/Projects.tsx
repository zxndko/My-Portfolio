import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Subscription Manager",
    description: "A scalable subscription tracking dashboard that empowers users to visualize their financial habits and optimize recurring expenses through intuitive, data-driven interfaces.",
    tech: ["React (Vite)", "TypeScript", "Tailwind CSS", "Context API", "Recharts"],
    github: "https://github.com/zxndko/Subscription-Manager",
    preview: "#",
  },
  {
    title: "Pet Care Portal (Veterinary Services)",
    description: "Built a veterinary clinic management system with automated booking, pet health record management, and vet profile pages. This automated the patient intake process, significantly decreasing administrative tasks and manual phone scheduling.",
    tech: ["React", "TypeScript", "Tailwind CSS", "AzureSQL"],
    github: "https://github.com/zxndko/Final-Project",
    preview: "#",
  },
  {
    title: "Shabu Restaurant Ordering System ",
    description: "Engineered a real-time ordering and automated billing system using Flutter and Firebase to streamline restaurant operations.\nSuccessfully reduced service errors and enhanced dining efficiency by providing seamless, instant order tracking.",
    tech: ["Flutter", "Firebase", "Dart"],
    github: "https://github.com/zxndko/Project-Mobile-App",
    preview: "#",
  },

  {
    title: "Retro Cassette Music Player",
    description: "Reimagined the digital music listening experience by applying tactile, skeuomorphic design principles inspired by 90s cassette tapes. This project creates a unique bridge between digital software and physical reality, driving higher user engagement through nostalgia.",
    tech: ["UX Design", "Interaction Design", "Figma"],
    github: "https://github.com/ZXNDKO",
    preview: "#",
  },

];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of my recent work, showcasing my skills in full-stack development and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border bg-card hover-elevate transition-all flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="bg-primary/10 text-primary border-none">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-4 pt-0">
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github size={16} />
                      View Code
                    </a>
                  </Button>
                  {/* <Button asChild size="sm" className="gap-2 bg-[#397D54] hover:bg-[#2d6342]">
                    <a href={project.preview}>
                      <ExternalLink size={16} />
                      Preview
                    </a>
                  </Button> */}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
