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

export type Project = { n: number; name: string; client: string; kind: 'APP' | 'WEB'; text: string; tags: string[]; emoji: string }

/** Projects I've contributed to, in my order. Same number = same workplace. */
export const projects: Project[] = [
  { n: 1, name: 'FIN Insurance', client: 'FIN Insurance Broker', kind: 'APP', emoji: '🛡️',
    text: 'My part: form utilities, Reanimated gestures and interactive SVG graphs in the broker app, plus its real-time React + Socket.IO website.',
    tags: ['React Native', 'Reanimated', 'SVG', 'Socket.IO'] },
  { n: 2, name: 'TCRB Alpha', client: 'Thai Credit Retail Bank', kind: 'APP', emoji: '🏦',
    text: 'Contributed to a secure mobile banking app: Redux data caching, a native MLKit QR scanner, OneTrust consent and user-flow verification.',
    tags: ['React Native', 'TypeScript', 'Redux', 'MLKit', 'OneTrust'] },
  { n: 3, name: 'PTT Portal', client: 'PTT Digital', kind: 'WEB', emoji: '🗺️',
    text: 'Worked on an admin portal with ArcGIS.js maps (markers and routes), arrays of forms nested in arrays of forms in React Hook Form, and data fetching tuned with React Query.',
    tags: ['React', 'ArcGIS.js', 'React Hook Form', 'React Query', 'Tailwind CSS', 'Styled Components'] },
  { n: 4, name: 'Features in SCB Connect', client: 'SCB – Siam Commercial Bank', kind: 'WEB', emoji: '💬',
    text: "Built a static React site on LINE's front-end framework (LIFF), shown inside SCB Connect's official LINE account, and documented the core system (Kafka streams, Sidekiq jobs, Dialogflow) with diagrams.",
    tags: ['React.js', 'LIFF', 'LINE', 'Kafka', 'Sidekiq', 'Dialogflow'] },
  { n: 5, name: "Swensen's", client: 'Minor Food Group', kind: 'WEB', emoji: '🍨',
    text: "Contributed to the Swensen's food-store website: server-side rendered pages in Next.js, styled with Tailwind CSS.",
    tags: ['Next.js', 'SSR', 'Tailwind CSS'] },
  { n: 5, name: 'Minor Fleet Management', client: 'Minor Food Group', kind: 'WEB', emoji: '🚚',
    text: 'Refined styling and added text components in the Vue.js fleet site, diagrammed the Node.js microservices behind it (GraphQL worker, RabbitMQ, PostgreSQL) and added features to them.',
    tags: ['Vue.js', 'Node.js', 'GraphQL', 'RabbitMQ', 'PostgreSQL'] },
  { n: 6, name: 'Mae Manee', client: 'SCB – Siam Commercial Bank', kind: 'APP', emoji: '🏪',
    text: 'Contributed to the Mae Manee app in React Native + TypeScript and its admin portal in AngularJS, with a focus on security: encryption, plus unit-test coverage reports.',
    tags: ['React Native', 'TypeScript', 'AngularJS', 'Encryption', 'Unit tests'] },
  { n: 7, name: 'Tidjai', client: 'Ngern Tid Lor (NTL)', kind: 'APP', emoji: '💚',
    text: 'Helped build high-performance UI with Skia and Reanimated (with MCP-accelerated development) and integrated Omise, AppsFlyer and Crashlytics.',
    tags: ['React Native', 'Skia', 'Reanimated', 'Omise', 'AppsFlyer'] },
  { n: 8, name: 'InnovestX', client: 'SCB – Magic Box Solutions', kind: 'APP', emoji: '📈',
    text: 'Contributed 60 FPS trading charts (Skia, Victory Native), Nx + Module Federation micro-frontends across 10+ repos, Nitro Modules for zero-throttle JSI calls and AI-accelerated Golang backend work.',
    tags: ['React Native', 'Skia', 'Nx', 'Module Federation', 'Nitro Modules', 'Golang'] },
]

/** One entry per workplace number, for lists that group same-place projects. */
export const projectGroups = [...new Set(projects.map((p) => p.n))].map((n) => {
  const ps = projects.filter((p) => p.n === n)
  return { n, names: ps.map((p) => p.name), client: ps[0].client }
})

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

/** A few things about me (the marquee strip). */
export const traits = ['Continuous learner', 'World as my classroom', 'Adventure over routine', '60 FPS or bust', 'Bangkok based', 'Thai & English', 'Pixel careful', 'Team player', 'Always trying new libraries']
