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
  name: "Evolutec · Links Internos",
  username: "@evoluteceducacao",
  bio: "Acessos rápidos aos sistemas, documentos e materiais de uso interno da equipe Evolutec.",
  avatar: "/logo.svg",
  footer: "Evolutec Educação · Ambiente interno",
  defaultTheme: "light" as "light" | "dark",
  showSearch: true,
  showCategories: true,
};

export const links: LinkItem[] = [
  {
    title: "Contrato dos Polos",
    description: "Acesse a pasta com os contratos e documentos relacionados aos polos.",
    url: "https://drive.google.com/drive/folders/1dEHAUjjj4begASnUc33MSbj4xXVsLuJt",
    category: "Documentos",
    icon: "contracts",
    badge: "Drive",
    accent: "#4285F4"
  },
  {
    title: "Acessar o Estatuto",
    description: "Consulte o estatuto e as normas internas da Evolutec.",
    url: "https://estatutoevolutec.base44.app/",
    category: "Documentos",
    icon: "statute",
    badge: "Base44",
    accent: "#084469"
  },
  {
    title: "Vídeos e Tutoriais",
    description: "Acesse vídeos, orientações e tutoriais para a equipe.",
    url: "https://evolutecplay.base44.app/",
    category: "Treinamento",
    icon: "tutorials",
    badge: "Evolutec Play",
    accent: "#ef4444"
  },
  {
    title: "Acompanhamento dos Alunos",
    description: "Acompanhe informações, andamento e registros dos alunos.",
    url: "https://gestoralunosevolutec.base44.app/",
    category: "Pedagógico",
    icon: "students",
    badge: "Gestão",
    accent: "#8b5cf6"
  },
  {
    title: "Calendário",
    description: "Consulte o calendário pedagógico e os principais compromissos.",
    url: "https://calendariopedagogico.base44.app/",
    category: "Pedagógico",
    icon: "calendar",
    badge: "Calendário",
    accent: "#f59e0b"
  },
  {
    title: "Controle de Vagas",
    description: "Acompanhe e gerencie as vagas disponíveis nos polos.",
    url: "https://evolutec-slot-flow.base44.app/",
    category: "Gestão",
    icon: "slots",
    badge: "Vagas",
    accent: "#10b981"
  },
  {
    title: "Aula Prática Farmácia",
    description: "Acesse a planilha de organização das aulas práticas de Farmácia.",
    url: "https://docs.google.com/spreadsheets/d/1idEJFk49aXMGf9o2nMCGfQs6tFu44cnEGu2H0TQdevY/edit?usp=drivesdk",
    category: "Aulas práticas",
    icon: "pharmacy",
    badge: "Planilha",
    accent: "#06b6d4"
  },
  {
    title: "Aulas Profissionalizantes",
    description: "Acesse os materiais e controles das aulas práticas profissionalizantes.",
    url: "https://drive.google.com/drive/u/0/search?q=Aulas%20Pr%C3%A1ticas%20Profissionalizantes%20-%202025",
    category: "Aulas práticas",
    icon: "classes",
    badge: "Drive",
    accent: "#ec4899"
  },
  {
    title: "Cronograma Recepção",
    description: "Consulte o cronograma semanal de atividades da recepção.",
    url: "https://drive.google.com/file/d/1CRApWqppkzTNKwMfkXrfyX1FMaWi4NWe/view?usp=drivesdk",
    category: "Recepção",
    icon: "reception",
    badge: "PDF",
    accent: "#6366f1"
  }
];
