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
    title: "Controle de SPC",
    description: "Acesse a planilha de controle e acompanhamento das consultas de SPC.",
    url: "https://docs.google.com/spreadsheets/d/16QpkqdLGV7innHF-xSlFByPCbSJ0ZELlwHn0XJY9XKQ/edit?gid=0#gid=0",
    category: "Financeiro",
    icon: "spc",
    badge: "Planilha",
    accent: "#dc2626"
  },
  {
    title: "Cronograma Recepção",
    description: "Consulte o cronograma semanal de atividades da recepção.",
    url: "https://drive.google.com/file/d/1CRApWqppkzTNKwMfkXrfyX1FMaWi4NWe/view?usp=drivesdk",
    category: "Recepção",
    icon: "reception",
    badge: "PDF",
    accent: "#6366f1"
  },
  {
    title: "Cronograma Disparo WhatsApp",
    description: "Consulte o cronograma de disparos e ações programadas no WhatsApp.",
    url: "https://drive.google.com/file/d/1DX0V5lEBYTnVqAHipAiIn8nnHW9KZ9Um/view?usp=drivesdk",
    category: "Recepção",
    icon: "whatsapp-schedule",
    badge: "PDF",
    accent: "#22c55e"
  },
  {
    title: "Controle de Computadores",
    description: "Acesse a planilha de inventário e controle dos computadores da Evolutec.",
    url: "https://docs.google.com/spreadsheets/d/1Z9PWYwsBRrBcZoNglBp02azEwPiS_dt8K41ViVkVR7s/edit?usp=drivesdk",
    category: "Tecnologia",
    icon: "computers",
    badge: "Planilha",
    accent: "#2563eb"
  },
  {
    title: "Central de Pedidos",
    description: "Acesse a central para acompanhar pedidos, entradas e saídas de produtos.",
    url: "https://centralevolutec.base44.app/",
    category: "Gestão",
    icon: "orders",
    badge: "Base44",
    accent: "#f97316"
  },
  {
    title: "Apresente a Formatura",
    description: "Acesse a apresentação oficial para condução da formatura Evolutec.",
    url: "https://gamma.app/docs/Sua-Conquista-Merece-Ser-Celebrada-7jrlvh7tfkyr5cf",
    category: "Formatura",
    icon: "graduation-presentation",
    badge: "Gamma",
    accent: "#7c3aed"
  },
  {
    title: "Formatura Evolutec - Sistema",
    description: "Acesse o sistema de organização e gestão das formaturas da Evolutec.",
    url: "https://formaturaevolutec.base44.app/login",
    category: "Formatura",
    icon: "graduation-system",
    badge: "Base44",
    accent: "#0f766e"
  },
  {
    title: "Manual de Início de Novos Alunos",
    description: "Consulte o protocolo de início e recepção dos novos alunos.",
    url: "https://drive.google.com/file/d/1rnepOo68uZzMyJb2NZ5ef6_W033n-vij/view?usp=drivesdk",
    category: "Pedagógico",
    icon: "onboarding-manual",
    badge: "PDF",
    accent: "#ca8a04"
  },
  {
    title: "Indicação - Controle",
    description: "Acesse a planilha de registro e acompanhamento das indicações.",
    url: "https://docs.google.com/spreadsheets/d/1Y9qWAZSpfzqcU-DgIugiCTypk9yISuM11V1U46yqRRE/edit?gid=0#gid=0",
    category: "Comercial",
    icon: "referrals",
    badge: "Planilha",
    accent: "#ec4899"
  },
  {
    title: "Pendência Recepção",
    description: "Acesse a planilha de controle e acompanhamento das pendências da recepção.",
    url: "https://docs.google.com/spreadsheets/d/1u3AeW8mJTQR84XDLjt9ZbCa8eOamPdNFvM1MDte0vJ8/edit?usp=drivesdk",
    category: "Recepção",
    icon: "reception-pending",
    badge: "Planilha",
    accent: "#ef4444"
  },
  {
    title: "Planilha Matrículas Comercial",
    description: "Consulte o modelo de controle das matrículas da equipe comercial.",
    url: "https://drive.google.com/file/d/1vXXbwqJ6MOTPB7_vQkx-basoLNE9OoGD/view?usp=drivesdk",
    category: "Comercial",
    icon: "enrollments",
    badge: "PDF",
    accent: "#06b6d4"
  },
  {
    title: "PLANILHA DE INICIANTES - ALUNOS",
    description: "Consulte a planilha de controle dos alunos iniciantes.",
    url: "https://drive.google.com/file/d/1kDY9-Fo_NTDGgKbjjwMyUGCJsNRFrtrA/view?usp=drivesdk",
    category: "Pedagógico",
    icon: "beginners",
    badge: "PDF",
    accent: "#8b5cf6"
  },
  {
    title: "Planilha de Valores 02/07/2026",
    description: "Consulte a tabela de valores e pacotes de cursos vigente desde 02/07/2026.",
    url: "https://drive.google.com/file/d/1kIKKVHfeNmZ5LSbaf9b5Bjr4hAnDLgJX/view?usp=drivesdk",
    category: "Comercial",
    icon: "pricing",
    badge: "PDF",
    accent: "#10b981"
  }
];
