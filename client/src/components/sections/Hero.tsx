import { motion } from "framer-motion";
import { ArrowRight, Download, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide">
                Welcome to my portfolio
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance text-foreground leading-[1.1]">
                Hi, I'm <span className="text-primary block mt-2">Chompoonuch</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-medium text-muted-foreground mt-4">
                Aspiring Software Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 pt-4 leading-relaxed">
                Passionate about crafting clean, efficient code and building digital experiences that matter. Always learning, always building.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Button size="lg" className="rounded-full px-8 gap-2 group shadow-lg shadow-primary/20" asChild>
                <a href="#contact">
                  Let's Talk
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 gap-2 group border-border hover:bg-muted" asChild>
                <a href="https://github.com/ZXNDKO" target="_blank" rel="noreferrer">
                  <Github className="w-4 h-4 group-hover:text-primary transition-colors" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Abstract shape representing the developer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-[spin_8s_linear_infinite] opacity-20 blur-xl" />
              <div className="absolute inset-4 bg-gradient-to-bl from-card to-background border border-border shadow-2xl rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-[120px] font-bold text-primary opacity-20 select-none">
                  CT
                </span>
                <div className="absolute inset-0 border-[8px] border-background rounded-full" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-12 h-12 bg-background border border-border rounded-2xl shadow-lg flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-xl">💻</span>
              </div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/30 flex items-center justify-center animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <span className="font-bold">CS</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
