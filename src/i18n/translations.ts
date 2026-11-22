export type Language = 'en' | 'ru' | 'ka';

export interface TranslationDictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    brandSubtitle: string;
    links: {
      cases: string;
      services: string;
      calculator: string;
      process: string;
      stack: string;
      testimonials: string;
      faq: string;
    };
    slotsBadge: string;
    slotsMobileBanner: string;
    telegram: string;
    discussProject: string;
    quickOrderTitle: string;
    telegramDrawer: string;
    toggleMenuAria: string;
    langSwitchAria: string;
    presets: {
      headerCta: string;
      mobileQuickCta: string;
      mobileDrawerCta: string;
    };
  };
  hero: {
    statusBadge: string;
    headlinePrefix: string;
    headlineHighlight: string;
    subtitleStart: string;
    subtitleStrong: string;
    subtitleMiddle: string;
    subtitleAi: string;
    subtitleAfterAi: string;
    subtitleMultiplier: string;
    subtitleEnd: string;
    ctaCalc: string;
    ctaCases: string;
    trust: {
      contract: string;
      mvp: string;
      sourceCode: string;
    };
    metrics: {
      projectsLabel: string;
      revenueLabel: string;
      csatLabel: string;
      speedValue: string;
      speedLabel: string;
    };
    scrollLabel: string;
    scrollAria: string;
  };
  projectsSection: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    searchPlaceholder: string;
    filterLabel: string;
    categories: {
      all: string;
      ai: string;
      ecommerce: string;
      saas: string;
      web: string;
    };
    caseDetailsBtn: string;
    orderSimilarTitle: string;
    orderSimilarPresetPrefix: string;
    emptyStatePrefix: string;
    emptyStateSuffix: string;
    resetFilters: string;
  };
  projectModal: {
    closeAria: string;
    devDuration: string;
    clientLabel: string;
    categoryLabel: string;
    challengeTitle: string;
    solutionTitle: string;
    architectureTitle: string;
    techStackTitle: string;
    previewDemo: string;
    wantSimilarBtn: string;
    wantSimilarPresetPrefix: string;
  };
  servicesSection: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    popularBadge: string;
    forWhomLabel: string;
    orderEstimateBtn: string;
    selectedPresetPrefix: string;
    legalGuaranteeTitle: string;
    legalGuaranteeText: string;
    customProjectLink: string;
  };
  calculator: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    step1Label: string;
    step2Label: string;
    step3Label: string;
    fromPrefix: string;
    includedInBase: string;
    urgentLabel: string;
    fastTrackBadge: string;
    estimateTitle: string;
    discountBadge: string;
    timelineLabel: string;
    daysUnit: string;
    workingDaysUnit: string;
    productLabel: string;
    extraModulesLabel: string;
    pcsUnit: string;
    warrantyLabel: string;
    warrantyValue: string;
    lockEstimateBtn: string;
    disclaimer: string;
    splitPaymentNote: string;
    urgentModeText: string;
    normalModeText: string;
    summaryTitle: string;
    summaryDesign: string;
    summaryFeatures: string;
    summaryUrgency: string;
    summaryEstimate: string;
    projectTypes: {
      id: string;
      name: string;
      basePrice: number;
      baseDays: number;
    }[];
    designTiers: {
      id: string;
      name: string;
      price: number;
      days: number;
    }[];
    featuresList: {
      id: string;
      name: string;
      price: number;
      days: number;
    }[];
  };
  processSection: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    transparentReport: string;
  };
  techStackSection: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    benchmarkEyebrow: string;
    benchmarkTitle: string;
    benchmarkDesc: string;
    perfLabel: string;
    seoLabel: string;
  };
  testimonialsSection: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    projectLabel: string;
  };
  faqSection: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
  };
  contactSection: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    responseSpeed: string;
    ndaNote: string;
    directLabel: string;
    successTitle: string;
    successGreeting: string;
    successBody: string;
    sendAnotherBtn: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    budgetLabel: string;
    budgetOptions: {
      id: string;
      label: string;
    }[];
    taskLabel: string;
    taskPlaceholder: string;
    submittingBtn: string;
    submitBtn: string;
    privacyNote: string;
  };
  footer: {
    tagline: string;
    links: {
      cases: string;
      services: string;
      calculator: string;
      process: string;
      testimonials: string;
      faq: string;
    };
    scrollToTopTitle: string;
    copyright: string;
    designedBy: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    meta: {
      title: 'OxyJet Studio — High-Converting Websites & Digital Product Engineering',
      description: 'Custom web development, high-load digital platforms, and conversion-focused AI solutions.',
    },
    nav: {
      brandSubtitle: 'High-End Digital & AI',
      links: {
        cases: 'Cases',
        services: 'Services & Pricing',
        calculator: 'Calculator',
        process: 'Process',
        stack: 'Tech Stack',
        testimonials: 'Reviews',
        faq: 'FAQ',
      },
      slotsBadge: '2 Q3 slots left',
      slotsMobileBanner: 'Accepting Projects // 2 Slots Open',
      telegram: 'Telegram',
      discussProject: 'Discuss Project',
      quickOrderTitle: 'Request Quote',
      telegramDrawer: 'Message on Telegram',
      toggleMenuAria: 'Toggle menu',
      langSwitchAria: 'Switch language',
      presets: {
        headerCta: 'Project consultation',
        mobileQuickCta: 'Consultation from mobile menu',
        mobileDrawerCta: 'Inquiry from mobile menu',
      },
    },
    hero: {
      statusBadge: 'ACCEPTING NEW PROJECTS • 2025/2026 RELEASES',
      headlinePrefix: 'WE BUILD DIGITAL PRODUCTS ',
      headlineHighlight: 'THAT SELL',
      subtitleStart: 'We craft ',
      subtitleStrong: 'premium websites',
      subtitleMiddle: ', high-load platforms, and custom ',
      subtitleAi: 'AI agents',
      subtitleAfterAi: ' that boost lead conversion up to ',
      subtitleMultiplier: '4.2x',
      subtitleEnd: '. Zero template builders. Contract-backed deadlines.',
      ctaCalc: 'Calculate Cost Online',
      ctaCases: 'View Cases (6)',
      trust: {
        contract: 'Fixed deadline & budget',
        mvp: 'MVP launch from 7 days',
        sourceCode: '100% source code ownership',
      },
      metrics: {
        projectsLabel: 'Projects in Prod',
        revenueLabel: 'Client Revenue',
        csatLabel: 'CSAT Score',
        speedValue: '7+ days',
        speedLabel: 'Launch Speed',
      },
      scrollLabel: 'Scroll to Projects',
      scrollAria: 'Scroll to projects',
    },
    projectsSection: {
      badge: 'PORTFOLIO & DELIVERED CASES',
      titlePrefix: 'PROJECTS THAT ',
      titleHighlight: 'DRIVE REVENUE',
      subtitle: 'Every case study is engineered for high conversion, fault tolerance, and measurable client ROI.',
      searchPlaceholder: 'Search by tech stack or title...',
      filterLabel: 'Filter:',
      categories: {
        all: 'All Projects (6)',
        ai: 'AI & Automation',
        ecommerce: 'FinTech & E-Commerce',
        saas: 'SaaS & Analytics',
        web: 'Web Services',
      },
      caseDetailsBtn: 'View Case Study',
      orderSimilarTitle: 'Order similar project',
      orderSimilarPresetPrefix: 'Interested in a project similar to: ',
      emptyStatePrefix: 'No projects found matching “',
      emptyStateSuffix: '”.',
      resetFilters: 'Reset Filters',
    },
    projectModal: {
      closeAria: 'Close modal',
      devDuration: 'Timeline:',
      clientLabel: 'Client:',
      categoryLabel: 'Category:',
      challengeTitle: 'Initial Problem & Challenge',
      solutionTitle: 'Implemented Solution',
      architectureTitle: 'Key Engineering Highlights:',
      techStackTitle: 'Technology Stack:',
      previewDemo: 'Live Demo',
      wantSimilarBtn: 'Build a Similar Project',
      wantSimilarPresetPrefix: 'Interested in building a project inspired by: ',
    },
    servicesSection: {
      badge: 'TRANSPARENT TERMS & PRICING',
      titlePrefix: 'PACKAGES & ',
      titleHighlight: 'ENGAGEMENT MODELS',
      subtitle: 'Zero hidden fees. We lock the technical scope, estimate, and delivery milestones in an official contract.',
      popularBadge: 'MOST POPULAR',
      forWhomLabel: 'Best for:',
      orderEstimateBtn: 'Request Estimate',
      selectedPresetPrefix: 'Selected package: ',
      legalGuaranteeTitle: 'Contractual Guarantee:',
      legalGuaranteeText: 'Fixed pricing in the agreement. Payments are split 50% / 50% by milestone with formal sign-off.',
      customProjectLink: 'Calculate a custom project →',
    },
    calculator: {
      badge: 'ONLINE ESTIMATE IN 1 MINUTE',
      titlePrefix: 'COST & TIMELINE ',
      titleHighlight: 'CALCULATOR',
      subtitle: 'Configure your product scope and get an instant estimate with up to 95% accuracy.',
      step1Label: '1. Select your product type:',
      step2Label: '2. Design & visual polish level:',
      step3Label: '3. Extra modules & integrations:',
      fromPrefix: 'from ',
      includedInBase: 'Included in base',
      urgentLabel: 'Fast-Track Launch (+25% cost, 35% faster delivery)',
      fastTrackBadge: 'Fast-Track',
      estimateTitle: 'Estimated Budget',
      discountBadge: '10% DISCOUNT ACTIVE',
      timelineLabel: 'Timeline:',
      daysUnit: 'days',
      workingDaysUnit: 'business days',
      productLabel: 'Product:',
      extraModulesLabel: 'Extra modules:',
      pcsUnit: 'pcs',
      warrantyLabel: 'Warranty:',
      warrantyValue: '60 days SLA',
      lockEstimateBtn: 'Lock This Estimate',
      disclaimer: '*Final budget is locked in the official contract after a brief discovery call.',
      splitPaymentNote: 'Split payment in two stages: 50% / 50%',
      urgentModeText: 'Urgent',
      normalModeText: 'Standard',
      summaryTitle: 'Calculator',
      summaryDesign: 'Design',
      summaryFeatures: 'Modules',
      summaryUrgency: 'Priority',
      summaryEstimate: 'Estimate',
      projectTypes: [
        { id: 'landing', name: 'High-Converting Landing Page', basePrice: 120000, baseDays: 7 },
        { id: 'ecommerce', name: 'E-Commerce Store / Drop Platform', basePrice: 220000, baseDays: 16 },
        { id: 'saas', name: 'Web Service / SaaS Platform', basePrice: 280000, baseDays: 20 },
        { id: 'ai', name: 'AI Assistants & Automation', basePrice: 190000, baseDays: 12 },
        { id: 'enterprise', name: 'Enterprise Digital Ecosystem', basePrice: 550000, baseDays: 32 },
      ],
      designTiers: [
        { id: 'standard', name: 'Custom High-End Design', price: 0, days: 0 },
        { id: 'interactive3d', name: 'WebGL 3D & Micro-interactions', price: 60000, days: 4 },
        { id: 'branding', name: 'Full Design System & Brandbook', price: 45000, days: 3 },
      ],
      featuresList: [
        { id: 'ai-bot', name: 'Smart AI Bot / 24/7 Live Chat', price: 45000, days: 3 },
        { id: 'paygate', name: 'Payment Gateway (Cards / Apple Pay / Crypto)', price: 35000, days: 2 },
        { id: 'crm', name: 'CRM Sync (HubSpot / amoCRM / ERP)', price: 30000, days: 2 },
        { id: 'i18n', name: 'Multi-language Support (EN / RU / CN)', price: 25000, days: 2 },
        { id: 'rbac', name: 'User Dashboards & Role Access (RBAC)', price: 55000, days: 4 },
      ],
    },
    processSection: {
      badge: 'TRANSPARENT PIPELINE',
      titlePrefix: 'HOW WE ',
      titleHighlight: 'WORK',
      subtitle: 'A structured engineering lifecycle from initial concept to first sales. Track task progress in real time.',
      transparentReport: 'Live Progress Report',
    },
    techStackSection: {
      badge: 'ENGINEERING FOUNDATION',
      titlePrefix: 'TECHNOLOGY ',
      titleHighlight: 'STACK',
      subtitle: 'Modern, battle-tested architecture with zero legacy bloat. Sub-0.8s load times and enterprise-grade security.',
      benchmarkEyebrow: 'PERFORMANCE BENCHMARK',
      benchmarkTitle: 'Google PageSpeed 95+ / 100 Out of the Box',
      benchmarkDesc: 'Asset compression, SSR/SSG rendering, instant font loading with zero layout shift (CLS < 0.01), and top technical SEO quality scores.',
      perfLabel: 'PERFORMANCE',
      seoLabel: 'SEO SCORE',
    },
    testimonialsSection: {
      badge: 'REPUTATION & RESULTS',
      titlePrefix: 'WHAT ',
      titleHighlight: 'FOUNDERS SAY',
      subtitle: 'Verified client outcomes: higher conversion rates, lower operational costs, and rapid revenue growth.',
      projectLabel: 'Project:',
    },
    faqSection: {
      badge: 'ANSWERS TO YOUR QUESTIONS',
      titlePrefix: 'FREQUENTLY ASKED ',
      titleHighlight: 'QUESTIONS',
    },
    contactSection: {
      badge: 'START YOUR PROJECT',
      titlePrefix: 'READY TO DISCUSS YOUR IDEA? ',
      titleHighlight: 'WE REPLY IN 15 MIN',
      subtitle: 'Request a free consultation. We will analyze your goals, share relevant case studies, and prepare a detailed budget & roadmap.',
      responseSpeed: 'Average first response time: under 15 minutes',
      ndaNote: 'NDA signed before the first discovery call',
      directLabel: 'Or message us directly:',
      successTitle: 'REQUEST RECEIVED!',
      successGreeting: 'Thank you, ',
      successBody: '! We are already reviewing your brief. Our lead engineer will reach out via your preferred contact within 15 minutes.',
      sendAnotherBtn: 'Send Another Message',
      nameLabel: 'Your Name *',
      namePlaceholder: 'Alex',
      contactLabel: 'Telegram / WhatsApp / Phone *',
      contactPlaceholder: '@username or +1...',
      emailLabel: 'Email (for proposal delivery)',
      emailPlaceholder: 'alex@company.com',
      budgetLabel: 'Estimated Budget',
      budgetOptions: [
        { id: 'b1', label: 'up to 150,000 ₽' },
        { id: 'b2', label: '150,000 – 300,000 ₽' },
        { id: 'b3', label: '300,000 – 600,000 ₽' },
        { id: 'b4', label: '600,000+ ₽' },
      ],
      taskLabel: 'Describe your project or attach a link',
      taskPlaceholder: 'Example: Need a high-converting landing page with an AI assistant and card/crypto checkout...',
      submittingBtn: 'Sending inquiry...',
      submitBtn: 'Get Estimate & Roadmap in 15 Min',
      privacyNote: 'By submitting this form, you agree to our data processing and strict confidentiality policy.',
    },
    footer: {
      tagline: 'High-converting web development, AI agents, and scalable digital products engineered for ROI.',
      links: {
        cases: 'Cases',
        services: 'Packages',
        calculator: 'Calculator',
        process: 'Process',
        testimonials: 'Reviews',
        faq: 'FAQ',
      },
      scrollToTopTitle: 'Back to top',
      copyright: '© 2025–2026 OxyJet Studio. All rights reserved.',
      designedBy: 'Designed with high precision & speed',
    },
  },
  ru: {
    meta: {
      title: 'OxyJet Studio — Продающий веб-сайт & Разработка проектов',
      description: 'Профессиональная веб-разработка, современные цифровые сервисы и AI-решения с высокой конверсией.',
    },
    nav: {
      brandSubtitle: 'High-End Digital & AI',
      links: {
        cases: 'Кейсы',
        services: 'Услуги & Цены',
        calculator: 'Калькулятор',
        process: 'Процесс',
        stack: 'Стек',
        testimonials: 'Отзывы',
        faq: 'FAQ',
      },
      slotsBadge: '2 слота на Q3',
      slotsMobileBanner: 'Принимаем проекты // Свободно 2 слота',
      telegram: 'Telegram',
      discussProject: 'Обсудить проект',
      quickOrderTitle: 'Заказать',
      telegramDrawer: 'Написать в Telegram',
      toggleMenuAria: 'Открыть меню',
      langSwitchAria: 'Переключить язык',
      presets: {
        headerCta: 'Консультация по проекту',
        mobileQuickCta: 'Консультация с мобильного меню',
        mobileDrawerCta: 'Заявка из мобильного меню',
      },
    },
    hero: {
      statusBadge: 'ВЕДЕМ ПРИЕМ ПРОЕКТОВ • РЕЛИЗЫ 2025/2026',
      headlinePrefix: 'РАЗРАБАТЫВАЕМ ЦИФРОВЫЕ СЕРВИСЫ, ',
      headlineHighlight: 'КОТОРЫЕ ПРОДАЮТ',
      subtitleStart: 'Создаем ',
      subtitleStrong: 'премиальные веб-сайты',
      subtitleMiddle: ', высоконагруженные сервисы и внедряем ',
      subtitleAi: 'AI-агентов',
      subtitleAfterAi: ', увеличивающих конверсию в заявку до ',
      subtitleMultiplier: '4.2x',
      subtitleEnd: '. Без шаблонных конструкторов. С гарантией срока по договору.',
      ctaCalc: 'Рассчитать стоимость онлайн',
      ctaCases: 'Смотреть кейсы (6)',
      trust: {
        contract: 'Дедлайн и смета в договоре',
        mvp: 'Запуск MVP от 7 дней',
        sourceCode: '100% исходный код вам',
      },
      metrics: {
        projectsLabel: 'Проектов в проде',
        revenueLabel: 'Доход клиентов',
        csatLabel: 'Индекс CSAT',
        speedValue: 'от 7 дн',
        speedLabel: 'Скорость запуска',
      },
      scrollLabel: 'Вниз к проектам',
      scrollAria: 'Перейти к проектам',
    },
    projectsSection: {
      badge: 'ПОРТФОЛИО & РЕАЛИЗОВАННЫЕ КЕЙСЫ',
      titlePrefix: 'ПРОЕКТЫ, КОТОРЫЕ ',
      titleHighlight: 'ПРИНОСЯТ ПРИБЫЛЬ',
      subtitle: 'Каждый кейс спроектирован с упором на конверсию, отказоустойчивость и окупаемость инвестиций клиента.',
      searchPlaceholder: 'Поиск по стеку или названию...',
      filterLabel: 'Фильтр:',
      categories: {
        all: 'Все проекты (6)',
        ai: 'AI & Нейросети',
        ecommerce: 'Финтех & E-Commerce',
        saas: 'SaaS & Аналитика',
        web: 'Веб-сервисы',
      },
      caseDetailsBtn: 'Кейс детально',
      orderSimilarTitle: 'Заказать аналогичный',
      orderSimilarPresetPrefix: 'Интересует проект наподобие: ',
      emptyStatePrefix: 'Проектов по запросу «',
      emptyStateSuffix: '» не найдено.',
      resetFilters: 'Сбросить фильтры',
    },
    projectModal: {
      closeAria: 'Закрыть модальное окно',
      devDuration: 'Срок разработки:',
      clientLabel: 'Клиент:',
      categoryLabel: 'Категория:',
      challengeTitle: 'Исходная проблема & Вызов',
      solutionTitle: 'Реализованное решение',
      architectureTitle: 'Ключевые инженерные внедрения:',
      techStackTitle: 'Технологический стек:',
      previewDemo: 'Превью демо',
      wantSimilarBtn: 'Хочу похожий проект',
      wantSimilarPresetPrefix: 'Интересует разработка по примеру кейса: ',
    },
    servicesSection: {
      badge: 'ПРОЗРАЧНЫЕ УСЛОВИЯ & СТОИМОСТЬ',
      titlePrefix: 'ТАРИФЫ И ФОРМАТЫ ',
      titleHighlight: 'СОТРУДНИЧЕСТВА',
      subtitle: 'Никаких скрытых доплат. Фиксируем техническое задание, смету и точные сроки в договоре с финансовой ответственностью.',
      popularBadge: 'ХИТ ВЫБОРА',
      forWhomLabel: 'Для кого:',
      orderEstimateBtn: 'Заказать расчет',
      selectedPresetPrefix: 'Выбран тариф: ',
      legalGuaranteeTitle: 'Юридическая гарантия:',
      legalGuaranteeText: 'Фиксируем стоимость в договоре. Оплата разбивается на этапы 50% / 50% с актом выполненных работ.',
      customProjectLink: 'Рассчитать индивидуальный проект →',
    },
    calculator: {
      badge: 'ОНЛАЙН СМЕТА ЗА 1 МИНУТУ',
      titlePrefix: 'КАЛЬКУЛЯТОР СТОИМОСТИ ',
      titleHighlight: '& СРОКОВ',
      subtitle: 'Сконфигурируйте состав проекта и получите предварительную смету. Мы гарантируем точность расчета до 95%.',
      step1Label: '1. Выберите тип вашего продукта:',
      step2Label: '2. Уровень проработки дизайна & визуала:',
      step3Label: '3. Дополнительные модули и интеграции:',
      fromPrefix: 'от ',
      includedInBase: 'Включено в базу',
      urgentLabel: 'Срочный запуск (+25% к стоимости, ускорение разработки на 35%)',
      fastTrackBadge: 'Fast-Track',
      estimateTitle: 'Оценка сметы',
      discountBadge: 'СКИДКА 10% АКТИВНА',
      timelineLabel: 'Срок:',
      daysUnit: 'дн.',
      workingDaysUnit: 'рабочих дней',
      productLabel: 'Продукт:',
      extraModulesLabel: 'Доп. модулей:',
      pcsUnit: 'шт',
      warrantyLabel: 'Гарантия:',
      warrantyValue: '60 дней SLA',
      lockEstimateBtn: 'Зафиксировать расчет',
      disclaimer: '*Точная смета фиксируется в официальном договоре после короткого звонка.',
      splitPaymentNote: 'Предоплата разбивается на этапы 50% / 50%',
      urgentModeText: 'Срочный',
      normalModeText: 'Обычный',
      summaryTitle: 'Калькулятор',
      summaryDesign: 'Дизайн',
      summaryFeatures: 'Функции',
      summaryUrgency: 'Срочность',
      summaryEstimate: 'Оценка',
      projectTypes: [
        { id: 'landing', name: 'Продающий Landing Page', basePrice: 120000, baseDays: 7 },
        { id: 'ecommerce', name: 'Интернет-магазин / Дроп', basePrice: 220000, baseDays: 16 },
        { id: 'saas', name: 'Web-сервис / SaaS Платформа', basePrice: 280000, baseDays: 20 },
        { id: 'ai', name: 'AI-Ассистенты & Автоматизация', basePrice: 190000, baseDays: 12 },
        { id: 'enterprise', name: 'Enterprise Экосистема', basePrice: 550000, baseDays: 32 },
      ],
      designTiers: [
        { id: 'standard', name: 'Фирменный High-End дизайн', price: 0, days: 0 },
        { id: 'interactive3d', name: 'WebGL 3D & Микроанимации', price: 60000, days: 4 },
        { id: 'branding', name: 'Полная Дизайн-система & Брендбук', price: 45000, days: 3 },
      ],
      featuresList: [
        { id: 'ai-bot', name: 'Интеллектуальный AI-бот / Чат 24/7', price: 45000, days: 3 },
        { id: 'paygate', name: 'Платежный шлюз (МИР / СБП / Crypto)', price: 35000, days: 2 },
        { id: 'crm', name: 'Синхронизация с CRM (amoCRM / 1С)', price: 30000, days: 2 },
        { id: 'i18n', name: 'Мультиязычность (RU / EN / CN)', price: 25000, days: 2 },
        { id: 'rbac', name: 'Личные кабинеты с разделением ролей', price: 55000, days: 4 },
      ],
    },
    processSection: {
      badge: 'ПРОЗРАЧНЫЙ ПАЙПЛАЙН',
      titlePrefix: 'КАК МЫ ',
      titleHighlight: 'РАБОТАЕМ',
      subtitle: 'Понятный цикл разработки от идеи до первых продаж. Вы всегда видите статус задач в реальном времени.',
      transparentReport: 'Прозрачный отчет',
    },
    techStackSection: {
      badge: 'ИНЖЕНЕРНАЯ БАЗА',
      titlePrefix: 'ТЕХНОЛОГИЧЕСКИЙ ',
      titleHighlight: 'СТЕК',
      subtitle: 'Используем только современный проверенный стек без устаревших библиотек. Гарантия скорости загрузки до 0.8 секунд и защиты от взломов.',
      benchmarkEyebrow: 'PERFORMANCE BENCHMARK',
      benchmarkTitle: 'Google PageSpeed 95+ / 100 из коробки',
      benchmarkDesc: 'Сжатие ассетов, SSR/SSG рендеринг, мгновенная отрисовка шрифтов без сдвига макета (CLS < 0.01) и максимальный индекс качества для поисковых систем.',
      perfLabel: 'PERFORMANCE',
      seoLabel: 'SEO SCORE',
    },
    testimonialsSection: {
      badge: 'РЕПУТАЦИЯ & РЕЗУЛЬТАТЫ',
      titlePrefix: 'ЧТО ГОВОРЯТ ',
      titleHighlight: 'ФАУНДЕРЫ',
      subtitle: 'Реальные результаты наших клиентов: рост конверсий, экономия ФОТ и взрывной рост выручки.',
      projectLabel: 'Проект:',
    },
    faqSection: {
      badge: 'ОТВЕТЫ НА ВОПРОСЫ',
      titlePrefix: 'ЧАСТО ЗАДАВАЕМЫЕ ',
      titleHighlight: 'ВОПРОСЫ',
    },
    contactSection: {
      badge: 'СТАРТ ПРОЕКТА',
      titlePrefix: 'ОБСУДИМ ВАШУ ИДЕЮ? ',
      titleHighlight: 'ОТВЕТИМ ЗА 15 МИНУТ',
      subtitle: 'Оставьте заявку на бесплатную консультацию. Мы изучим задачу, покажем релевантные кейсы и составим детальную смету с календарным планом.',
      responseSpeed: 'Скорость первого ответа: до 15 минут',
      ndaNote: 'Подписываем NDA до первого звонка',
      directLabel: 'Или напишите нам напрямую:',
      successTitle: 'ЗАЯВКА УСПЕШНО ПРИНЯТА!',
      successGreeting: 'Спасибо, ',
      successBody: '! Мы уже изучаем детали вашего запроса. Наш ведущий разработчик свяжется с вами по указанным контактам в течение 15 минут.',
      sendAnotherBtn: 'Отправить еще одно сообщение',
      nameLabel: 'Ваше имя *',
      namePlaceholder: 'Александр',
      contactLabel: 'Telegram / WhatsApp / Телефон *',
      contactPlaceholder: '@username или +7...',
      emailLabel: 'Email (для отправки КП)',
      emailPlaceholder: 'alex@company.com',
      budgetLabel: 'Ориентировочный бюджет',
      budgetOptions: [
        { id: 'b1', label: 'до 150 000 ₽' },
        { id: 'b2', label: '150 000 – 300 000 ₽' },
        { id: 'b3', label: '300 000 – 600 000 ₽' },
        { id: 'b4', label: 'от 600 000 ₽' },
      ],
      taskLabel: 'Опишите задачу или прикрепите ссылку',
      taskPlaceholder: 'Например: Нужен продающий лендинг с AI-ботом и оплатой криптой/картами...',
      submittingBtn: 'Отправка данных...',
      submitBtn: 'Получить смету и расчет за 15 минут',
      privacyNote: 'Нажимая кнопку, вы соглашаетесь на обработку персональных данных и сохранение конфиденциальности.',
    },
    footer: {
      tagline: 'Продающая веб-разработка, AI-агенты и масштабируемые цифровые решения с упором на конверсию и ROI.',
      links: {
        cases: 'Кейсы',
        services: 'Тарифы',
        calculator: 'Калькулятор',
        process: 'Процесс',
        testimonials: 'Отзывы',
        faq: 'FAQ',
      },
      scrollToTopTitle: 'Наверх',
      copyright: '© 2025–2026 OxyJet Studio. Все права защищены.',
      designedBy: 'Designed with high precision & speed',
    },
  },
  ka: {
    meta: {
      title: 'OxyJet Studio — მაღალკონვერსიული ვებსაიტები და ციფრული პროდუქტების შექმნა',
      description: 'პროფესიონალური ვებ-დეველოპმენტი, თანამედროვე ციფრული სერვისები და მაღალი კონვერსიის AI-გადაწყვეტილებები.',
    },
    nav: {
      brandSubtitle: 'High-End Digital & AI',
      links: {
        cases: 'კეისები',
        services: 'სერვისები და ფასები',
        calculator: 'კალკულატორი',
        process: 'პროცესი',
        stack: 'ტექნოლოგიები',
        testimonials: 'შეფასებები',
        faq: 'FAQ',
      },
      slotsBadge: 'Q3-ის 2 სლოტი',
      slotsMobileBanner: 'ვიღებთ პროექტებს // 2 თავისუფალი სლოტი',
      telegram: 'Telegram',
      discussProject: 'პროექტის განხილვა',
      quickOrderTitle: 'შეკვეთა',
      telegramDrawer: 'მოგვწერეთ Telegram-ზე',
      toggleMenuAria: 'მენიუს გახსნა',
      langSwitchAria: 'ენის შეცვლა',
      presets: {
        headerCta: 'კონსულტაცია პროექტზე',
        mobileQuickCta: 'კონსულტაცია მობილური მენიუდან',
        mobileDrawerCta: 'განაცხადი მობილური მენიუდან',
      },
    },
    hero: {
      statusBadge: 'ვიღებთ ახალ პროექტებს • 2025/2026 რელიზები',
      headlinePrefix: 'ვქმნით ციფრულ სერვისებს, ',
      headlineHighlight: 'რომლებიც ყიდიან',
      subtitleStart: 'ვქმნით ',
      subtitleStrong: 'პრემიუმ ვებსაიტებს',
      subtitleMiddle: ', მაღალდატვირთულ პლატფორმებს და ვნერგავთ ',
      subtitleAi: 'AI-აგენტებს',
      subtitleAfterAi: ', რომლებიც განაცხადების კონვერსიას ',
      subtitleMultiplier: '4.2x',
      subtitleEnd: '-მდე ზრდიან. შაბლონური კონსტრუქტორების გარეშე. ხელშეკრულებით ფიქსირებული ვადებით.',
      ctaCalc: 'ღირებულების ონლაინ გათვლა',
      ctaCases: 'კეისების ნახვა (6)',
      trust: {
        contract: 'ვადა და ბიუჯეტი ხელშეკრულებაში',
        mvp: 'MVP-ის გაშვება 7 დღიდან',
        sourceCode: '100% საწყისი კოდი თქვენ გეკუთვნით',
      },
      metrics: {
        projectsLabel: 'პროექტი პროდაქშენში',
        revenueLabel: 'კლიენტების შემოსავალი',
        csatLabel: 'CSAT ინდექსი',
        speedValue: '7+ დღე',
        speedLabel: 'გაშვების სისწრაფე',
      },
      scrollLabel: 'ქვემოთ პროექტებისკენ',
      scrollAria: 'პროექტებზე გადასვლა',
    },
    projectsSection: {
      badge: 'პორტფოლიო და განხორციელებული კეისები',
      titlePrefix: 'პროექტები, რომლებიც ',
      titleHighlight: 'მოგებას ქმნიან',
      subtitle: 'თითოეული კეისი დაპროექტებულია მაქსიმალურ კონვერსიაზე, გამძლეობასა და კლიენტის ინვესტიციის სწრაფ უკუგებაზე.',
      searchPlaceholder: 'ძიება სტეკით ან სათაურით...',
      filterLabel: 'ფილტრი:',
      categories: {
        all: 'ყველა პროექტი (6)',
        ai: 'AI და ავტომატიზაცია',
        ecommerce: 'ფინტექი და E-Commerce',
        saas: 'SaaS და ანალიტიკა',
        web: 'ვებ-სერვისები',
      },
      caseDetailsBtn: 'კეისი დეტალურად',
      orderSimilarTitle: 'მსგავსის შეკვეთა',
      orderSimilarPresetPrefix: 'მაინტერესებს მსგავსი პროექტი: ',
      emptyStatePrefix: 'პროექტები მოთხოვნით «',
      emptyStateSuffix: '» ვერ მოიძებნა.',
      resetFilters: 'ფილტრების გასუფთავება',
    },
    projectModal: {
      closeAria: 'ფანჯრის დახურვა',
      devDuration: 'შექმნის ვადა:',
      clientLabel: 'კლიენტი:',
      categoryLabel: 'კატეგორია:',
      challengeTitle: 'საწყისი პრობლემა და გამოწვევა',
      solutionTitle: 'განხორციელებული გადაწყვეტა',
      architectureTitle: 'ძირითადი ინჟინრული გადაწყვეტები:',
      techStackTitle: 'ტექნოლოგიური სტეკი:',
      previewDemo: 'დემო ვერსია',
      wantSimilarBtn: 'მსურს მსგავსი პროექტი',
      wantSimilarPresetPrefix: 'მაინტერესებს პროექტის შექმნა კეისის მაგალითზე: ',
    },
    servicesSection: {
      badge: 'გამჭვირვალე პირობები და ფასები',
      titlePrefix: 'ტარიფები და თანამშრომლობის ',
      titleHighlight: 'ფორმატები',
      subtitle: 'ფარული გადასახადების გარეშე. ტექნიკურ დავალებას, ხარჯთაღრიცხვას და ზუსტ ვადებს ვაფიქსირებთ ხელშეკრულებით.',
      popularBadge: 'პოპულარული არჩევანი',
      forWhomLabel: 'ვისთვისაა:',
      orderEstimateBtn: 'გათვლის შეკვეთა',
      selectedPresetPrefix: 'არჩეული ტარიფი: ',
      legalGuaranteeTitle: 'იურიდიული გარანტია:',
      legalGuaranteeText: 'ფასი ფიქსირდება ხელშეკრულებაში. გადახდა იყოფა ორ ეტაპად 50% / 50% მიღება-ჩაბარების აქტით.',
      customProjectLink: 'ინდივიდუალური პროექტის გათვლა →',
    },
    calculator: {
      badge: 'ონლაინ შეფასება 1 წუთში',
      titlePrefix: 'ღირებულებისა და ვადების ',
      titleHighlight: 'კალკულატორი',
      subtitle: 'დააკონფიგურირეთ პროექტის მოდულები და მიიღეთ წინასწარი ბიუჯეტი 95%-მდე სიზუსტით.',
      step1Label: '1. აირჩიეთ თქვენი პროდუქტის ტიპი:',
      step2Label: '2. დიზაინისა და ვიზუალის დამუშავების დონე:',
      step3Label: '3. დამატებითი მოდულები და ინტეგრაციები:',
      fromPrefix: '-დან ',
      includedInBase: 'შედის ბაზაში',
      urgentLabel: 'დაჩქარებული გაშვება (+25% ღირებულებაზე, ვადების შემცირება 35%-ით)',
      fastTrackBadge: 'Fast-Track',
      estimateTitle: 'წინასწარი ბიუჯეტი',
      discountBadge: '10% ფასდაკლება აქტიურია',
      timelineLabel: 'ვადა:',
      daysUnit: 'დღე',
      workingDaysUnit: 'სამუშაო დღე',
      productLabel: 'პროდუქტი:',
      extraModulesLabel: 'დამ. მოდულები:',
      pcsUnit: 'ც.',
      warrantyLabel: 'გარანტია:',
      warrantyValue: '60 დღე SLA',
      lockEstimateBtn: 'გათვლის დაფიქსირება',
      disclaimer: '*ზუსტი ხარჯთაღრიცხვა ფიქსირდება ოფიციალურ ხელშეკრულებაში მოკლე ზარის შემდეგ.',
      splitPaymentNote: 'წინასწარი გადახდა იყოფა ეტაპებად 50% / 50%',
      urgentModeText: 'სასწრაფო',
      normalModeText: 'სტანდარტული',
      summaryTitle: 'კალკულატორი',
      summaryDesign: 'დიზაინი',
      summaryFeatures: 'ფუნქციები',
      summaryUrgency: 'სისწრაფე',
      summaryEstimate: 'შეფასება',
      projectTypes: [
        { id: 'landing', name: 'გამყიდველი Landing Page', basePrice: 120000, baseDays: 7 },
        { id: 'ecommerce', name: 'ონლაინ მაღაზია / დროპ-პლატფორმა', basePrice: 220000, baseDays: 16 },
        { id: 'saas', name: 'ვებ-სერვისი / SaaS პლატფორმა', basePrice: 280000, baseDays: 20 },
        { id: 'ai', name: 'AI-ასისტენტები და ავტომატიზაცია', basePrice: 190000, baseDays: 12 },
        { id: 'enterprise', name: 'Enterprise ციფრული ეკოსისტემა', basePrice: 550000, baseDays: 32 },
      ],
      designTiers: [
        { id: 'standard', name: 'საფირმო High-End დიზაინი', price: 0, days: 0 },
        { id: 'interactive3d', name: 'WebGL 3D და მიკროანიმაციები', price: 60000, days: 4 },
        { id: 'branding', name: 'სრული დიზაინ-სისტემა და ბრენდბუქი', price: 45000, days: 3 },
      ],
      featuresList: [
        { id: 'ai-bot', name: 'ინტელექტუალური AI-ბოტი / ჩატი 24/7', price: 45000, days: 3 },
        { id: 'paygate', name: 'გადახდის სისტემა (ბარათები / Apple Pay / Crypto)', price: 35000, days: 2 },
        { id: 'crm', name: 'CRM-თან სინქრონიზაცია (HubSpot / amoCRM / ERP)', price: 30000, days: 2 },
        { id: 'i18n', name: 'მულტიენოვანი მხარდაჭერა (EN / RU / KA)', price: 25000, days: 2 },
        { id: 'rbac', name: 'პირადი კაბინეტები როლების გამიჯვნით', price: 55000, days: 4 },
      ],
    },
    processSection: {
      badge: 'გამჭვირვალე პროცესი',
      titlePrefix: 'როგორ ',
      titleHighlight: 'ვმუშაობთ',
      subtitle: 'გასაგები ინჟინრული ციკლი იდეიდან პირველ გაყიდვებამდე. თქვენ ხედავთ ამოცანების სტატუსს რეალურ დროში.',
      transparentReport: 'გამჭვირვალე ანგარიშგება',
    },
    techStackSection: {
      badge: 'ინჟინრული ბაზა',
      titlePrefix: 'ტექნოლოგიური ',
      titleHighlight: 'სტეკი',
      subtitle: 'ვიყენებთ მხოლოდ თანამედროვე და გამოცდილ არქიტექტურას ზედმეტი ბალასტის გარეშე. 0.8 წამამდე ჩატვირთვა და საიმედო დაცვა.',
      benchmarkEyebrow: 'PERFORMANCE BENCHMARK',
      benchmarkTitle: 'Google PageSpeed 95+ / 100 საბაზისო კონფიგურაციაში',
      benchmarkDesc: 'ასეტების კომპრესია, SSR/SSG რენდერინგი, შრიფტების მყისიერი ჩატვირთვა მაკეტის გადაადგილების გარეშე (CLS < 0.01) და საძიებო სისტემებისთვის უმაღლესი SEO ქულა.',
      perfLabel: 'PERFORMANCE',
      seoLabel: 'SEO SCORE',
    },
    testimonialsSection: {
      badge: 'რეპუტაცია და შედეგები',
      titlePrefix: 'რას ამბობენ ',
      titleHighlight: 'დამფუძნებლები',
      subtitle: 'ჩვენი კლიენტების რეალური შედეგები: გაზრდილი კონვერსია, შემცირებული ხარჯები და შემოსავლების სწრაფი ზრდა.',
      projectLabel: 'პროექტი:',
    },
    faqSection: {
      badge: 'პასუხები კითხვებზე',
      titlePrefix: 'ხშირად დასმული ',
      titleHighlight: 'კითხვები',
    },
    contactSection: {
      badge: 'პროექტის დაწყება',
      titlePrefix: 'განვიხილოთ თქვენი იდეა? ',
      titleHighlight: 'გიპასუხებთ 15 წუთში',
      subtitle: 'დატოვეთ განაცხადი უფასო კონსულტაციისთვის. შევისწავლით ამოცანას, გაჩვენებთ რელევანტურ კეისებს და მოვამზადებთ დეტალურ ბიუჯეტსა და გეგმას.',
      responseSpeed: 'პირველი პასუხის სისწრაფე: 15 წუთამდე',
      ndaNote: 'ვაფორმებთ NDA-ს პირველ ზარამდე',
      directLabel: 'ან მოგვწერეთ პირდაპირ:',
      successTitle: 'განაცხადი წარმატებით მიღებულია!',
      successGreeting: 'გმადლობთ, ',
      successBody: '! ჩვენ უკვე ვსწავლობთ თქვენი მოთხოვნის დეტალებს. ჩვენი წამყვანი დეველოპერი დაგიკავშირდებათ მითითებულ კონტაქტზე 15 წუთში.',
      sendAnotherBtn: 'კიდევ ერთი შეტყობინების გაგზავნა',
      nameLabel: 'თქვენი სახელი *',
      namePlaceholder: 'გიორგი',
      contactLabel: 'Telegram / WhatsApp / ტელეფონი *',
      contactPlaceholder: '@username ან +995...',
      emailLabel: 'Email (შეთავაზების გასაგზავნად)',
      emailPlaceholder: 'giorgi@company.com',
      budgetLabel: 'სავარაუდო ბიუჯეტი',
      budgetOptions: [
        { id: 'b1', label: '150,000 ₽-მდე' },
        { id: 'b2', label: '150,000 – 300,000 ₽' },
        { id: 'b3', label: '300,000 – 600,000 ₽' },
        { id: 'b4', label: '600,000+ ₽' },
      ],
      taskLabel: 'აღწერეთ ამოცანა ან დაურთეთ ბმული',
      taskPlaceholder: 'მაგალითად: მჭირდება მაღალკონვერსიული ლენდინგი AI-ბოტით და ბარათით/კრიპტოვალუტით გადახდით...',
      submittingBtn: 'მონაცემები იგზავნება...',
      submitBtn: 'მიიღეთ ბიუჯეტი და გეგმა 15 წუთში',
      privacyNote: 'ღილაკზე დაჭერით თქვენ ეთანხმებით პერსონალური მონაცემების დამუშავებასა და კონფიდენციალურობის პოლიტიკას.',
    },
    footer: {
      tagline: 'მაღალკონვერსიული ვებ-დეველოპმენტი, AI-აგენტები და მასშტაბირებადი ციფრული პროდუქტები გაზომვადი ROI-სთვის.',
      links: {
        cases: 'კეისები',
        services: 'ტარიფები',
        calculator: 'კალკულატორი',
        process: 'პროცესი',
        testimonials: 'შეფასებები',
        faq: 'FAQ',
      },
      scrollToTopTitle: 'ზემოთ ასვლა',
      copyright: '© 2025–2026 OxyJet Studio. ყველა უფლება დაცულია.',
      designedBy: 'Designed with high precision & speed',
    },
  },
};
