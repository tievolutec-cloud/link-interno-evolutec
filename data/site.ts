export type LinkItem = {
  title: string;
  description: string;
  url: string;
  category: string;
  icon: string;
  badge?: string;
  stats?: string;
  accent?: string;
};

export const siteConfig = {
  name: "Evolutec Educação",
  username: "@evoluteceducacao",
  bio: "Acessos rápidos, aos canais oficiais da Evolutec.",
  avatar: "/logo.svg",
  footer: "Evolutec Educação",
  defaultTheme: "light" as "light" | "dark",
  showSearch: true,
  showCategories: true,
};

export const links: LinkItem[] = [
  {
    title: "Site oficial",
    description: "Conheça nossos cursos profissionalizantes, unidades e novidades.",
    url: "https://evolutec.org",
    category: "Institucional",
    icon: "/site.svg",
    badge: "Oficial",
    accent: "#0ea5e9"
  },
  {
    title: "WhatsApp",
    description: "Fale com nossa equipe e tire suas dúvidas rapidamente.",
    url: "https://wa.me/5591984206820",
    category: "Atendimento",
    icon: "/whatsapp.svg",
    badge: "Online",
    accent: "#25D366"
  },
  {
    title: "Instagram",
    description: "Acompanhe conteúdos, campanhas, alunos e bastidores.",
    url: "https://instagram.com/evoluteceducacao",
    category: "Redes sociais",
    icon: "/instagram.svg",
    badge: "Social",
    accent: "#E1306C"
  },
  {
    title: "Área do aluno",
    description: "Acesse sua plataforma e consulte informações acadêmicas.",
    url: "#",
    category: "Alunos",
    icon: "🎓",
    badge: "Acesso",
    accent: "#f59e0b"
  },
  {
    title: "Avalie no Google",
    description: "Encontre o polo Evolutec mais próximo de você.",
    url: "https://linktr.ee/evolutecmaps",
    category: "Institucional",
    icon: "/google.svg",
    badge: "Mapa",
    accent: "#4285F4"
  },
  {
    title: "Trabalhe conosco",
    description: "Confira oportunidades e envie seu currículo para nossa equipe.",
    url: "https://www.evolutec.org/trabalhe-conosco",
    category: "Contato",
    icon: "/jobs.svg",
    badge: "Vagas",
    accent: "#ec4899"
  },
  {
    title: "YouTube",
    description: "Inscreva-se no nosso Canal do YouTube.",
    url: "https://www.youtube.com/@evolutecoficial",
    category: "Redes sociais",
    icon: "/youtube.svg",
    badge: "Canal",
    accent: "#FF0000"
  }
];
