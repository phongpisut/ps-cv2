export const profile = {
  name: 'Phongpisut Meemuk',
  title: 'React, React Native Developer',
  location: 'Bangkok, Thailand',
  email: 'me.phongpisut@gmail.com',
  bio: [
    "I'm a front-end developer with a twist! I crave adventure and see the world as my classroom. For me, knowledge is the ultimate souvenir, and new experiences are way more exciting than a long-term position.",
    "I bring a passion for crafting high-performance, user-centric websites and apps. I'm a continuous learner, always exploring new libraries and technologies to stay at the forefront of development.",
  ],
}

export type Project = { name: string; client: string; text: string; tags: string[]; icon?: string; emoji: string }

export const webProjects: Project[] = [
  { name: "Swensen's", client: 'Minor Food Group', emoji: '🍨',
    text: "Food store website for Swensen's, built with Next.js (server-side rendering) and styled with Tailwind CSS.",
    tags: ['Next.js', 'SSR', 'Tailwind CSS'] },
  { name: 'PTT Portal', client: 'PTT Digital', emoji: '🗺️',
    text: 'Admin portal using ArcGIS.js to display a map and draw markers and routes. Nested forms with React Hook Form, data fetching optimized with React Query.',
    tags: ['React', 'ArcGIS.js', 'React Hook Form', 'React Query', 'Tailwind'] },
  { name: 'Minor Fleet Management', client: 'Minor Food Group', emoji: '🚚',
    text: 'Fleet management website built with Vue.js, alongside work on the Node.js management microservices (GraphQL worker, RabbitMQ, PostgreSQL).',
    tags: ['Vue.js', 'Node.js', 'GraphQL', 'RabbitMQ'] },
]

export const appProjects: Project[] = [
  { name: 'FIN Insurance', client: 'FIN Insurance Broker', emoji: '🛡️', icon: 'icons/fin.png',
    text: 'Insurance broker app with efficient form utilities, Reanimated gesture handling and interactive SVG graphs; paired with a real-time React + Socket.IO website.',
    tags: ['React Native', 'Reanimated', 'SVG', 'Socket.IO'] },
  { name: 'TCRB Alpha', client: 'Thai Credit Retail Bank', emoji: '🏦', icon: 'icons/tcrb.png',
    text: 'Secure, performant mobile banking app. Redux data caching, native MLKit QR scanner, OneTrust consent management and user-flow verification.',
    tags: ['React Native', 'TypeScript', 'Redux', 'MLKit', 'OneTrust'] },
  { name: 'Tidjai', client: 'Ngern Tid Lor (NTL)', emoji: '💚', icon: 'icons/tidjai.png',
    text: 'High-performance UI/UX using Skia and Reanimated, with MCP-accelerated development. Integrated Omise, AppsFlyer and Crashlytics.',
    tags: ['React Native', 'Skia', 'Reanimated', 'Omise', 'AppsFlyer'] },
  { name: 'InnovestX', client: 'SCB – Magic Box Solutions', emoji: '📈', icon: 'icons/innovestx.png',
    text: 'Trading apps with smooth 60 FPS charts (Skia, Victory Native), Nx + Module Federation micro-frontends across 10+ repos, and Nitro Modules for zero-throttle JSI calls.',
    tags: ['React Native', 'Skia', 'Nx', 'Module Federation', 'Nitro Modules'] },
]

export const jobs = [
  { role: 'Front-end Developer', company: 'Magic Box Solutions', type: 'Contract – Apar Technologies', period: 'May 2026 – Nov 2026' },
  { role: 'React Native Developer', company: 'NTL – Ngern Tid Lor', type: 'Contract – The Prodigy (Thailand)', period: 'Oct 2025 – Apr 2026' },
  { role: 'Front-end Developer', company: 'SCB – Siam Commercial Bank', type: 'Contract – Extend IT Resource', period: 'Apr 2024 – Sep 2025' },
  { role: 'React Developer', company: 'PTT Digital', type: 'Contract – CTO Solution', period: 'Jul 2024 – Nov 2024' },
  { role: 'Front-end Developer', company: 'Minor Food Group (Innovation Team)', type: 'Contract – 3i Infotech', period: 'Sep 2023 – Mar 2024' },
  { role: 'React Developer', company: 'SCB – Siam Commercial Bank', type: 'Contract – Extend IT Resource', period: 'Sep 2022 – Mar 2023' },
  { role: 'React Native Developer', company: 'Thai Credit Retail Bank', type: 'Contract – Apar Technologies', period: 'Feb 2022 – Sep 2022' },
  { role: 'Front-end Developer', company: 'FIN Insurance Broker', type: 'Permanent', period: 'Apr 2021 – Mar 2022' },
]

export const skills: Record<string, string[]> = {
  Core: ['React.js', 'JavaScript', 'TypeScript', 'HTML', 'TailwindCSS', 'Styled Components', 'React Native', 'React unit test'],
  Tools: ['Postman / Bruno', 'Draw.io', 'Flipper', 'VSCode', 'Docker', 'SQL', 'Git', 'Analytics', 'Trace log (OTEL)'],
  'Working knowledge': ['K3S', 'AWS ECS | EKS', 'PostgreSQL', 'Kafka', 'NATS', 'Redpanda', 'Pulsar', 'Golang', 'Python', 'Pandas', 'RAG', 'WebSocket', 'Server-Sent Events', 'SSR', 'Svelte', 'Supabase', 'AI Development'],
}

export const education = { degree: 'Bachelor of Science', school: 'Thai-Nichi Institute of Technology', period: '2017 – 2021', gpax: '3.46' }
export const internship = { org: 'IBMSD – TH', project: 'NER Tagger', stack: 'React.js, FastAPI, PyThaiNLP, MongoDB' }
export const languages = 'Thai – Native  ·  English – Fair'
