export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  shortDesc: string;
  longDesc: string;
  tech: string[];
  img: string;
  highlights: string[];
  link?: string;
  repo?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "01",
    slug: "sistema-gestao",
    title: "Sistema de Gestão",
    category: "Desenvolvimento Web",
    year: "2024",
    shortDesc: "Sistema interno de gestão de chamados e tickets para suporte técnico.",
    longDesc:
      "Aplicação full-stack desenvolvida para otimizar o fluxo de trabalho de uma equipe de suporte técnico. O sistema permite abertura, acompanhamento e resolução de chamados em tempo real, com painel administrativo, relatórios e notificações automáticas.",
    tech: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS"],
    img: "https://images.unsplash.com/photo-1555580492-e3d6c1d7d10e?w=1200&h=700&fit=crop&auto=format",
    highlights: [
      "Redução de 40% no tempo médio de resolução de chamados",
      "Dashboard com métricas em tempo real",
      "Sistema de notificações por e-mail automático",
      "Controle de permissões por perfil de usuário",
    ],
    repo: "https://github.com",
  },
  {
    id: "02",
    slug: "app-clima",
    title: "App de Clima",
    category: "Mobile / API",
    year: "2024",
    shortDesc: "Aplicativo de previsão do tempo com geolocalização e dados em tempo real.",
    longDesc:
      "Aplicativo que consome a API OpenWeatherMap para exibir previsão do tempo detalhada com base na localização atual do usuário. Inclui histórico de consultas, alertas de condições extremas e visualizações gráficas das variações de temperatura.",
    tech: ["React Native", "TypeScript", "OpenWeatherMap API", "AsyncStorage"],
    img: "https://images.unsplash.com/photo-1533420896084-06d2bce5365f?w=1200&h=700&fit=crop&auto=format",
    highlights: [
      "Geolocalização em tempo real",
      "Previsão estendida de 7 dias",
      "Alertas para condições climáticas extremas",
      "Interface adaptada para modo escuro",
    ],
    repo: "https://github.com",
  },
  {
    id: "03",
    slug: "ecommerce-api",
    title: "E-commerce API",
    category: "Back-end",
    year: "2023",
    shortDesc: "API RESTful completa para plataforma de comércio eletrônico.",
    longDesc:
      "API robusta desenvolvida para suportar uma plataforma de e-commerce. Inclui autenticação JWT, gerenciamento de produtos, carrinho de compras, integração com gateway de pagamento e sistema de pedidos com rastreamento.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Stripe API", "Docker"],
    img: "https://images.unsplash.com/photo-1519832064761-bbc1d76d4ef8?w=1200&h=700&fit=crop&auto=format",
    highlights: [
      "Autenticação e autorização com JWT",
      "Integração com Stripe para pagamentos",
      "Documentação completa com Swagger",
      "Containerização com Docker",
    ],
    repo: "https://github.com",
  },
  {
    id: "04",
    slug: "dashboard-analytics",
    title: "Dashboard Analytics",
    category: "Front-end",
    year: "2023",
    shortDesc: "Painel de análise de dados com gráficos interativos e filtros dinâmicos.",
    longDesc:
      "Dashboard responsivo para visualização e análise de dados empresariais. Desenvolvido com foco em performance e usabilidade, permite filtros em tempo real, exportação de relatórios em PDF e integração com múltiplas fontes de dados.",
    tech: ["React", "TypeScript", "Recharts", "TanStack Query", "Tailwind CSS"],
    img: "https://images.unsplash.com/photo-1542471171717-4d78096e5f23?w=1200&h=700&fit=crop&auto=format",
    highlights: [
      "Gráficos interativos com zoom e filtros",
      "Exportação de relatórios em PDF e CSV",
      "Atualização de dados em tempo real via WebSocket",
      "Layout totalmente responsivo",
    ],
    repo: "https://github.com",
  },
];

export const SKILLS = [
  {
    area: "Front-end",
    items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "HTML / CSS", level: 95 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    area: "Back-end",
    items: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "Python", level: 65 },
      { name: "Java", level: 60 },
    ],
  },
  {
    area: "Banco de Dados",
    items: [
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "MySQL", level: 75 },
      { name: "Redis", level: 50 },
    ],
  },
  {
    area: "Ferramentas",
    items: [
      { name: "Git / GitHub", level: 88 },
      { name: "Docker", level: 60 },
      { name: "Linux", level: 70 },
      { name: "Figma", level: 55 },
    ],
  },
];
