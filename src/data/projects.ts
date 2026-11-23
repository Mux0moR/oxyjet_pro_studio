import { Project, ServicePackage, Testimonial } from '../types';
import { Language } from '../i18n/translations';

export const PROJECTS_BY_LANG: Record<Language, Project[]> = {
  en: [
    {
      id: 'crypto-paygate',
      title: 'AuraPay — Multi-Currency Crypto Gateway & Processing',
      tag: 'FINTECH & WEB3',
      category: 'ecommerce',
      categoryLabel: 'FinTech & E-Commerce',
      client: 'Aura Financial Ltd (Dubai, UAE)',
      duration: '21 days',
      badge: 'CASE OF THE YEAR',
      shortDescription: 'High-load fiat and crypto payment processing platform with sub-1.2s transaction confirmation and built-in anti-fraud protection.',
      fullDescription: 'Engineered a scalable payment gateway for international e-commerce brands. Supports automated clearing across 18 cryptocurrencies, SEPA/SWIFT integration, real-time fee calculation, and a one-click merchant analytics dashboard.',
      challenge: 'The client’s legacy solution lost up to 23% of transactions due to blockchain node sync delays and a clunky checkout UX that caused cart abandonment.',
      solution: 'Designed a high-speed React checkout interface backed by a server-side WebSocket node pool, adaptive QR codes, and instant network fee estimation.',
      architectureHighlights: [
        'Sub-second checkout flow with 1.8s average completion time',
        'Fault-tolerant microservices architecture with automated node failover',
        'Bank-grade PCI DSS Level 1 client session encryption',
        'Automated tax invoice generation & QuickBooks / ERP export',
      ],
      metrics: [
        { label: 'Checkout Conversion Lift', value: '+42.8%', trend: 'up' },
        { label: 'Confirmation Speed', value: '1.2 sec', trend: 'down' },
        { label: 'Monthly Payment Volume', value: '$3.8M+', trend: 'up' },
        { label: 'Checkout Drop-off Rate', value: '-68%', trend: 'down' },
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets', 'TailwindCSS'],
      imageGradient: 'from-amber-950/60 via-black to-zinc-950',
      liveUrl: 'https://aurapay.network',
      quote: {
        text: 'OxyJet Studio rebuilt our checkout from scratch in 3 weeks. Conversion jumped 40% in the very first week, and the service handled 10,000 rps without breaking a sweat.',
        author: 'Alexander V.',
        role: 'Chief Technology Officer, AuraPay',
      },
    },
    {
      id: 'ai-sales-copilot',
      title: 'NexusAI — Autonomous Sales Automation Agent',
      tag: 'AI & ENTERPRISE',
      category: 'ai',
      categoryLabel: 'AI & Automation',
      client: 'Nexus Enterprise Solutions (Berlin)',
      duration: '18 days',
      badge: 'TOP ROI',
      shortDescription: 'Autonomous AI system for 24/7 lead qualification, interactive product walkthroughs, and tailored commercial proposal generation.',
      fullDescription: 'End-to-end B2B platform featuring a multimodal AI agent. The agent analyzes an inbound prospect’s website, identifies pain points, conducts an interactive chat via web widget or Telegram, and creates a ready-to-sign deal in the CRM.',
      challenge: 'The sales team spent up to 4 hours qualifying a single cold inquiry, while 70% of overnight leads from other time zones were lost to competitors.',
      solution: 'Deployed a custom RAG pipeline powered by modern LLMs, grounded in the company’s knowledge base and seamlessly synced with HubSpot and amoCRM.',
      architectureHighlights: [
        'Instant assistant latency (<400 ms via Streaming API)',
        'Interactive dark-mode web widget with built-in voice mode',
        'Deep RAG vectorization across 12,000 corporate documents',
        'Automated deal creation with close-probability scoring',
      ],
      metrics: [
        { label: 'Lead Response Time', value: '< 5 sec', trend: 'down' },
        { label: 'Qualified Leads Growth', value: '+310%', trend: 'up' },
        { label: 'Payroll Savings', value: '-$14,500/mo', trend: 'down' },
        { label: 'RAG Answer Accuracy', value: '99.4%', trend: 'up' },
      ],
      techStack: ['TypeScript', 'Gemini Pro SDK', 'Vector Embeddings', 'FastAPI', 'React', 'TailwindCSS'],
      imageGradient: 'from-yellow-900/40 via-zinc-950 to-black',
      liveUrl: 'https://nexus-ai.agency',
      quote: {
        text: 'The implementation paid for itself in 11 days. Now not a single overnight lead from the US or Asia goes without a detailed proposal.',
        author: 'Maxim Gromov',
        role: 'Head of Growth, Nexus',
      },
    },
    {
      id: 'cyber-ecommerce',
      title: 'Vanguard Cyberwear — D2C Storefront with 3D Try-On',
      tag: 'E-COMMERCE & 3D',
      category: 'ecommerce',
      categoryLabel: 'FinTech & E-Commerce',
      client: 'Vanguard Apparel (Tokyo / Paris)',
      duration: '25 days',
      badge: 'AWARDS DESIGN',
      shortDescription: 'Exclusive digital flagship for limited apparel drops with interactive 3D lookbook inspection and ultra-fast one-click checkout.',
      fullDescription: 'Built a flagship e-commerce experience with a cyberpunk dark-minimalist aesthetic. Features anti-bot drop protection, interactive 3D garment previews, and mobile-first adaptive checkout.',
      challenge: 'Their previous template-based store crashed within 30 seconds of every drop launch, and mobile conversion stalled below 1.4%.',
      solution: 'Engineered a custom headless storefront with optimized WebGL shaders, distributed edge caching, and one-tap Apple Pay / Google Pay.',
      architectureHighlights: [
        'Smooth 60 FPS 3D garment rendering even on mid-range smartphones',
        'Burst-traffic resilience up to 50,000 visitors per minute',
        'Zero-jank UI micro-animations with strict performance budgets',
        'Real-time inventory sync and live shipment tracking',
      ],
      metrics: [
        { label: 'Average Order Value', value: '+54%', trend: 'up' },
        { label: 'Load Speed (LCP)', value: '0.65 sec', trend: 'down' },
        { label: 'Drop Sell-out Time', value: '8 mins', trend: 'up' },
        { label: 'Mobile Conversion', value: '4.9%', trend: 'up' },
      ],
      techStack: ['React', 'Three.js / WebGL', 'TypeScript', 'Shopify Storefront API', 'TailwindCSS'],
      imageGradient: 'from-amber-900/50 via-zinc-950 to-stone-950',
      liveUrl: 'https://vanguard-cyber.store',
      quote: {
        text: 'Our latest drop sold out in 8 minutes with zero downtime. Customers are blown away by the visuals and speed.',
        author: 'Kenji Sato',
        role: 'Creative Director, Vanguard',
      },
    },
    {
      id: 'saas-analytics',
      title: 'MetricFlow — Real-Time Product Analytics Platform',
      tag: 'SAAS & HIGHLOAD',
      category: 'saas',
      categoryLabel: 'Web Services & SaaS',
      client: 'MetricFlow Inc. (San Francisco)',
      duration: '28 days',
      badge: 'ENTERPRISE',
      shortDescription: 'B2B SaaS workspace for cohort monitoring, conversion funnels, and ML-driven churn prediction.',
      fullDescription: 'Architected a multi-tenant analytics platform with customizable drag-and-drop dashboards, sub-second filtering over billions of events, and instant PDF/Excel reporting.',
      challenge: 'The client needed to replace an aging monolith with a modular micro-frontend where enterprise users could freely compose custom widgets and charts.',
      solution: 'Delivered a modular component design system featuring hardware-accelerated canvas/SVG charts and instantaneous filter propagation.',
      architectureHighlights: [
        'Fluid time-series rendering across 100,000+ data points',
        'Drag-and-drop custom dashboard builder',
        'Role-based access control (RBAC) with full audit logging',
        'High-contrast and dark-mode ergonomic themes',
      ],
      metrics: [
        { label: 'Daily Active Users (DAU)', value: '45,000+', trend: 'up' },
        { label: 'Report Generation Time', value: '< 250 ms', trend: 'down' },
        { label: 'User NPS Score', value: '84/100', trend: 'up' },
        { label: 'Customer Churn Reduction', value: '-35%', trend: 'down' },
      ],
      techStack: ['React', 'TypeScript', 'D3.js / Recharts', 'ClickHouse', 'Node.js', 'TailwindCSS'],
      imageGradient: 'from-amber-950/40 via-black to-zinc-950',
      liveUrl: 'https://metricflow.app',
      quote: {
        text: 'The attention to UI detail and chart responsiveness exceeded the expectations of even our toughest enterprise clients.',
        author: 'Elena Morozova',
        role: 'VP of Product, MetricFlow',
      },
    },
    {
      id: 'telehealth-platform',
      title: 'MedSync — Digital Telemedicine Consultation Ecosystem',
      tag: 'HEALTH TECH',
      category: 'web',
      categoryLabel: 'Web Services & SaaS',
      client: 'MedSync Health Group',
      duration: '24 days',
      badge: 'HIPAA COMPLIANT',
      shortDescription: 'End-to-end web platform for encrypted doctor video consultations, AI prescription parsing, and instant online booking.',
      fullDescription: 'Unifies over 400 clinics and independent specialists. Features encrypted WebRTC video calls, AI-assisted symptom triage, and direct pharmacy network integration.',
      challenge: 'Patients struggled with complicated appointment flows, lost lab records, and unstable video calls on low-bandwidth connections.',
      solution: 'Designed an intuitive 2-step booking flow, adaptive-bitrate video rooms, and a searchable personal health vault.',
      architectureHighlights: [
        'Resilient WebRTC video even at up to 30% packet loss',
        'Full compliance with personal data protection standards (HIPAA / GDPR)',
        'Smart specialist matching in under 45 seconds',
        'Automated SMS & WhatsApp visit reminders',
      ],
      metrics: [
        { label: 'Monthly Consultations', value: '18,500+', trend: 'up' },
        { label: 'No-Show Rate Drop', value: '-72%', trend: 'down' },
        { label: 'AppStore / Web Rating', value: '4.9 / 5.0', trend: 'up' },
        { label: 'Repeat Bookings Lift', value: '+61%', trend: 'up' },
      ],
      techStack: ['React', 'WebRTC', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
      imageGradient: 'from-zinc-900 via-amber-950/30 to-black',
      liveUrl: 'https://medsync.health',
      quote: {
        text: 'The booking flow became so effortless that landing-page-to-paid-consultation conversion multiplied by 2.7x.',
        author: 'Dr. Roman Vasilyev',
        role: 'Medical Director, MedSync',
      },
    },
    {
      id: 'iot-smart-factory',
      title: 'PromPulse — Predictive CNC & Sensor Monitoring Hub',
      tag: 'INDUSTRIAL IOT',
      category: 'ai',
      categoryLabel: 'AI & Automation',
      client: 'Nordic Manufacturing Group',
      duration: '30 days',
      badge: 'HIGH-PRECISION',
      shortDescription: 'Industrial web control center with AI failure forecasting and live telemetry across 1,400+ CNC machines.',
      fullDescription: 'Industrial web platform featuring live factory floor mapping, vibration and thermal sensor streams, and automated maintenance work-order dispatch.',
      challenge: 'Unexpected breakdowns on critical machinery caused millions in losses from unplanned production line downtime.',
      solution: 'Built a high-contrast dark-mode operator console with color-coded anomaly alerts and bearing wear prediction 72 hours prior to failure.',
      architectureHighlights: [
        '25,000 MQTT telemetry messages/sec rendered smoothly in-browser',
        'Live 3D shop-floor schematic with equipment status overlays',
        'Instant audio and push alerts for on-duty engineers',
        'Automated energy-efficiency and OEE reporting exports',
      ],
      metrics: [
        { label: 'Downtime Reduction', value: '-82%', trend: 'down' },
        { label: 'Failures Prevented / Yr', value: '47 cases', trend: 'up' },
        { label: 'Annual Cost Savings', value: '$1.4M/yr', trend: 'up' },
        { label: 'Telemetry Refresh Rate', value: '50 ms', trend: 'down' },
      ],
      techStack: ['React', 'TypeScript', 'WebSockets / MQTT', 'Python AI', 'TailwindCSS'],
      imageGradient: 'from-amber-950/60 via-zinc-950 to-black',
      liveUrl: 'https://prompulse.io',
      quote: {
        text: 'The interface is so intuitive that operators mastered it in a single day. Unplanned floor downtime dropped close to zero.',
        author: 'Oleg Smirnov',
        role: 'Chief Automation Engineer',
      },
    },
  ],
  ru: [
    {
      id: 'crypto-paygate',
      title: 'AuraPay — Мультивалютный криптошлюз & процессинг',
      tag: 'FINTECH & WEB3',
      category: 'ecommerce',
      categoryLabel: 'Финтех & E-Commerce',
      client: 'Aura Financial Ltd (Dubai, UAE)',
      duration: '21 день',
      badge: 'КЕЙС ГОДА',
      shortDescription: 'Высоконагруженная система приема фиатных и крипто-платежей с временем подтверждения транзакции менее 1.2 секунды и встроенной антифрод-системой.',
      fullDescription: 'Разработка масштабируемого платежного шлюза для международных e-commerce брендов. Система поддерживает автоматический клиринг 18 криптовалют, интеграцию с SEPA/SWIFT, расчет комиссий в реальном времени и личный кабинет мерчанта с аналитикой в один клик.',
      challenge: 'Предыдущее решение клиента теряло до 23% транзакций из-за задержек синхронизации блокчейн-нод и сложного UX чекаута, приводившего к брошенным корзинам.',
      solution: 'Спроектировали новый высокоскоростной React-интерфейс чекаута с серверным пулом WebSocket-соединений к нодам, адаптивным QR-кодом и мгновенным расчетом сетевых комиссий.',
      architectureHighlights: [
        'Субсекундный чекаут со средним временем завершения 1.8 с',
        'Отказоустойчивая микросервисная архитектура с автоматическим фейловером нод',
        'Шифрование клиентских сессий уровня банковского стандарта PCI DSS Level 1',
        'Автоматическое формирование налоговых инвойсов и выгрузка в 1C/QuickBooks'
      ],
      metrics: [
        { label: 'Рост конверсии оплаты', value: '+42.8%', trend: 'up' },
        { label: 'Скорость подтверждения', value: '1.2 сек', trend: 'down' },
        { label: 'Месячный объем платежей', value: '$3.8M+', trend: 'up' },
        { label: 'Индекс отказов чекаута', value: '-68%', trend: 'down' }
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets', 'TailwindCSS'],
      imageGradient: 'from-amber-950/60 via-black to-zinc-950',
      liveUrl: 'https://aurapay.network',
      quote: {
        text: 'OxyJet Studio пересобрали наш чекаут с нуля за 3 недели. Конверсия выросла в первую же неделю на 40%, а нагрузку в 10 000 rps сервис даже не заметил.',
        author: 'Александр В.',
        role: 'Chief Technology Officer, AuraPay'
      }
    },
    {
      id: 'ai-sales-copilot',
      title: 'NexusAI — Интеллектуальный агент автоматизации продаж',
      tag: 'AI & ENTERPRISE',
      category: 'ai',
      categoryLabel: 'AI & Автоматизация',
      client: 'Nexus Enterprise Solutions (Berlin)',
      duration: '18 дней',
      badge: 'TOP ROI',
      shortDescription: 'Автономная AI-система квалификации лидов, проведения первичных демонстраций и генерации персональных коммерческих предложений 24/7.',
      fullDescription: 'Комплексная разработка B2B платформы с мультимодальным AI-агентом. Агент анализирует сайт входящего лида, извлекает боли клиента, проводит интерактивный диалог в веб-виджете или Telegram, после чего формирует готовый договор в CRM.',
      challenge: 'Отдел продаж тратил до 4 часов на квалификацию одного холодного обращения, при этом 70% ночных лидов из других часовых поясов уходили к конкурентам.',
      solution: 'Внедрили кастомную RAG-систему на базе современных языковых моделей с базой знаний компании и интеграцией с amoCRM и HubSpot.',
      architectureHighlights: [
        'Мгновенный отклик ассистента (<400 мс через Streaming API)',
        'Интерактивный веб-виджет с адаптивным темным дизайном и аудио-режимом',
        'Глубокая RAG-векторизация корпоративной базы знаний из 12 000 документов',
        'Автоматическое создание сделок со скорингом вероятности закрытия'
      ],
      metrics: [
        { label: 'Время ответа лиду', value: '< 5 сек', trend: 'down' },
        { label: 'Рост квалифицированных лидов', value: '+310%', trend: 'up' },
        { label: 'Экономия фонда оплаты труда', value: '-$14,500/мес', trend: 'down' },
        { label: 'Точность ответов RAG', value: '99.4%', trend: 'up' }
      ],
      techStack: ['TypeScript', 'Gemini Pro SDK', 'Vector Embeddings', 'FastAPI', 'React', 'TailwindCSS'],
      imageGradient: 'from-yellow-900/40 via-zinc-950 to-black',
      liveUrl: 'https://nexus-ai.agency',
      quote: {
        text: 'Внедрение окупилось за 11 дней. Теперь ни один ночной клиент из США или Азии не остается без детального КП.',
        author: 'Максим Громов',
        role: 'Head of Growth, Nexus'
      }
    },
    {
      id: 'cyber-ecommerce',
      title: 'Vanguard Cyberwear — D2C интернет-магазин с 3D-примеркой',
      tag: 'E-COMMERCE & 3D',
      category: 'ecommerce',
      categoryLabel: 'Финтех & E-Commerce',
      client: 'Vanguard Apparel (Tokyo / Paris)',
      duration: '25 дней',
      badge: 'AWARDS DESIGN',
      shortDescription: 'Эксклюзивная цифровая витрина лимитированных коллекций одежды с интерактивным 3D-просмотром луков и ультрабыстрым чекаутом в 1 клик.',
      fullDescription: 'Создание флагманского интернет-магазина в эстетике киберпанка и темного минимализма. Интегрирована система мгновенных дропов с защитой от ботов, онлайн-примерка моделей и динамическая адаптация под мобильные устройства.',
      challenge: 'Старый магазин на шаблонном движке падал в первые 30 секунд после старта дропа, а конверсия на мобильных устройствах не превышала 1.4%.',
      solution: 'Собрали кастомный headless-магазин с оптимизированными WebGL-шейдерами, распределенным кэшированием на Edge-серверах и Apple Pay / Google Pay в один тап.',
      architectureHighlights: [
        'Сверхбыстрый рендеринг 3D-моделей даже на бюджетных смартфонах (60 FPS)',
        'Система устойчивости к пиковым нагрузкам до 50 000 посетителей в минуту',
        'Микроанимации интерфейса с нулевой потерей производительности',
        'Глубокая интеграция складского учета и отслеживания трек-номеров'
      ],
      metrics: [
        { label: 'Средний чек', value: '+54%', trend: 'up' },
        { label: 'Скорость загрузки (LCP)', value: '0.65 сек', trend: 'down' },
        { label: 'Солдоут дропа', value: 'за 8 минут', trend: 'up' },
        { label: 'Мобильная конверсия', value: '4.9%', trend: 'up' }
      ],
      techStack: ['React', 'Three.js / WebGL', 'TypeScript', 'Shopify Storefront API', 'TailwindCSS'],
      imageGradient: 'from-amber-900/50 via-zinc-950 to-stone-950',
      liveUrl: 'https://vanguard-cyber.store',
      quote: {
        text: 'Наш последний дроп распродали за 8 минут без единого сбоя. Клиенты в восторге от визуала и скорости сайта.',
        author: 'Кенджи Сато',
        role: 'Creative Director, Vanguard'
      }
    },
    {
      id: 'saas-analytics',
      title: 'MetricFlow — Реалтайм платформа продуктовой аналитики',
      tag: 'SAAS & HIGHLOAD',
      category: 'saas',
      categoryLabel: 'Веб-сервисы & SaaS',
      client: 'MetricFlow Inc. (San Francisco)',
      duration: '28 дней',
      badge: 'ENTERPRISE',
      shortDescription: 'B2B SaaS панель для мониторинга когорт пользователей, воронок продаж и прогнозирования оттока (Churn Rate) на базе ML.',
      fullDescription: 'Разработка многопользовательской аналитической системы с кастомизируемыми дашбордами, поддержкой фильтрации миллиардов событий за доли секунды и экспортом отчетов в PDF/Excel.',
      challenge: 'Клиенту требовалось заменить устаревший монолит на гибкий микрофронтенд с возможностью клиентам самостоятельно настраивать виджеты и графики.',
      solution: 'Создали модульную компонентную дизайн-систему с оптимизированным canvas/SVG рендерингом графиков и мгновенным откликом фильтров.',
      architectureHighlights: [
        'Плавный рендеринг временных рядов с более чем 100 000 точек данных',
        'Поддержка drag-and-drop конструирования дашбордов',
        'Ролевая модель доступа (RBAC) с детальным аудитом действий',
        'Поддержка темной и контрастной цветовой схемы'
      ],
      metrics: [
        { label: 'Ежедневная аудитория DAU', value: '45,000+', trend: 'up' },
        { label: 'Время формирования отчета', value: '< 250 мс', trend: 'down' },
        { label: 'Оценка NPS пользователей', value: '84/100', trend: 'up' },
        { label: 'Снижение оттока клиентов', value: '-35%', trend: 'down' }
      ],
      techStack: ['React', 'TypeScript', 'D3.js / Recharts', 'ClickHouse', 'Node.js', 'TailwindCSS'],
      imageGradient: 'from-amber-950/40 via-black to-zinc-950',
      liveUrl: 'https://metricflow.app',
      quote: {
        text: 'Уровень проработки деталей интерфейса и графиков превзошел ожидания даже наших самых требовательных enterprise-клиентов.',
        author: 'Елена Морозова',
        role: 'VP of Product, MetricFlow'
      }
    },
    {
      id: 'telehealth-platform',
      title: 'MedSync — Цифровая экосистема телемедицинских консультаций',
      tag: 'HEALTH TECH',
      category: 'web',
      categoryLabel: 'Веб-сервисы & SaaS',
      client: 'MedSync Health Group',
      duration: '24 дня',
      badge: 'HIPAA COMPLIANT',
      shortDescription: 'Комплексная веб-платформа для защищенных видеоконсультаций с врачами, расшифровки рецептов через AI и онлайн-записи.',
      fullDescription: 'Сервис объединяет более 400 клиник и независимых специалистов. Включает видеосвязь WebRTC с шифрованием, автоматическое распознавание симптомов через AI-ассистента и интеграцию с аптечными сетями.',
      challenge: 'Пациенты жаловались на сложность записи, потерю анализов и нестабильное видео на слабых каналах связи.',
      solution: 'Разработали интуитивный интерфейс записи в 2 шага, видеоплеер с адаптивным битрейтом и персональную медицинскую карту с поиском по анализам.',
      architectureHighlights: [
        'Стабильная WebRTC видеосвязь при потере пакетов до 30%',
        'Полное соответствие стандартам защиты персональных данных (152-ФЗ / HIPAA)',
        'Интеллектуальный поиск подходящего врача за 45 секунд',
        'Автоматические SMS и WhatsApp напоминания о визите'
      ],
      metrics: [
        { label: 'Консультаций в месяц', value: '18,500+', trend: 'up' },
        { label: 'Снижение неявок (No-Show)', value: '-72%', trend: 'down' },
        { label: 'Рейтинг в AppStore/Web', value: '4.9 / 5.0', trend: 'up' },
        { label: 'Рост повторных записей', value: '+61%', trend: 'up' }
      ],
      techStack: ['React', 'WebRTC', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
      imageGradient: 'from-zinc-900 via-amber-950/30 to-black',
      liveUrl: 'https://medsync.health',
      quote: {
        text: 'Система записи стала настолько удобной, что конверсия посетителей лендинга в оплаченные консультации выросла в 2.7 раза.',
        author: 'Д-р Роман Васильев',
        role: 'Medical Director, MedSync'
      }
    },
    {
      id: 'iot-smart-factory',
      title: 'PromPulse — Центр предиктивного мониторинга станков и датчиков',
      tag: 'INDUSTRIAL IOT',
      category: 'ai',
      categoryLabel: 'AI & Автоматизация',
      client: 'Nordic Manufacturing Group',
      duration: '30 дней',
      badge: 'HIGH-PRECISION',
      shortDescription: 'Диспетчерский веб-центр с AI-прогнозированием аварийных ситуаций и контролем телеметрии 1,400+ станков ЧПУ в реальном времени.',
      fullDescription: 'Индустриальная веб-платформа с картографией цехов, выводом данных с вибродатчиков и температурных сенсоров, а также автоматической генерацией наряд-заданий для ремонтных бригад.',
      challenge: 'Внезапные поломки критических станков приводили к миллионным убыткам из-за простоя производственных линий.',
      solution: 'Спроектировали высококонтрастный dark-mode пульт управления с цветовой дифференциацией критических узлов и предсказанием износа подшипников за 72 часа до отказа.',
      architectureHighlights: [
        'Поток телеметрии 25 000 сообщений MQTT в секунду без задержек в браузере',
        '3D-схема цеха с подсветкой статусов оборудования в реальном времени',
        'Звуковые и push-оповещения дежурным инженерам',
        'Экспорт отчетов по энергоэффективности оборудования'
      ],
      metrics: [
        { label: 'Сокращение времени простоя', value: '-82%', trend: 'down' },
        { label: 'Предотвращено аварий за год', value: '47 шт', trend: 'up' },
        { label: 'Экономический эффект', value: '$1.4M/год', trend: 'up' },
        { label: 'Скорость обновления данных', value: '50 мс', trend: 'down' }
      ],
      techStack: ['React', 'TypeScript', 'WebSockets / MQTT', 'Python AI', 'TailwindCSS'],
      imageGradient: 'from-amber-950/60 via-zinc-950 to-black',
      liveUrl: 'https://prompulse.io',
      quote: {
        text: 'Интерфейс настолько понятен, что диспетчеры освоили его за 1 день. Простой цехов сократился практически до нуля.',
        author: 'Олег Смирнов',
        role: 'Главный инженер по автоматизации'
      }
    }
  ],
  ka: [
    {
      id: 'crypto-paygate',
      title: 'AuraPay — მულტისავალუტო კრიპტო-შლიუზი და პროცესინგი',
      tag: 'FINTECH & WEB3',
      category: 'ecommerce',
      categoryLabel: 'ფინტექი და E-Commerce',
      client: 'Aura Financial Ltd (Dubai, UAE)',
      duration: '21 დღე',
      badge: 'წლის კეისი',
      shortDescription: 'მაღალდატვირთული ფიატ და კრიპტო გადახდების სისტემა ტრანზაქციის 1.2 წამზე ნაკლებ დროში დადასტურებით და ჩაშენებული ანტიფროდით.',
      fullDescription: 'მასშტაბირებადი საგადახდო შლიუზის შექმნა საერთაშორისო e-commerce ბრენდებისთვის. სისტემა უზრუნველყოფს 18 კრიპტოვალუტის ავტომატურ კლირინგს, SEPA/SWIFT ინტეგრაციას, საკომისიოების რეალურ დროში გათვლას და მერჩანტის ანალიტიკურ პანელს.',
      challenge: 'კლიენტის წინა გადაწყვეტა კარგავდა ტრანზაქციების 23%-მდე ბლოკჩეინ-ნოდების სინქრონიზაციის დაყოვნებისა და რთული ჩეკაუტის UX-ის გამო.',
      solution: 'დავაპროექტეთ სწრაფი React-ჩეკაუტის ინტერფეისი სერვერული WebSocket ნოდების პულით, ადაპტური QR-კოდითა და ქსელის საკომისიოს მყისიერი კალკულაციით.',
      architectureHighlights: [
        'სუბწამიანი ჩეკაუტი საშუალო 1.8 წმ დასრულების დროით',
        'გამძლე მიკროსერვისული არქიტექტურა ნოდების ავტომატური ფეილოვერით',
        'PCI DSS Level 1 საბანკო სტანდარტის კლიენტური სესიების დაშიფვრა',
        'საგადასახადო ინვოისების ავტომატური გენერაცია და QuickBooks / ERP ექსპორტი',
      ],
      metrics: [
        { label: 'გადახდის კონვერსიის ზრდა', value: '+42.8%', trend: 'up' },
        { label: 'დადასტურების სისწრაფე', value: '1.2 წმ', trend: 'down' },
        { label: 'გადახდების თვიური მოცულობა', value: '$3.8M+', trend: 'up' },
        { label: 'ჩეკაუტის გაუქმებები', value: '-68%', trend: 'down' },
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets', 'TailwindCSS'],
      imageGradient: 'from-amber-950/60 via-black to-zinc-950',
      liveUrl: 'https://aurapay.network',
      quote: {
        text: 'OxyJet Studio-მ ჩვენი ჩეკაუტი ნულიდან 3 კვირაში ააწყო. კონვერსია პირველივე კვირაში 40%-ით გაიზარდა, 10,000 rps დატვირთვა კი სისტემამ უპრობლემოდ გაატარა.',
        author: 'ალექსანდრე ვ.',
        role: 'Chief Technology Officer, AuraPay',
      },
    },
    {
      id: 'ai-sales-copilot',
      title: 'NexusAI — გაყიდვების ავტომატიზაციის ინტელექტუალური აგენტი',
      tag: 'AI & ENTERPRISE',
      category: 'ai',
      categoryLabel: 'AI და ავტომატიზაცია',
      client: 'Nexus Enterprise Solutions (Berlin)',
      duration: '18 დღე',
      badge: 'TOP ROI',
      shortDescription: 'ავტონომიური AI-სისტემა ლიდების კვალიფიკაციისთვის, პირველადი დემოების ჩატარებისა და პერსონალური კომერციული შეთავაზებების 24/7 გენერაციისთვის.',
      fullDescription: 'B2B პლატფორმის სრული შექმნა მულტიმოდალური AI-აგენტით. აგენტი აანალიზებს შემოსული ლიდის საიტს, ატარებს ინტერაქტიულ დიალოგს ვებ-ვიჯეტში ან Telegram-ში და CRM-ში ქმნის მზა გარიგებას.',
      challenge: 'გაყიდვების გუნდი 4 საათამდე ხარჯავდა ერთი ცივი მოთხოვნის კვალიფიკაციაზე, ღამის ლიდების 70% კი კონკურენტებთან მიდიოდა.',
      solution: 'დავნერგეთ კასტომური RAG-სისტემა თანამედროვე LLM მოდელების ბაზაზე, კომპანიის ცოდნის ბაზითა და HubSpot / amoCRM ინტეგრაციით.',
      architectureHighlights: [
        'ასისტენტის მყისიერი რეაგირება (<400 მწმ Streaming API-ით)',
        'ინტერაქტიული მუქი ვებ-ვიჯეტი ხმოვანი რეჟიმის მხარდაჭერით',
        '12,000 კორპორატიული დოკუმენტის ღრმა RAG-ვექტორიზაცია',
        'გარიგებების ავტომატური შექმნა დახურვის ალბათობის სკორინგით',
      ],
      metrics: [
        { label: 'ლიდზე პასუხის დრო', value: '< 5 წმ', trend: 'down' },
        { label: 'კვალიფიციური ლიდების ზრდა', value: '+310%', trend: 'up' },
        { label: 'სახელფასო ფონდის ეკონომია', value: '-$14,500/თვე', trend: 'down' },
        { label: 'RAG პასუხების სიზუსტე', value: '99.4%', trend: 'up' },
      ],
      techStack: ['TypeScript', 'Gemini Pro SDK', 'Vector Embeddings', 'FastAPI', 'React', 'TailwindCSS'],
      imageGradient: 'from-yellow-900/40 via-zinc-950 to-black',
      liveUrl: 'https://nexus-ai.agency',
      quote: {
        text: 'დანერგვამ 11 დღეში ამოიღო თავი. ახლა აშშ-დან ან აზიიდან შემოსული არც ერთი ღამის კლიენტი არ რჩება დეტალური შეთავაზების გარეშე.',
        author: 'მაქსიმ გრომოვი',
        role: 'Head of Growth, Nexus',
      },
    },
    {
      id: 'cyber-ecommerce',
      title: 'Vanguard Cyberwear — D2C ონლაინ მაღაზია 3D-მორგებით',
      tag: 'E-COMMERCE & 3D',
      category: 'ecommerce',
      categoryLabel: 'ფინტექი და E-Commerce',
      client: 'Vanguard Apparel (Tokyo / Paris)',
      duration: '25 დღე',
      badge: 'AWARDS DESIGN',
      shortDescription: 'ლიმიტირებული კოლექციების ექსკლუზიური ციფრული ვიტრინა ინტერაქტიული 3D-დათვალიერებით და ულტრასწრაფი 1-კლიკიანი ჩეკაუტით.',
      fullDescription: 'ფლაგმანური ონლაინ მაღაზიის შექმნა კიბერპანკისა და მუქი მინიმალიზმის ესთეტიკაში. ინტეგრირებულია მყისიერი დროპების სისტემა ბოტებისგან დაცვით და მობილურზე ადაპტირებული 3D-ვიზუალიზაციით.',
      challenge: 'ძველი შაბლონური მაღაზია დროპის დაწყებიდან 30 წამში ითიშებოდა, მობილური კონვერსია კი 1.4%-ს არ აღემატებოდა.',
      solution: 'ავაწყვეთ კასტომური headless-მაღაზია ოპტიმიზებული WebGL შეიდერებით, Edge-ქეშირებით და Apple Pay / Google Pay-ით ერთი შეხებით.',
      architectureHighlights: [
        '3D-მოდელების სწრაფი რენდერინგი ბიუჯეტურ სმარტფონებზეც კი (60 FPS)',
        'პიკური დატვირთვის გამძლეობა წუთში 50,000-მდე ვიზიტორზე',
        'ინტერფეისის მიკროანიმაციები წარმადობის დაკარგვის გარეშე',
        'საწყობის აღრიცხვისა და თრექ-კოდების ღრმა ინტეგრაცია',
      ],
      metrics: [
        { label: 'საშუალო ჩეკი', value: '+54%', trend: 'up' },
        { label: 'ჩატვირთვის სიჩქარე (LCP)', value: '0.65 წმ', trend: 'down' },
        { label: 'დროპის სოლდაუტი', value: '8 წუთში', trend: 'up' },
        { label: 'მობილური კონვერსია', value: '4.9%', trend: 'up' },
      ],
      techStack: ['React', 'Three.js / WebGL', 'TypeScript', 'Shopify Storefront API', 'TailwindCSS'],
      imageGradient: 'from-amber-900/50 via-zinc-950 to-stone-950',
      liveUrl: 'https://vanguard-cyber.store',
      quote: {
        text: 'ჩვენი ბოლო დროპი 8 წუთში გაიყიდა ერთი ხარვეზის გარეშე. მომხმარებლები აღფრთოვანებულნი არიან ვიზუალითა და სისწრაფით.',
        author: 'კენჯი სატო',
        role: 'Creative Director, Vanguard',
      },
    },
    {
      id: 'saas-analytics',
      title: 'MetricFlow — პროდუქტული ანალიტიკის რეალურ დროში პლატფორმა',
      tag: 'SAAS & HIGHLOAD',
      category: 'saas',
      categoryLabel: 'ვებ-სერვისები და SaaS',
      client: 'MetricFlow Inc. (San Francisco)',
      duration: '28 დღე',
      badge: 'ENTERPRISE',
      shortDescription: 'B2B SaaS პანელი მომხმარებელთა კოჰორტების, გაყიდვების ძაბრების მონიტორინგისა და ML-ზე დაფუძნებული Churn Rate პროგნოზირებისთვის.',
      fullDescription: 'მრავალმომხმარებლიანი ანალიტიკური სისტემის შექმნა კასტომიზებადი დაშბორდებით, მილიარდობით ივენთის მყისიერი ფილტრაციით და PDF/Excel რეპორტების ექსპორტით.',
      challenge: 'კლიენტს სჭირდებოდა მოძველებული მონოლითის შეცვლა მოქნილი მიკროფრონტენდით, სადაც მომხმარებლები თავად ააწყობდნენ ვიჯეტებს.',
      solution: 'შევქმენით მოდულური დიზაინ-სისტემა ოპტიმიზებული canvas/SVG გრაფიკებით და ფილტრების მყისიერი რეაგირებით.',
      architectureHighlights: [
        '100,000+ მონაცემთა წერტილის გლუვი დროითი მწკრივების რენდერინგი',
        'დაშბორდების drag-and-drop კონსტრუქტორი',
        'როლებზე დაფუძნებული წვდომა (RBAC) დეტალური აუდიტით',
        'მუქი და მაღალკონტრასტული ფერთა თემები',
      ],
      metrics: [
        { label: 'ყოველდღიური აუდიტორია DAU', value: '45,000+', trend: 'up' },
        { label: 'რეპორტის ფორმირების დრო', value: '< 250 მწმ', trend: 'down' },
        { label: 'მომხმარებელთა NPS ქულა', value: '84/100', trend: 'up' },
        { label: 'კლიენტების გადინების კლება', value: '-35%', trend: 'down' },
      ],
      techStack: ['React', 'TypeScript', 'D3.js / Recharts', 'ClickHouse', 'Node.js', 'TailwindCSS'],
      imageGradient: 'from-amber-950/40 via-black to-zinc-950',
      liveUrl: 'https://metricflow.app',
      quote: {
        text: 'ინტერფეისისა და გრაფიკების დეტალიზაციამ ჩვენი ყველაზე მომთხოვნი enterprise-კლიენტების მოლოდინსაც კი გადააჭარბა.',
        author: 'ელენა მოროზოვა',
        role: 'VP of Product, MetricFlow',
      },
    },
    {
      id: 'telehealth-platform',
      title: 'MedSync — ტელემედიცინის კონსულტაციების ციფრული ეკოსისტემა',
      tag: 'HEALTH TECH',
      category: 'web',
      categoryLabel: 'ვებ-სერვისები და SaaS',
      client: 'MedSync Health Group',
      duration: '24 დღე',
      badge: 'HIPAA COMPLIANT',
      shortDescription: 'კომპლექსური ვებ-პლატფორმა ექიმებთან დაცული ვიდეოკონსულტაციებისთვის, რეცეპტების AI-გაშიფვრისა და ონლაინ ჩაწერისთვის.',
      fullDescription: 'სერვისი აერთიანებს 400-ზე მეტ კლინიკას და სპეციალისტს. მოიცავს დაშიფრულ WebRTC ვიდეოზარებს, სიმპტომების AI-ასისტენტს და სააფთიაქო ქსელებთან ინტეგრაციას.',
      challenge: 'პაციენტები უჩიოდნენ რთულ ჩაწერას, ანალიზების დაკარგვას და არასტაბილურ ვიდეოს სუსტ ინტერნეტზე.',
      solution: 'შევქმენით 2-ნაბიჯიანი ინტუიციური ჩაწერა, ადაპტური ბიტრეიტის ვიდეოოთახები და პერსონალური სამედიცინო ბარათი ძიებით.',
      architectureHighlights: [
        'სტაბილური WebRTC ვიდეოკავშირი პაკეტების 30%-მდე დაკარგვისასაც',
        'პერსონალური მონაცემების დაცვის სტანდარტების სრული შესაბამისობა (HIPAA / GDPR)',
        'შესაბამისი სპეციალისტის ინტელექტუალური ძიება 45 წამში',
        'ავტომატური SMS და WhatsApp შეხსენებები ვიზიტზე',
      ],
      metrics: [
        { label: 'თვიური კონსულტაციები', value: '18,500+', trend: 'up' },
        { label: 'გამოუცხადებლობის შემცირება', value: '-72%', trend: 'down' },
        { label: 'რეიტინგი AppStore/Web-ში', value: '4.9 / 5.0', trend: 'up' },
        { label: 'განმეორებითი ჩაწერების ზრდა', value: '+61%', trend: 'up' },
      ],
      techStack: ['React', 'WebRTC', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
      imageGradient: 'from-zinc-900 via-amber-950/30 to-black',
      liveUrl: 'https://medsync.health',
      quote: {
        text: 'ჩაწერის სისტემა იმდენად მოსახერხებელი გახდა, რომ ლენდინგიდან ფასიან კონსულტაციაში კონვერსია 2.7-ჯერ გაიზარდა.',
        author: 'დოქტ. რომან ვასილიევი',
        role: 'Medical Director, MedSync',
      },
    },
    {
      id: 'iot-smart-factory',
      title: 'PromPulse — დაზგებისა და სენსორების პრედიქტიული მონიტორინგის ცენტრი',
      tag: 'INDUSTRIAL IOT',
      category: 'ai',
      categoryLabel: 'AI და ავტომატიზაცია',
      client: 'Nordic Manufacturing Group',
      duration: '30 დღე',
      badge: 'HIGH-PRECISION',
      shortDescription: 'სადისპეტჩერო ვებ-ცენტრი ავარიების AI-პროგნოზირებით და 1,400+ CNC დაზგის ტელემეტრიის კონტროლით რეალურ დროში.',
      fullDescription: 'ინდუსტრიული ვებ-პლატფორმა საამქროების კარტოგრაფიით, ვიბრაციისა და ტემპერატურის სენსორების ნაკადით და სარემონტო დავალებების ავტომატური გენერირებით.',
      challenge: 'კრიტიკული დაზგების მოულოდნელი დაზიანებები საწარმოო ხაზების გაჩერების გამო მილიონობით ზარალს იწვევდა.',
      solution: 'დავაპროექტეთ მაღალკონტრასტული dark-mode სამართავი პულტი კრიტიკული კვანძების ფერადი ინდიკაციით და ცვეთის 72 საათით ადრე პროგნოზირებით.',
      architectureHighlights: [
        'წამში 25,000 MQTT შეტყობინების ტელემეტრია ბრაუზერში დაყოვნების გარეშე',
        'საამქროს 3D-სქემა აღჭურვილობის სტატუსების ლაივ განათებით',
        'ხმოვანი და push-შეტყობინებები მორიგე ინჟინრებისთვის',
        'ენერგოეფექტურობისა და OEE რეპორტების ავტომატური ექსპორტი',
      ],
      metrics: [
        { label: 'მოცდენის დროის შემცირება', value: '-82%', trend: 'down' },
        { label: 'თავიდან აცილებული ავარია', value: '47 შემთხ.', trend: 'up' },
        { label: 'წლიური ეკონომიკური ეფექტი', value: '$1.4M/წელ.', trend: 'up' },
        { label: 'მონაცემების განახლების სიჩქარე', value: '50 მწმ', trend: 'down' },
      ],
      techStack: ['React', 'TypeScript', 'WebSockets / MQTT', 'Python AI', 'TailwindCSS'],
      imageGradient: 'from-amber-950/60 via-zinc-950 to-black',
      liveUrl: 'https://prompulse.io',
      quote: {
        text: 'ინტერფეისი იმდენად გასაგებია, რომ დისპეტჩერებმა ის 1 დღეში აითვისეს. საამქროების გაჩერება ფაქტობრივად ნულამდე შემცირდა.',
        author: 'ოლეგ სმირნოვი',
        role: 'ავტომატიზაციის მთავარი ინჟინერი',
      },
    },
  ]
};

export const SERVICE_PACKAGES_BY_LANG: Record<Language, ServicePackage[]> = {
  en: [
    {
      id: 'mvp-landing',
      title: 'High-Converting Landing Page & MVP',
      badge: 'FAST LAUNCH',
      isPopular: false,
      priceFrom: 'from $1,500',
      duration: 'from 7 business days',
      description: 'Ideal for launching a new product, validating hypotheses, or raising investment. Built for maximum conversion and persuasive copy.',
      features: [
        'Deep competitor research & UVP packaging',
        'Bespoke high-end design (zero templates)',
        'Interactive animations & micro-interactions',
        '100% responsive across mobile and tablet',
        'Technical SEO setup & structured schema markup',
        'Telegram, WhatsApp, and CRM integration',
      ],
      recommendedFor: 'Startups, founders, new product & service launches',
    },
    {
      id: 'custom-web-service',
      title: 'Turnkey Web Service & SaaS Platform',
      badge: 'BESTSELLER',
      isPopular: true,
      priceFrom: 'from $3,500',
      duration: 'from 18 business days',
      description: 'A full-featured web product with user accounts, scalable databases, online payments, and third-party API integrations.',
      features: [
        'UX/UI prototyping & user-flow validation',
        'Engineered with React 19 + TypeScript + Node.js',
        'User dashboards & comprehensive admin panel',
        'Payment integration (Stripe, Cards, Apple Pay, Crypto)',
        'Real-time notifications & WebSockets',
        '60-day post-launch warranty support',
      ],
      recommendedFor: 'B2B platforms, EdTech, marketplaces, service portals',
    },
    {
      id: 'ai-agents-integration',
      title: 'AI Agents & Business Automation',
      badge: 'TREND 2025/2026',
      isPopular: false,
      priceFrom: 'from $2,400',
      duration: 'from 12 business days',
      description: 'Deploy smart LLM agents into your operations: instant lead qualification, content generation, RAG knowledge bases, and smart bots.',
      features: [
        'Custom AI assistant grounded in your company docs',
        'Integration with top models (Gemini 2.5/Flash, Claude, GPT)',
        'Intelligent Telegram bots & embedded web widgets',
        'Automation of repetitive sales & support workflows',
        'Anti-hallucination guardrails & quality monitoring',
        'Team onboarding & AI workflow training',
      ],
      recommendedFor: 'High-inbound businesses, sales teams, customer support',
    },
    {
      id: 'enterprise-custom',
      title: 'Enterprise Digital Ecosystem',
      badge: 'VIP SOLUTION',
      isPopular: false,
      priceFrom: 'from $7,000',
      duration: 'from 30 business days',
      description: 'End-to-end digital transformation: microservices architecture, ERP integrations, security hardening, and 99.9% SLA.',
      features: [
        'Dedicated squad (Tech Lead, Frontend, Backend, QA, Designer)',
        'High-load architecture engineered for 50,000+ rps',
        'Comprehensive security audit & regulatory compliance',
        'Automated CI/CD pipeline on Cloud or On-Premise',
        'Priority 24/7 SLA support with 15-min response time',
        'Full source code & IP ownership transfer',
      ],
      recommendedFor: 'Enterprise companies, FinTech, retail chains, global holdings',
    },
  ],
  ru: [
    {
      id: 'mvp-landing',
      title: 'Продающий Landing Page & Запуск MVP',
      badge: 'БЫСТРЫЙ СТАРТ',
      isPopular: false,
      priceFrom: 'от $1,500',
      duration: 'от 7 рабочих дней',
      description: 'Идеально для запуска нового продукта, проверки гипотезы или привлечения инвестиций. Высокая конверсия, адаптивность и продающий копирайтинг.',
      features: [
        'Глубокий анализ конкурентов и упаковка УТП',
        'Авторский high-end дизайн (без шаблонов)',
        'Интерактивные анимации и micro-interactions',
        'Адаптивность 100% под мобильные и планшеты',
        'Базовая SEO-оптимизация и микроразметка',
        'Интеграция с Telegram, WhatsApp и CRM'
      ],
      recommendedFor: 'Стартапы, эксперты, запуск новых услуг и товаров'
    },
    {
      id: 'custom-web-service',
      title: 'Веб-сервис & SaaS Платформа Под Ключ',
      badge: 'ХИТ ПРОДАЖ',
      isPopular: true,
      priceFrom: 'от $3,500',
      duration: 'от 18 рабочих дней',
      description: 'Полноценный веб-продукт с личными кабинетами, базами данных, приемом платежей и интеграцией сторонних API.',
      features: [
        'UX/UI прототипирование и тестирование пользовательских путей',
        'Разработка на React 19 + TypeScript + Node.js',
        'Личные кабинеты пользователей и панель администратора',
        'Интеграция платежных систем (Stripe, Карты, Apple Pay, Криптовалюта)',
        'Реалтайм уведомления и WebSockets',
        'Гарантийная поддержка 60 дней после релиза'
      ],
      recommendedFor: 'B2B сервисы, онлайн-школы, маркетплейсы, сервисные платформы'
    },
    {
      id: 'ai-agents-integration',
      title: 'Внедрение AI-Агентов & Автоматизация Бизнеса',
      badge: 'ТРЕНД 2025/2026',
      isPopular: false,
      priceFrom: 'от $2,400',
      duration: 'от 12 рабочих дней',
      description: 'Интеграция умных LLM-агентов в ваш бизнес: автоквалификация лидов, генерация контента, RAG-база знаний и умные боты.',
      features: [
        'Кастомный AI-ассистент с точной базой знаний компании',
        'Интеграция передовых моделей (Gemini 2.5/Flash, Claude, GPT)',
        'Интеллектуальные боты для Telegram и виджеты на сайт',
        'Автоматизация рутинных задач отдела продаж и саппорта',
        'Защита от галлюцинаций модели и мониторинг качества',
        'Обучение команды работе с AI-инструментами'
      ],
      recommendedFor: 'Компании с большим потоком заявок, отделы продаж, клиентский сервис'
    },
    {
      id: 'enterprise-custom',
      title: 'Enterprise Цифровая Экосистема',
      badge: 'VIP РЕШЕНИЕ',
      isPopular: false,
      priceFrom: 'от $7,000',
      duration: 'от 30 рабочих дней',
      description: 'Комплексная цифровая трансформация бизнеса: микросервисная архитектура, интеграция с ERP/1C, безопасность и SLA 99.9%.',
      features: [
        'Выделенная команда разработки (Lead, Frontend, Backend, QA, Designer)',
        'Проектирование архитектуры под нагрузку 50 000+ rps',
        'Комплексный аудит безопасности и соответствие регуляторным нормам',
        'Бесшовный CI/CD пайплайн и инфраструктура на Cloud / On-Premise',
        'Приоритетный SLA саппорт 24/7 с временем реакции до 15 минут',
        'Полная передача исходного кода и интеллектуальных прав'
      ],
      recommendedFor: 'Крупный бизнес, финтех-компании, ритейлеры, международные холдинги'
    }
  ],
  ka: [
    {
      id: 'mvp-landing',
      title: 'გამყიდველი Landing Page და MVP გაშვება',
      badge: 'სწრაფი სტარტი',
      isPopular: false,
      priceFrom: '$1,500-დან',
      duration: '7 სამუშაო დღიდან',
      description: 'იდეალურია ახალი პროდუქტის გასაშვებად, ჰიპოთეზის შესამოწმებლად ან ინვესტიციების მოსაზიდად. მაღალი კონვერსია და გამყიდველი კოპირაიტინგი.',
      features: [
        'კონკურენტების ღრმა ანალიზი და UVP შეფუთვა',
        'საავტორო high-end დიზაინი (შაბლონების გარეშე)',
        'ინტერაქტიული ანიმაციები და micro-interactions',
        '100% ადაპტაცია მობილურებსა და პლანშეტებზე',
        'ტექნიკური SEO-ოპტიმიზაცია და მიკრომარკირება',
        'ინტეგრაცია Telegram-თან, WhatsApp-თან და CRM-თან',
      ],
      recommendedFor: 'სტარტაპები, დამფუძნებლები, ახალი სერვისები და პროდუქტები',
    },
    {
      id: 'custom-web-service',
      title: 'ვებ-სერვისი და SaaS პლატფორმა გასაღებზე',
      badge: 'ბესტსელერი',
      isPopular: true,
      priceFrom: '$3,500-დან',
      duration: '18 სამუშაო დღიდან',
      description: 'სრულფასოვანი ვებ-პროდუქტი პირადი კაბინეტებით, მონაცემთა ბაზებით, ონლაინ გადახდებით და გარე API ინტეგრაციებით.',
      features: [
        'UX/UI პროტოტიპირება და მომხმარებლის გზების ტესტირება',
        'შექმნა React 19 + TypeScript + Node.js ტექნოლოგიებზე',
        'მომხმარებლის კაბინეტები და ადმინისტრატორის პანელი',
        'გადახდის სისტემების ინტეგრაცია (Stripe, ბარათები, Apple Pay, Crypto)',
        'რეალურ დროში შეტყობინებები და WebSockets',
        '60-დღიანი საგარანტიო მხარდაჭერა რელიზის შემდეგ',
      ],
      recommendedFor: 'B2B სერვისები, EdTech, მარკეტპლეისები, სერვისული პორტალები',
    },
    {
      id: 'ai-agents-integration',
      title: 'AI-აგენტების დანერგვა და ბიზნესის ავტომატიზაცია',
      badge: 'ტრენდი 2025/2026',
      isPopular: false,
      priceFrom: '$2,400-დან',
      duration: '12 სამუშაო დღიდან',
      description: 'ჭკვიანი LLM-აგენტების ინტეგრაცია თქვენს ბიზნესში: ლიდების ავტოკვალიფიკაცია, კონტენტის გენერაცია, RAG-ცოდნის ბაზა და ბოტები.',
      features: [
        'კასტომური AI-ასისტენტი კომპანიის ზუსტი ცოდნის ბაზით',
        'მოწინავე მოდელების ინტეგრაცია (Gemini 2.5/Flash, Claude, GPT)',
        'ინტელექტუალური Telegram ბოტები და საიტის ვიჯეტები',
        'გაყიდვებისა და საპორტის რუტინული ამოცანების ავტომატიზაცია',
        'მოდელის ჰალუცინაციებისგან დაცვა და ხარისხის მონიტორინგი',
        'გუნდის სწავლება AI-ინსტრუმენტებთან მუშაობაში',
      ],
      recommendedFor: 'კომპანიები დიდი ნაკადით, გაყიდვების გუნდები, კლიენტთა სერვისი',
    },
    {
      id: 'enterprise-custom',
      title: 'Enterprise ციფრული ეკოსისტემა',
      badge: 'VIP გადაწყვეტა',
      isPopular: false,
      priceFrom: '$7,000-დან',
      duration: '30 სამუშაო დღიდან',
      description: 'ბიზნესის კომპლექსური ციფრული ტრანსფორმაცია: მიკროსერვისული არქიტექტურა, ERP ინტეგრაცია, უსაფრთხოება და 99.9% SLA.',
      features: [
        'გამოყოფილი გუნდი (Lead, Frontend, Backend, QA, Designer)',
        'არქიტექტურის დაპროექტება 50,000+ rps დატვირთვაზე',
        'უსაფრთხოების კომპლექსური აუდიტი და რეგულაციებთან შესაბამისობა',
        'უწყვეტი CI/CD პაიპლაინი Cloud ან On-Premise გარემოში',
        'პრიორიტეტული 24/7 SLA მხარდაჭერა 15-წუთიანი რეაგირებით',
        'საწყისი კოდისა და ინტელექტუალური უფლებების სრული გადაცემა',
      ],
      recommendedFor: 'მსხვილი ბიზნესი, ფინტექ-კომპანიები, რითეილერები, ჰოლდინგები',
    },
  ]
};

export const TESTIMONIALS_BY_LANG: Record<Language, Testimonial[]> = {
  en: [
    {
      id: '1',
      name: 'Artem Lebedev',
      role: 'CEO & Co-founder',
      company: 'FinPulse Capital',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      quote: 'They don’t just ship sleek visuals — they deeply understand business unit economics and conversion funnels. After launch our CPL dropped 48% and landing conversion holds steady at 6.8%. Delivered right on schedule.',
      metric: '+340% LEADS GROWTH',
      projectTitle: 'Investment Platform',
    },
    {
      id: '2',
      name: 'Sofia Mironova',
      role: 'Chief Operating Officer',
      company: 'NovaLogistics Global',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      quote: 'We commissioned an AI agent to handle inbound client inquiries. Now 80% of requests are resolved instantly without manager intervention. It saved us over $12,000 in the very first quarter.',
      metric: '-80% SUPPORT TIME',
      projectTitle: 'AI Dispatch Automation',
    },
    {
      id: '3',
      name: 'Vladislav Chernov',
      role: 'Founder',
      company: 'CyberDrop Apparel',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      quote: 'The site looks extraordinary, exactly as we envisioned — dark, uncompromising, and ultra-modern. Load speed is blazingly fast. Highly recommended to anyone wanting to stand out from cookie-cutter templates.',
      metric: '99/100 SPEED SCORE',
      projectTitle: 'E-commerce Flagship',
    },
  ],
  ru: [
    {
      id: '1',
      name: 'Артем Лебедев',
      role: 'CEO & Co-founder',
      company: 'FinPulse Capital',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      quote: 'Ребята не просто делают красивую картинку — они глубоко понимают бизнес-логику и воронку продаж. После релиза наш CPL снизился на 48%, а конверсия лендинга держится на уровне 6.8%. Сдали всё строго в срок.',
      metric: '+340% РОСТ ЗАЯВОК',
      projectTitle: 'Инвестиционная платформа'
    },
    {
      id: '2',
      name: 'София Миронова',
      role: 'Операционный директор',
      company: 'NovaLogistics Global',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      quote: 'Заказывали внедрение AI-агента для обработки входящих обращений клиентов. Теперь 80% запросов решаются моментально без участия менеджеров. Это сэкономило нам более $12,000 в первый же квартал.',
      metric: '-80% ВРЕМЕНИ НА САППОРТ',
      projectTitle: 'AI-Автоматизация диспетчерской'
    },
    {
      id: '3',
      name: 'Владислав Чернов',
      role: 'Founder',
      company: 'CyberDrop Apparel',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      quote: 'Сайт выглядит фантастически, в точности как мы хотели — темный, бескомпромиссный, технологичный стиль. Скорость работы молниеносная. Рекомендую всем, кто хочет выделиться на фоне серых шаблонных сайтов.',
      metric: '99/100 SPEED SCORE',
      projectTitle: 'E-commerce витрина'
    }
  ],
  ka: [
    {
      id: '1',
      name: 'არტემ ლებედევი',
      role: 'CEO & Co-founder',
      company: 'FinPulse Capital',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      quote: 'გუნდი მხოლოდ ლამაზ ვიზუალს არ ქმნის — ისინი ღრმად ესმით ბიზნეს-ლოგიკა და გაყიდვების ძაბრი. რელიზის შემდეგ ჩვენი CPL 48%-ით შემცირდა, ლენდინგის კონვერსია კი სტაბილურად 6.8%-ზეა.',
      metric: '+340% განაცხადების ზრდა',
      projectTitle: 'საინვესტიციო პლატფორმა',
    },
    {
      id: '2',
      name: 'სოფია მირონოვა',
      role: 'ოპერაციული დირექტორი',
      company: 'NovaLogistics Global',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      quote: 'შევუკვეთეთ AI-აგენტის დანერგვა შემოსული მოთხოვნების დასამუშავებლად. ახლა მოთხოვნების 80% მომენტალურად წყდება მენეჯერების ჩართვის გარეშე, რამაც პირველივე კვარტალში $12,000-ზე მეტი დაგვიზოგა.',
      metric: '-80% საპორტის დრო',
      projectTitle: 'სადისპეტჩეროს AI-ავტომატიზაცია',
    },
    {
      id: '3',
      name: 'ვლადისლავ ჩერნოვი',
      role: 'Founder',
      company: 'CyberDrop Apparel',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      quote: 'საიტი ფანტასტიკურად გამოიყურება, ზუსტად ისე, როგორც გვსურდა — მუქი, უკომპრომისო, ტექნოლოგიური სტილი. მუშაობის სიჩქარე ელვისებურია. ვურჩევ ყველას, ვისაც შაბლონური საიტებისგან გამორჩევა სურს.',
      metric: '99/100 SPEED SCORE',
      projectTitle: 'E-commerce ვიტრინა',
    },
  ]
};

export const WORKFLOW_STEPS_BY_LANG: Record<Language, { step: string; title: string; description: string; duration: string }[]> = {
  en: [
    {
      step: '01',
      title: 'Strategy Brief & Funnel Audit',
      description: 'We analyze your business model, target audience, competitors, and unit margins. We craft a sharp UVP and define target conversion KPIs.',
      duration: '1–2 days',
    },
    {
      step: '02',
      title: 'UX/UI Architecture & Prototyping',
      description: 'We design an interactive clickable prototype, fine-tuning screen flow, attention triggers, and the shortest path to your primary CTA.',
      duration: '3–5 days',
    },
    {
      step: '03',
      title: 'High-End Engineering & AI Integrations',
      description: 'We write clean, maintainable React & TypeScript code and integrate LLMs, CRMs, payment gateways, and databases built for speed.',
      duration: '7–14 days',
    },
    {
      step: '04',
      title: 'QA & Load Stress Testing',
      description: 'We test across 20+ real devices and viewports, verifying form validation, security hardening, load times, and responsive layout.',
      duration: '2–3 days',
    },
    {
      step: '05',
      title: 'Production Launch & Post-Release Tracking',
      description: 'We deploy to production servers, configure end-to-end analytics, hand over the full source code, and train your internal team.',
      duration: '1 day',
    },
  ],
  ru: [
    {
      step: '01',
      title: 'Стратегический бриф & Аудит воронки',
      description: 'Анализируем ваш бизнес, аудиторию, конкурентов и маржинальность. Формулируем железобетонное УТП и определяем целевые метрики конверсии.',
      duration: '1-2 дня'
    },
    {
      step: '02',
      title: 'UX/UI Архитектура & Прототипирование',
      description: 'Создаем интерактивный кликабельный прототип. Выверяем логику каждого экрана, триггеры внимания и путь клиента до нажатия целевой кнопки.',
      duration: '3-5 дней'
    },
    {
      step: '03',
      title: 'High-End Разработка & AI Интеграции',
      description: 'Пишем чистый, производительный код на React и TypeScript. Интегрируем нейросети, CRM, платежные шлюзы и базы данных с гарантией быстродействия.',
      duration: '7-14 дней'
    },
    {
      step: '04',
      title: 'QA Тестирование & Нагрузочный стресс-тест',
      description: 'Тестируем сайт на 20+ реальных устройствах и разрешениях экрана. Проверяем валидацию форм, безопасность, скорость загрузки и адаптивность.',
      duration: '2-3 дня'
    },
    {
      step: '05',
      title: 'Боевой запуск & Пост-релизный трекинг',
      description: 'Разворачиваем продукт на серверах, настраиваем сквозную аналитику, передаем исходный код и проводим обучение вашей команды.',
      duration: '1 день'
    }
  ],
  ka: [
    {
      step: '01',
      title: 'სტრატეგიული ბრიფი და ძაბრის აუდიტი',
      description: 'ვაანალიზებთ თქვენს ბიზნესს, აუდიტორიას, კონკურენტებს და მარჟინალობას. ვაყალიბებთ ძლიერ UVP-ს და განვსაზღვრავთ კონვერსიის მიზნობრივ KPI-ებს.',
      duration: '1–2 დღე',
    },
    {
      step: '02',
      title: 'UX/UI არქიტექტურა და პროტოტიპირება',
      description: 'ვქმნით ინტერაქტიულ კლიკაბელურ პროტოტიპს. ვამუშავებთ თითოეული ეკრანის ლოგიკას, ყურადღების ტრიგერებს და მომხმარებლის გზას მიზნობრივ ღილაკამდე.',
      duration: '3–5 დღე',
    },
    {
      step: '03',
      title: 'High-End დეველოპმენტი და AI ინტეგრაციები',
      description: 'ვწერთ სუფთა, წარმად კოდს React-სა და TypeScript-ზე. ვაინტეგრირებთ ნეიროქსელებს, CRM-ს, საგადახდო შლიუზებს და მონაცემთა ბაზებს.',
      duration: '7–14 დღე',
    },
    {
      step: '04',
      title: 'QA ტესტირება და დატვირთვის სტრეს-ტესტი',
      description: 'ვტესტავთ საიტს 20+ რეალურ მოწყობილობაზე. ვამოწმებთ ფორმების ვალიდაციას, უსაფრთხოებას, ჩატვირთვის სიჩქარეს და ადაპტიურობას.',
      duration: '2–3 დღე',
    },
    {
      step: '05',
      title: 'პროდაქშენში გაშვება და ტრეკინგი',
      description: 'ვუშვებთ პროდუქტს სერვერებზე, ვაწყობთ გამჭოლ ანალიტიკას, გადმოგცემთ სრულ საწყის კოდს და ვატარებთ გუნდის ტრენინგს.',
      duration: '1 დღე',
    },
  ]
};

export const TECH_STACK = [
  { name: 'React 19 & Next.js', category: 'Frontend', badge: 'High-Speed' },
  { name: 'TypeScript', category: 'Language', badge: 'Type-Safe' },
  { name: 'Tailwind CSS', category: 'Styling', badge: 'Zero-Runtime' },
  { name: 'Node.js & Express', category: 'Backend', badge: 'Scalable' },
  { name: 'Python & FastAPI', category: 'AI & Data', badge: 'Async' },
  { name: 'Gemini 2.5 & Claude', category: 'AI Engine', badge: 'Next-Gen' },
  { name: 'PostgreSQL & Redis', category: 'Database', badge: 'Reliable' },
  { name: 'Docker & Cloud Run', category: 'DevOps', badge: 'Auto-scale' }
];

export const FAQS_BY_LANG: Record<Language, { question: string; answer: string }[]> = {
  en: [
    {
      question: 'How long does it take to build a project?',
      answer: 'Timelines depend on scope: a high-converting Landing Page launches in 7–10 days, a full-featured web service with user accounts takes 18–30 days, and AI agent integration starts at 12 days. Every deadline is locked in our contract with financial accountability.',
    },
    {
      question: 'Why does your approach convert better than template builders?',
      answer: 'We never rely on bloated no-code templates that load slowly and look generic. We engineer a custom conversion funnel tailored to buyer psychology, add engaging micro-interactions, and optimize load times under 0.8s — every fraction of a second faster boosts conversion.',
    },
    {
      question: 'Is mobile responsiveness included in the price?',
      answer: 'Yes, always. Over 70–85% of commercial traffic comes from smartphones. We design Mobile-First interfaces with ergonomic thumb-friendly actions, effortless form input, and instant checkout.',
    },
    {
      question: 'How are payments structured and do we own the source code?',
      answer: 'Standard terms are milestone-based: 50% upfront and 50% upon final acceptance and staging verification. Upon final payment, you receive 100% exclusive intellectual property rights to all designs, source code, and databases.',
    },
    {
      question: 'Do you provide post-launch support?',
      answer: 'Yes. Every project includes 30 to 60 days of complimentary warranty coverage (bug fixes and technical consultations). Ongoing monthly technical and growth retainers are also available.',
    },
  ],
  ru: [
    {
      question: 'Сколько времени занимает разработка проекта?',
      answer: 'Сроки зависят от сложности: продающий Landing Page мы запускаем за 7-10 дней, сложный веб-сервис с личными кабинетами — от 18 до 30 дней, а внедрение AI-агентов — от 12 дней. Мы всегда фиксируем дедлайн в договоре с финансовой гарантией.'
    },
    {
      question: 'Почему ваш подход приносит больше продаж, чем шаблонные решения?',
      answer: 'Мы не используем шаблонные конструкторы типа Tilda или WordPress, которые медленно грузятся и выглядят одинаково. Мы проектируем индивидуальную воронку под психологию вашего покупателя, внедряем анимации, удерживающие внимание, и добиваемся скорости загрузки до 0.8 секунд. Каждая доля секунды ускорения дает +7% к конверсии.'
    },
    {
      question: 'Входит ли мобильная адаптация в стоимость?',
      answer: 'Да, обязательно. Более 70-85% коммерческого трафика сегодня идет со смартфонов. Мы разрабатываем интерфейсы по принципу Mobile-First: продумываем удобство нажатий одной рукой, быстрый ввод в формах и мгновенный чекаут.'
    },
    {
      question: 'Как происходит оплата и передаются ли права на код?',
      answer: 'Стандартная схема: поэтапная оплата (обычно 50% предоплата и 50% после финальной приемки и демонстрации на тестовом сервере). После полной оплаты вы получаете 100% исключительных авторских прав на весь дизайн, исходный код и базы данных.'
    },
    {
      question: 'Предоставляете ли вы поддержку после запуска?',
      answer: 'Да. Каждый проект включает от 30 до 60 дней бесплатного гарантийного обслуживания (исправление любых скрытых багов, консультации). Также доступна постоянная ежемесячная техническая и маркетинговая поддержка.'
    }
  ],
  ka: [
    {
      question: 'რამდენი დრო სჭირდება პროექტის შექმნას?',
      answer: 'ვადები დამოკიდებულია სირთულეზე: გამყიდველ Landing Page-ს ვუშვებთ 7–10 დღეში, რთულ ვებ-სერვისს პირადი კაბინეტებით — 18–30 დღეში, ხოლო AI-აგენტების დანერგვას — 12 დღიდან. დედლაინი ყოველთვის ფიქსირდება ხელშეკრულებაში.',
    },
    {
      question: 'რატომ მოაქვს თქვენს მიდგომას მეტი გაყიდვა, ვიდრე შაბლონურ საიტებს?',
      answer: 'ჩვენ არ ვიყენებთ Tilda-ს ან WordPress-ის მსგავს შაბლონურ კონსტრუქტორებს, რომლებიც ნელა იტვირთება და ერთმანეთს ჰგავს. ვქმნით ინდივიდუალურ ძაბრს თქვენი მყიდველის ფსიქოლოგიაზე დაყრდნობით და ვაღწევთ 0.8 წამამდე ჩატვირთვის სიჩქარეს.',
    },
    {
      question: 'შედის თუ არა მობილური ადაპტაცია ღირებულებაში?',
      answer: 'დიახ, აუცილებლად. კომერციული ტრაფიკის 70–85%-ზე მეტი დღეს სმარტფონებიდან მოდის. ინტერფეისებს ვაპროექტებთ Mobile-First პრინციპით — მოსახერხებელი ცალი ხელით მართვისა და მყისიერი შეკვეთისთვის.',
    },
    {
      question: 'როგორ ხდება გადახდა და გადმოგვეცემა თუ არა კოდზე უფლებები?',
      answer: 'სტანდარტული სქემაა ეტაპობრივი გადახდა (50% წინასწარ და 50% საბოლოო ჩაბარებისა და დემონსტრაციის შემდეგ). სრული ანაზღაურების შემდეგ თქვენ გადმოგეცემათ 100% ექსკლუზიური საავტორო უფლება დიზაინზე, კოდსა და მონაცემთა ბაზებზე.',
    },
    {
      question: 'უზრუნველყოფთ თუ არა მხარდაჭერას გაშვების შემდეგ?',
      answer: 'დიახ. თითოეული პროექტი მოიცავს 30-დან 60 დღემდე უფასო საგარანტიო მომსახურებას (ნებისმიერი ხარვეზის გასწორება და კონსულტაცია). ასევე ხელმისაწვდომია მუდმივი ყოველთვიური ტექნიკური და მარკეტინგული მხარდაჭერა.',
    },
  ]
};

export const PROJECTS = PROJECTS_BY_LANG.en;
export const SERVICE_PACKAGES = SERVICE_PACKAGES_BY_LANG.en;
export const TESTIMONIALS = TESTIMONIALS_BY_LANG.en;
export const WORKFLOW_STEPS = WORKFLOW_STEPS_BY_LANG.en;
export const FAQS = FAQS_BY_LANG.en;
