import { Github, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-foreground">
            Chompoonuch Tubtimsri
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Frontend Developer & Software Engineer
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ZXNDKO"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:CHOMPOONUCH.TUBTIMSRI@GMAIL.COM"
            className="p-2 rounded-full bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-1"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
