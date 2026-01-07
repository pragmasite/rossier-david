export type Language = "fr" | "de" | "en";

export const translations = {
  fr: {
    nav: {
      about: "À propos",
      services: "Nos vins",
      gallery: "Galerie",
      hours: "Horaires",
      contact: "Contact",
      call: "Appeler",
      profession: "CAVE VITICOLE",
    },
    hero: {
      badge: "Vins de Valais Premium",
      title1: "Découvrez nos",
      title2: "Vins Authentiques",
      description: "Plus de 25 variétés de raisins, vinifiés avec passion dans le cœur du Valais. Une tradition familiale depuis 1999.",
      sendEmail: "Envoyer un email",
      location: "Leytron, Suisse",
    },
    about: {
      label: "À propos",
      title1: "David Rossier,",
      title2: "Vigneron Passionné",
      p1: "Né dans une famille de vignerons, David Rossier a suivi leurs traces en étudiant l'agriculture à l'École Cantonal de Châteauneuf (VS), puis l'oenologie à l'École Changins (VD). En 1999, il a repris le domaine d'André Bonvin, dont le père Henri avait aidé à relancer les spécialités valaisannes, notamment l'Humagne.",
      p2: "Aujourd'hui, David Rossier cultive 5 hectares à Leytron, Chamoson et Saillon. Tous les cépages sont vinifiés séparément, certains étant assemblés pour créer des vins uniques. Sa gamme de 25 vins met en avant les spécialités du Valais grâce à un processus de vinification qui révèle les caractéristiques typiques de chaque variété.",
      stat1: "Années d'expérience",
      stat2: "Hectares cultivés",
      stat3: "Variétés de raisins",
      features: [
        { title: "Expertise Oenologique", description: "Formation à l'École Changins, maîtrise du terroir valaisan" },
        { title: "Vinification Traditionnelle", description: "Processus respectueux mettant en avant les caractéristiques du raisin" },
        { title: "Vins de Terroir", description: "5 hectares sélectionnés à Leytron, Chamoson et Saillon" },
        { title: "Spécialités Régionales", description: "Humagne, Petite Arvine et autres cépages authentiques du Valais" },
      ],
    },
    services: {
      label: "Nos vins",
      title: "Nos Sélections",
      description: "Explorez notre gamme de 25 vins distincts, chacun reflétant l'essence du terroir valaisan",
      items: [
        { title: "Rouges Traditionnels", description: "Humagne Rouge, Cornalin et autres cépages rouges caractéristiques" },
        { title: "Blancs Élégants", description: "Petite Arvine, Chasselas et blancs fins du Valais" },
        { title: "Spécialités Assemblées", description: "Cuvées exclusives résultant de l'assemblage de plusieurs cépages" },
        { title: "Vins du Terroir", description: "Chaque vin raconte l'histoire du sol et du climat valaisan" },
      ],
    },
    gallery: {
      label: "Galerie",
      title: "Nos Réalisations",
      description: "Découvrez notre cave et nos installations",
      images: [
        { description: "Notre cave de vinification" },
        { description: "Espace de dégustation" },
        { description: "David Rossier, vigneron" },
      ],
    },
    hours: {
      label: "Horaires",
      title: "Horaires d'ouverture",
      header: "Heures d'ouverture",
      today: "Aujourd'hui",
      closed: "Fermé",
      days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
    },
    contact: {
      label: "Contact",
      title1: "Nous Contacter",
      title2: "Pour vos commandes et dégustations",
      description: "Visitez notre cave à Leytron ou contactez-nous pour connaître nos disponibilités",
      phone: "Téléphone",
      email: "Email",
      address: "Adresse",
      cta: "Nous appeler maintenant",
      callNow: "Appeler",
    },
    footer: {
      tagline: "Cave Viticole",
      description: "Depuis 1999, David Rossier crée des vins authentiques qui expriment la richesse du terroir valaisan.",
      navigation: "Navigation",
      about: "À propos",
      copyright: "Tous droits réservés.",
    },
    disclaimer: {
      title: "Aperçu du site",
      items: [
        "Ce site web est un brouillon de prévisualisation",
        "Il n'est pas référencé sur Google",
        "Il peut contenir des erreurs ou des inexactitudes",
      ],
      button: "J'ai compris",
    },
  },
  de: {
    nav: {
      about: "Über uns",
      services: "Unsere Weine",
      gallery: "Galerie",
      hours: "Öffnungszeiten",
      contact: "Kontakt",
      call: "Anrufen",
      profession: "WEINKELLEREI",
    },
    hero: {
      badge: "Premium Walliser Weine",
      title1: "Entdecken Sie unsere",
      title2: "Authentischen Weine",
      description: "Über 25 Traubensorten, mit Leidenschaft im Herzen des Wallis vinifiziert. Eine Familientradition seit 1999.",
      sendEmail: "E-Mail senden",
      location: "Leytron, Schweiz",
    },
    about: {
      label: "Über uns",
      title1: "David Rossier,",
      title2: "Leidenschaftlicher Winzer",
      p1: "Als Sohn einer Winzerfamilie folgte David Rossier ihren Fußstapfen, indem er Landwirtschaft an der Kantonsschule Châteauneuf (VS) und Önologie an der Schule Changins (VD) studierte. 1999 übernahm er das Anwesen von André Bonvin, dessen Vater Henri bei der Wiederbelebung von Walliser Spezialitäten, insbesondere dem Humagne, geholfen hatte.",
      p2: "Heute bewirtschaftet David Rossier 5 Hektar in Leytron, Chamoson und Saillon. Alle Rebsorten werden separat vinifiziert, einige werden vermischt, um einzigartige Weine zu schaffen. Seine Palette von 25 Weinen stellt die Walliser Spezialitäten durch einen Vinifizierungsprozess in den Vordergrund, der die typischen Eigenschaften jeder Sorte offenbart.",
      stat1: "Jahre Erfahrung",
      stat2: "Hektar Anbau",
      stat3: "Traubensorten",
      features: [
        { title: "Önologische Expertise", description: "Ausbildung an der Schule Changins, Beherrschung des Walliser Terroirs" },
        { title: "Traditionelle Gärung", description: "Respektvoller Prozess, der die Eigenschaften der Traube hervorhebt" },
        { title: "Terroirweine", description: "5 Hektar ausgewählt in Leytron, Chamoson und Saillon" },
        { title: "Regionale Spezialitäten", description: "Humagne, Petite Arvine und weitere authentische Walliser Sorten" },
      ],
    },
    services: {
      label: "Unsere Weine",
      title: "Unsere Auswahl",
      description: "Entdecken Sie unsere Palette von 25 verschiedenen Weinen, die jeweils die Essenz des Walliser Terroirs widerspiegeln",
      items: [
        { title: "Traditionelle Rotweine", description: "Humagne Rouge, Cornalin und weitere charakteristische rote Sorten" },
        { title: "Elegante Weißweine", description: "Petite Arvine, Chasselas und feine Weißweine aus dem Wallis" },
        { title: "Spezielle Cuvées", description: "Exklusive Weine aus der Mischung mehrerer Rebsorten" },
        { title: "Terroirweine", description: "Jeder Wein erzählt die Geschichte des Walliser Bodens und Klimas" },
      ],
    },
    gallery: {
      label: "Galerie",
      title: "Unsere Werke",
      description: "Entdecken Sie unseren Weinkeller und unsere Einrichtungen",
      images: [
        { description: "Unser Weinkeller" },
        { description: "Verkostungsraum" },
        { description: "David Rossier, Winzer" },
      ],
    },
    hours: {
      label: "Öffnungszeiten",
      title: "Öffnungszeiten",
      header: "Öffnungszeiten",
      today: "Heute",
      closed: "Geschlossen",
      days: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
    },
    contact: {
      label: "Kontakt",
      title1: "Kontaktieren Sie uns",
      title2: "Für Ihre Bestellungen und Verkostungen",
      description: "Besuchen Sie unseren Weinkeller in Leytron oder kontaktieren Sie uns für weitere Informationen",
      phone: "Telefon",
      email: "E-Mail",
      address: "Adresse",
      cta: "Rufen Sie uns jetzt an",
      callNow: "Anrufen",
    },
    footer: {
      tagline: "Weinkellerei",
      description: "Seit 1999 kreiert David Rossier authentische Weine, die den Reichtum des Walliser Terroirs ausdrücken.",
      navigation: "Navigation",
      about: "Über uns",
      copyright: "Alle Rechte vorbehalten.",
    },
    disclaimer: {
      title: "Website-Vorschau",
      items: [
        "Diese Website ist eine Entwurfsvorschau",
        "Sie ist nicht bei Google aufgeführt",
        "Sie kann Fehler oder Ungenauigkeiten enthalten",
      ],
      button: "Ich verstanden",
    },
  },
  en: {
    nav: {
      about: "About",
      services: "Our Wines",
      gallery: "Gallery",
      hours: "Hours",
      contact: "Contact",
      call: "Call",
      profession: "WINERY",
    },
    hero: {
      badge: "Premium Valais Wines",
      title1: "Discover Our",
      title2: "Authentic Wines",
      description: "Over 25 grape varieties, vinified with passion in the heart of Valais. A family tradition since 1999.",
      sendEmail: "Send Email",
      location: "Leytron, Switzerland",
    },
    about: {
      label: "About",
      title1: "David Rossier,",
      title2: "Passionate Winemaker",
      p1: "Born into a family of winegrowers, David Rossier followed in their footsteps by studying agriculture at the Cantonal School of Châteauneuf (VS), then oenology at the Changins School (VD). In 1999, he took over the estate of André Bonvin, whose father Henri had helped to revive certain Valais specialties, notably Humagne.",
      p2: "Today, David Rossier cultivates 5 hectares in Leytron, Chamoson and Saillon. All grape varieties are vinified separately, some being blended to create unique wines. His range of 25 wines showcases Valais specialties through a vinification process that reveals the typical characteristics of each variety.",
      stat1: "Years of Experience",
      stat2: "Hectares Cultivated",
      stat3: "Grape Varieties",
      features: [
        { title: "Oenological Expertise", description: "Training at the Changins School, mastery of Valais terroir" },
        { title: "Traditional Vinification", description: "Respectful process highlighting the grape's characteristics" },
        { title: "Terroir Wines", description: "5 hectares selected in Leytron, Chamoson and Saillon" },
        { title: "Regional Specialties", description: "Humagne, Petite Arvine and other authentic Valais varieties" },
      ],
    },
    services: {
      label: "Our Wines",
      title: "Our Selection",
      description: "Explore our range of 25 distinct wines, each reflecting the essence of Valais terroir",
      items: [
        { title: "Traditional Red Wines", description: "Humagne Rouge, Cornalin and other characteristic red varieties" },
        { title: "Elegant White Wines", description: "Petite Arvine, Chasselas and fine white wines from Valais" },
        { title: "Special Cuvées", description: "Exclusive wines resulting from blending multiple grape varieties" },
        { title: "Terroir Wines", description: "Each wine tells the story of Valais soil and climate" },
      ],
    },
    gallery: {
      label: "Gallery",
      title: "Our Work",
      description: "Discover our winery and facilities",
      images: [
        { description: "Our winery" },
        { description: "Tasting room" },
        { description: "David Rossier, winemaker" },
      ],
    },
    hours: {
      label: "Hours",
      title: "Opening Hours",
      header: "Opening Hours",
      today: "Today",
      closed: "Closed",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    contact: {
      label: "Contact",
      title1: "Get In Touch",
      title2: "For your orders and tastings",
      description: "Visit our winery in Leytron or contact us to learn about availability",
      phone: "Phone",
      email: "Email",
      address: "Address",
      cta: "Call Us Now",
      callNow: "Call",
    },
    footer: {
      tagline: "Winery",
      description: "Since 1999, David Rossier creates authentic wines that express the richness of Valais terroir.",
      navigation: "Navigation",
      about: "About",
      copyright: "All rights reserved.",
    },
    disclaimer: {
      title: "Website Preview",
      items: [
        "This website is a draft preview",
        "It is not indexed on Google",
        "It may contain errors or inaccuracies",
      ],
      button: "I Understand",
    },
  },
};

export interface Translations {
  nav: {
    about: string;
    services: string;
    gallery: string;
    hours: string;
    contact: string;
    call: string;
    profession: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    sendEmail: string;
    location: string;
  };
  about: {
    label: string;
    title1: string;
    title2: string;
    p1: string;
    p2: string;
    stat1: string;
    stat2: string;
    stat3: string;
    features: Array<{ title: string; description: string }>;
  };
  services: {
    label: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  gallery: {
    label: string;
    title: string;
    description: string;
    images: Array<{ description: string }>;
  };
  hours: {
    label: string;
    title: string;
    header: string;
    today: string;
    closed: string;
    days: string[];
  };
  contact: {
    label: string;
    title1: string;
    title2: string;
    description: string;
    phone: string;
    email: string;
    address: string;
    cta: string;
    callNow: string;
  };
  footer: {
    tagline: string;
    description: string;
    navigation: string;
    about: string;
    copyright: string;
  };
  disclaimer: {
    title: string;
    items: string[];
    button: string;
  };
}
