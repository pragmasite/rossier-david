import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-2">Rossier David</h3>
            <p className="text-sm text-primary-foreground/60 mb-4">
              {t.footer.tagline}
            </p>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-sm mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#a-propos" className="hover:text-accent transition-colors">
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="#nos-vins" className="hover:text-accent transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#galerie" className="hover:text-accent transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#horaires" className="hover:text-accent transition-colors">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4">{t.nav.contact}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+41792041745"
                  className="hover:text-accent transition-colors"
                >
                  +41 79 204 17 45
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@davidrossier.ch"
                  className="hover:text-accent transition-colors"
                >
                  contact@davidrossier.ch
                </a>
              </li>
              <li className="text-primary-foreground/60">
                Route de Chamoson 43<br />
                1912 Leytron, Switzerland
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/60">
            © 2024 Cave David Rossier. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
