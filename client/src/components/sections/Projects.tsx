import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "EcoTracker Mobile",
    description: "A sustainability tracking app that helps users monitor their carbon footprint and discover eco-friendly alternatives for daily habits.",
    tech: ["Flutter", "Firebase", "Node.js"],
    github: "https://github.com/ZXNDKO",
    demo: "#",
  },
  {
    title: "Smart Inventory System",
    description: "An enterprise-grade inventory management solution with real-time tracking, automated alerts, and detailed analytics dashboards.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    github: "https://github.com/ZXNDKO",
    demo: "#",
  },
  {
    title: "HealthConnect Portal",
    description: "A secure patient-doctor communication platform featuring appointment scheduling, medical record access, and instant messaging.",
    tech: ["Next.js", "Tailwind CSS", "Prisma"],
    github: "https://github.com/ZXNDKO",
    demo: "#",
  },
  {
    title: "DataViz Analytics",
    description: "A powerful data visualization tool that transforms complex datasets into interactive, easy-to-understand charts and reports.",
    tech: ["React", "D3.js", "Pandas", "Python"],
    github: "https://github.com/ZXNDKO",
    demo: "#",
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
                  <Button asChild size="sm" className="gap-2 bg-[#397D54] hover:bg-[#2d6342]">
                    <a href={project.demo}>
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
