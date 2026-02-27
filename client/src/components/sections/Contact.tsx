import { motion } from "framer-motion";
import { Mail, Github, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    console.log("Form submitted locally:", data);
    form.reset();
    // In a static site, we just show a success message locally
    alert("Thank you for your message! (Static site mode: No backend submission)");
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <Card className="border-border bg-card shadow-sm">
              <CardContent className="p-8 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <p className="text-muted-foreground mb-8">
                    I'm currently available for freelance work or internship opportunities.
                  </p>
                </div>

                <div className="space-y-6">
                  <a 
                    href="mailto:CHOMPOONUCH.TUBTIMSRI@GMAIL.COM" 
                    className="flex items-center gap-4 group p-4 rounded-xl hover:bg-muted transition-colors border border-transparent hover:border-border"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail size={24} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-sm text-muted-foreground font-medium mb-1">Email</p>
                      <p className="font-semibold text-foreground text-sm sm:text-base truncate">CHOMPOONUCH.TUBTIMSRI</p>
                      <p className="font-semibold text-foreground text-sm sm:text-base truncate">@GMAIL.COM</p>
                    </div>
                  </a>

                  <a 
                    href="https://github.com/ZXNDKO" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-4 group p-4 rounded-xl hover:bg-muted transition-colors border border-transparent hover:border-border"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Github size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">GitHub</p>
                      <p className="font-semibold text-foreground text-base">github.com/ZXNDKO</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <Card className="border-border bg-card shadow-lg shadow-black/5">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your Name" 
                                className="px-4 py-6 bg-background focus-visible:ring-primary/20" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Email</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="you@example.com" 
                                className="px-4 py-6 bg-background focus-visible:ring-primary/20" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your project..." 
                              className="min-h-[160px] resize-none px-4 py-4 bg-background focus-visible:ring-primary/20" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full sm:w-auto px-8 gap-2 font-semibold shadow-md shadow-primary/20 bg-[#397D54] hover:bg-[#2d6342]" 
                    >
                      Send Message
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
