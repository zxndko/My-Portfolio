import { motion } from "framer-motion";
import { GraduationCap, MapPin, Code2, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold leading-tight">
              A passionate student dedicated to digital innovation.
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Hello! I go by Sand. I am deeply interested in software engineering and frontend development. I thrive on creating intuitive, responsive, and visually appealing applications that solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              My academic journey has equipped me with a strong foundation in computer science principles, while my personal projects have honed my practical skills in modern web and mobile frameworks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="border-none shadow-xl shadow-black/5 bg-background overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-0" />
              <CardContent className="p-8 relative z-10">
                <div className="flex items-start gap-5 mb-8">
                  <div className="p-4 bg-primary/10 text-primary rounded-2xl">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">Education</h4>
                    <p className="text-primary font-medium mt-1">Class of 2022 - 2026</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-1"><MapPin className="w-5 h-5 text-muted-foreground" /></div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Rangsit University</p>
                      <p className="text-muted-foreground">College of Digital Innovation Technology</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1"><Code2 className="w-5 h-5 text-muted-foreground" /></div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Computer Science</p>
                      <p className="text-muted-foreground">4th-Year Student</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1"><Rocket className="w-5 h-5 text-muted-foreground" /></div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Focus Areas</p>
                      <p className="text-muted-foreground">Web Development, Mobile Apps, UI/UX</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
