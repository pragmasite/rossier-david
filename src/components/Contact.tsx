import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();

  const contactItems = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 79 204 17 45",
      href: "tel:+41792041745",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "contact@davidrossier.ch",
      href: "mailto:contact@davidrossier.ch",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Route de Chamoson 43, 1912 Leytron, CH",
      href: "https://maps.google.com/?q=Route+de+Chamoson+43,+1912+Leytron",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4">
            {t.contact.title1}
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            {t.contact.title2}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.contact.description}
            </p>

            <div className="space-y-4 mt-8">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    target={item.label === t.contact.address ? "_blank" : "_self"}
                    rel={item.label === t.contact.address ? "noopener noreferrer" : ""}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <Button asChild size="lg" className="w-full mt-8">
              <a href="tel:+41792041745">
                <Phone className="h-5 w-5 mr-2" />
                {t.contact.cta}
              </a>
            </Button>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-soft border border-border"
          >
            <iframe
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2756.5483451963633!2d7.208863000000001!3d46.187911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e325c0e1a5555%3A0x9c8e0c0e0c0e0c0e!2sRoute%20de%20Chamoson%2043%2C%201912%20Leytron!5e0!3m2!1sfr!2sch!4v1234567890"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
