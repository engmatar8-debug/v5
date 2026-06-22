export type Language = 'en' | 'ar';

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    academy: string;
    blog: string;
    contact: string;
    bookConsultation: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    bookConsultation: string;
    exploreServices: string;
    scrollDown: string;
  };
  trustedBy: {
    label: string;
    title: string;
  };
  services: {
    label: string;
    title: string;
    desc: string;
    learnMore: string;
    items: {
      ai: { title: string; desc: string };
      data: { title: string; desc: string };
      cyber: { title: string; desc: string };
      digital: { title: string; desc: string };
      training: { title: string; desc: string };
    };
  };
  industries: {
    label: string;
    title: string;
    desc: string;
    items: string[];
  };
  why: {
    label: string;
    title: string;
    desc: string;
    items: { title: string; desc: string }[];
  };
  stats: {
    label: string;
    items: { value: string; label: string; suffix: string }[];
  };
  solutions: {
    label: string;
    title: string;
    desc: string;
    learnMore: string;
  };
  academy: {
    label: string;
    title: string;
    desc: string;
    free: string;
    premium: string;
    certified: string;
    viewAll: string;
    enroll: string;
  };
  blog: {
    label: string;
    title: string;
    desc: string;
    readMore: string;
    viewAll: string;
    minRead: string;
  };
  cta: {
    title: string;
    desc: string;
    book: string;
    explore: string;
  };
  about: {
    hero: { title: string; desc: string };
    overview: { label: string; title: string; desc: string };
    vision: { label: string; title: string; desc: string };
    mission: { label: string; title: string; desc: string };
    values: { label: string; title: string; items: { title: string; desc: string }[] };
    why: { label: string; title: string; items: { title: string; desc: string }[] };
  };
  servicesPage: {
    hero: { title: string; desc: string };
    aiTitle: string;
    aiDesc: string;
    aiItems: { title: string; desc: string }[];
    dataTitle: string;
    dataDesc: string;
    cyberTitle: string;
    cyberDesc: string;
    digitalTitle: string;
    digitalDesc: string;
    trainingTitle: string;
    trainingDesc: string;
  };
  academyPage: {
    hero: { title: string; desc: string };
    freeCourses: string;
    premiumCourses: string;
    certifications: string;
    enroll: string;
    preview: string;
    hours: string;
    students: string;
    level: string;
  };
  blogPage: {
    hero: { title: string; desc: string };
    search: string;
    allCategories: string;
  };
  contactPage: {
    hero: { title: string; desc: string };
    form: {
      title: string;
      name: string;
      email: string;
      company: string;
      phone: string;
      message: string;
      send: string;
      success: string;
    };
    info: {
      title: string;
      emailLabel: string;
      followUs: string;
    };
  };
  footer: {
    desc: string;
    quickLinks: string;
    services: string;
    legal: string;
    privacy: string;
    terms: string;
    cookies: string;
    rights: string;
    tagline: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      academy: 'Academy',
      blog: 'Blog',
      contact: 'Contact',
      bookConsultation: 'Book Consultation',
    },
    hero: {
      headline: 'Transforming Ideas into Intelligent Solutions',
      subheadline: 'Empowering organizations through Artificial Intelligence, Data Analytics, Digital Transformation, and Professional Training.',
      bookConsultation: 'Book Consultation',
      exploreServices: 'Explore Services',
      scrollDown: 'Scroll to explore',
    },
    trustedBy: {
      label: 'Trusted By',
      title: 'Trusted by industry leaders worldwide',
    },
    services: {
      label: 'What We Do',
      title: 'Comprehensive AI-Powered Services',
      desc: 'From intelligent automation to enterprise digital transformation, we deliver end-to-end solutions tailored to your organization\'s unique needs.',
      learnMore: 'Learn More',
      items: {
        ai: { title: 'AI Solutions', desc: 'Custom AI agents, LLM integration, RAG systems, NLP, and computer vision tailored to your business challenges.' },
        data: { title: 'Data Analytics', desc: 'Transform raw data into actionable intelligence with advanced analytics, predictive modeling, and real-time dashboards.' },
        cyber: { title: 'Cybersecurity', desc: 'Protect your digital assets with AI-powered threat detection, incident response, and enterprise security frameworks.' },
        digital: { title: 'Digital Transformation', desc: 'Modernize your operations with cloud adoption, process automation, and technology-driven organizational change.' },
        training: { title: 'Professional Training', desc: 'Upskill your workforce with certified AI, data science, and cybersecurity programs designed for the enterprise.' },
      },
    },
    industries: {
      label: 'Industries We Serve',
      title: 'Solutions for Every Sector',
      desc: 'We bring deep domain expertise to every engagement, delivering AI solutions that meet the unique regulatory, operational, and strategic needs of your industry.',
      items: ['Government & Public Sector', 'Universities & Research', 'Healthcare & Life Sciences', 'Enterprise & Corporate', 'Financial Services', 'SMEs & Startups', 'Education Institutions', 'Defense & Intelligence'],
    },
    why: {
      label: 'Why Cortex AI',
      title: 'Built for the Future of Intelligence',
      desc: 'We combine deep technical expertise with industry knowledge to deliver solutions that create measurable impact.',
      items: [
        { title: 'Enterprise-Grade Quality', desc: 'Every solution is built to enterprise standards with rigorous testing, security hardening, and performance optimization.' },
        { title: 'AI-First Architecture', desc: 'We design every solution with AI at the core, ensuring scalability, adaptability, and continuous learning.' },
        { title: 'Multilingual & Culturally Aware', desc: 'Deep expertise in Arabic NLP and regional contexts, enabling solutions for MENA markets and global deployments.' },
        { title: 'End-to-End Partnership', desc: 'From strategy to deployment and beyond — we are your long-term technology partner, not just a vendor.' },
        { title: 'Proven Methodologies', desc: 'Battle-tested frameworks refined across hundreds of enterprise implementations across diverse industries.' },
        { title: 'Regulatory Compliance', desc: 'Full compliance with GDPR, NCA, PDPL, and sector-specific regulations, ensuring your data remains protected.' },
      ],
    },
    stats: {
      label: 'Our Impact',
      items: [
        { value: '150', label: 'Projects Delivered', suffix: '+' },
        { value: '40', label: 'Enterprise Clients', suffix: '+' },
        { value: '98', label: 'Client Satisfaction', suffix: '%' },
        { value: '15', label: 'Countries Served', suffix: '+' },
        { value: '5000', label: 'Professionals Trained', suffix: '+' },
        { value: '12', label: 'Industry Awards', suffix: '+' },
      ],
    },
    solutions: {
      label: 'Featured Solutions',
      title: 'Intelligent Solutions Engineered for Impact',
      desc: 'Purpose-built AI platforms and tools that solve complex organizational challenges at scale.',
      learnMore: 'Learn More',
    },
    academy: {
      label: 'Cortex Academy',
      title: 'Accelerate Your AI Career',
      desc: 'Industry-recognized certifications and hands-on training programs designed by practitioners for practitioners.',
      free: 'Free Courses',
      premium: 'Premium Courses',
      certified: 'Professional Certifications',
      viewAll: 'View All Courses',
      enroll: 'Enroll Now',
    },
    blog: {
      label: 'Latest Insights',
      title: 'Intelligence Behind Innovation',
      desc: 'Expert perspectives on AI trends, industry research, and practical guides for digital transformation.',
      readMore: 'Read Article',
      viewAll: 'View All Articles',
      minRead: 'min read',
    },
    cta: {
      title: 'Ready to Transform Your Organization?',
      desc: 'Book a complimentary consultation with our experts and discover how Cortex AI can accelerate your digital transformation journey.',
      book: 'Book a Free Consultation',
      explore: 'Explore Our Services',
    },
    about: {
      hero: {
        title: 'About Cortex AI',
        desc: 'We are pioneers in artificial intelligence and digital transformation, helping organizations unlock their full potential through intelligent technology.',
      },
      overview: {
        label: 'Who We Are',
        title: 'A Global Partner in AI-Driven Transformation',
        desc: 'Cortex AI is a leading artificial intelligence, data analytics, cybersecurity, and digital transformation company. We partner with governments, enterprises, universities, and healthcare organizations across the globe to design, build, and deploy intelligent solutions that drive measurable outcomes.\n\nFounded on the belief that AI should be accessible, ethical, and impactful, we combine cutting-edge research with deep industry expertise to help our clients navigate the complexities of the digital age and emerge as leaders in their fields.',
      },
      vision: {
        label: 'Our Vision',
        title: 'To become a trusted global partner in AI-driven innovation and digital transformation.',
        desc: 'We envision a world where every organization — regardless of size, industry, or geography — can harness the full power of artificial intelligence to solve complex problems, create lasting value, and shape a better future.',
      },
      mission: {
        label: 'Our Mission',
        title: 'Empowering organizations with intelligent technologies, data-driven insights, and future-ready capabilities.',
        desc: 'We are committed to delivering AI solutions that are not only technically excellent but also strategically aligned with our clients\' goals, ethically grounded, and built to scale.',
      },
      values: {
        label: 'Core Values',
        title: 'The Principles That Guide Everything We Do',
        items: [
          { title: 'Innovation', desc: 'We relentlessly pursue new ideas and approaches, pushing the boundaries of what AI can achieve.' },
          { title: 'Excellence', desc: 'We hold ourselves to the highest standards in every solution, engagement, and interaction.' },
          { title: 'Integrity', desc: 'We operate with radical transparency, honesty, and ethical responsibility in all our work.' },
          { title: 'Impact', desc: 'We measure success by the tangible, meaningful difference we create for clients and communities.' },
        ],
      },
      why: {
        label: 'Why Cortex AI',
        title: 'What Sets Us Apart',
        items: [
          { title: 'Research-Led Approach', desc: 'Our solutions are grounded in the latest AI research, ensuring you benefit from state-of-the-art capabilities.' },
          { title: 'Domain Expertise', desc: 'Deep industry knowledge across government, healthcare, finance, and education sectors.' },
          { title: 'Proven Track Record', desc: '150+ successful projects delivered across 15+ countries with 98% client satisfaction.' },
          { title: 'Full Lifecycle Support', desc: 'From ideation to deployment and continuous improvement — we are with you every step.' },
        ],
      },
    },
    servicesPage: {
      hero: { title: 'Our Services', desc: 'Comprehensive AI-powered services designed to transform your organization and drive competitive advantage.' },
      aiTitle: 'AI Solutions',
      aiDesc: 'End-to-end artificial intelligence services from strategy and consulting to full production deployment.',
      aiItems: [
        { title: 'AI Consulting', desc: 'Strategic AI roadmaps, feasibility assessments, and technology selection to guide your AI journey.' },
        { title: 'AI Agents', desc: 'Autonomous intelligent agents that automate complex workflows and decision-making processes.' },
        { title: 'Chatbots & Virtual Assistants', desc: 'Conversational AI solutions for customer service, internal support, and process automation.' },
        { title: 'LLM Integration', desc: 'Seamless integration of large language models into your existing products and workflows.' },
        { title: 'RAG Systems', desc: 'Retrieval-augmented generation systems for accurate, context-aware AI responses grounded in your data.' },
        { title: 'Natural Language Processing', desc: 'Text analysis, sentiment classification, entity extraction, and Arabic NLP capabilities.' },
        { title: 'Computer Vision', desc: 'Image recognition, object detection, document processing, and visual quality control systems.' },
        { title: 'Predictive Analytics', desc: 'Machine learning models for forecasting, anomaly detection, and business intelligence.' },
      ],
      dataTitle: 'Data Analytics',
      dataDesc: 'Transform your data into a strategic asset with our comprehensive analytics services.',
      cyberTitle: 'Cybersecurity',
      cyberDesc: 'AI-powered security solutions to protect your critical infrastructure and data assets.',
      digitalTitle: 'Digital Transformation',
      digitalDesc: 'Modernize your organization with cloud-native architecture, automation, and intelligent platforms.',
      trainingTitle: 'Professional Training',
      trainingDesc: 'Develop your team\'s capabilities with our certified AI, data, and cybersecurity programs.',
    },
    academyPage: {
      hero: { title: 'Cortex Academy', desc: 'Industry-recognized learning programs designed to equip professionals with tomorrow\'s most in-demand skills.' },
      freeCourses: 'Free Courses',
      premiumCourses: 'Premium Courses',
      certifications: 'Professional Certifications',
      enroll: 'Enroll Now',
      preview: 'Preview Course',
      hours: 'hours',
      students: 'students',
      level: 'Level',
    },
    blogPage: {
      hero: { title: 'Latest Insights', desc: 'Expert analysis, research, and practical guides from the Cortex AI team.' },
      search: 'Search articles...',
      allCategories: 'All Categories',
    },
    contactPage: {
      hero: { title: 'Get in Touch', desc: 'Ready to transform your organization? Let\'s start the conversation.' },
      form: {
        title: 'Send Us a Message',
        name: 'Full Name',
        email: 'Email Address',
        company: 'Company / Organization',
        phone: 'Phone Number',
        message: 'Message',
        send: 'Send Message',
        success: 'Thank you! Your message has been sent. We\'ll get back to you within 24 hours.',
      },
      info: {
        title: 'Contact Information',
        emailLabel: 'Email Us',
        followUs: 'Follow Us',
      },
    },
    footer: {
      desc: 'Transforming organizations through artificial intelligence, data analytics, and digital transformation solutions.',
      quickLinks: 'Quick Links',
      services: 'Services',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy',
      rights: 'All rights reserved.',
      tagline: 'Transforming Ideas into Intelligent Solutions',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      academy: 'الأكاديمية',
      blog: 'المدونة',
      contact: 'تواصل معنا',
      bookConsultation: 'احجز استشارة',
    },
    hero: {
      headline: 'تحويل الأفكار إلى حلول ذكية',
      subheadline: 'تمكين المؤسسات من خلال الذكاء الاصطناعي وتحليلات البيانات والتحول الرقمي والتدريب المهني.',
      bookConsultation: 'احجز استشارة',
      exploreServices: 'استكشف خدماتنا',
      scrollDown: 'مرر للاستكشاف',
    },
    trustedBy: {
      label: 'يثق بنا',
      title: 'يثق بنا قادة الصناعة حول العالم',
    },
    services: {
      label: 'ما نقدمه',
      title: 'خدمات شاملة مدعومة بالذكاء الاصطناعي',
      desc: 'من الأتمتة الذكية إلى التحول الرقمي للمؤسسات، نقدم حلولاً متكاملة مصممة خصيصاً لاحتياجات مؤسستك.',
      learnMore: 'اعرف المزيد',
      items: {
        ai: { title: 'حلول الذكاء الاصطناعي', desc: 'وكلاء ذكاء اصطناعي مخصصون وتكامل نماذج اللغة الكبيرة وأنظمة RAG ومعالجة اللغة الطبيعية ورؤية الحاسوب.' },
        data: { title: 'تحليلات البيانات', desc: 'تحويل البيانات الخام إلى معلومات قابلة للتنفيذ من خلال التحليلات المتقدمة والنمذجة التنبؤية.' },
        cyber: { title: 'الأمن السيبراني', desc: 'حماية أصولك الرقمية باستخدام الكشف عن التهديدات المدعوم بالذكاء الاصطناعي والاستجابة للحوادث.' },
        digital: { title: 'التحول الرقمي', desc: 'تحديث عملياتك من خلال اعتماد السحابة وأتمتة العمليات والتغيير التنظيمي المدفوع بالتكنولوجيا.' },
        training: { title: 'التدريب المهني', desc: 'تطوير مهارات موظفيك من خلال برامج الذكاء الاصطناعي وعلوم البيانات والأمن السيبراني المعتمدة.' },
      },
    },
    industries: {
      label: 'القطاعات التي نخدمها',
      title: 'حلول لكل قطاع',
      desc: 'نجلب خبرة متعمقة في كل مجال، ونقدم حلول ذكاء اصطناعي تلبي الاحتياجات التنظيمية والتشغيلية والاستراتيجية الفريدة لقطاعك.',
      items: ['الحكومة والقطاع العام', 'الجامعات والبحث العلمي', 'الرعاية الصحية وعلوم الحياة', 'المؤسسات والشركات الكبرى', 'الخدمات المالية', 'الشركات الصغيرة والمتوسطة', 'المؤسسات التعليمية', 'الدفاع والاستخبارات'],
    },
    why: {
      label: 'لماذا كورتكس AI',
      title: 'مبني لمستقبل الذكاء',
      desc: 'نجمع بين الخبرة التقنية العميقة والمعرفة الصناعية لتقديم حلول تخلق أثراً قابلاً للقياس.',
      items: [
        { title: 'جودة على مستوى المؤسسات', desc: 'كل حل مبني وفق معايير المؤسسات مع اختبارات صارمة وتعزيز أمني وتحسين للأداء.' },
        { title: 'بنية تحتية تضع الذكاء الاصطناعي أولاً', desc: 'نصمم كل حل مع الذكاء الاصطناعي في الجوهر، مما يضمن قابلية التوسع والتكيف والتعلم المستمر.' },
        { title: 'متعدد اللغات وواعٍ ثقافياً', desc: 'خبرة عميقة في معالجة اللغة العربية الطبيعية والسياقات الإقليمية، مما يتيح حلولاً لأسواق الشرق الأوسط.' },
        { title: 'شراكة من البداية إلى النهاية', desc: 'من الاستراتيجية إلى النشر وما بعده — نحن شريكك التقني طويل الأمد، وليس مجرد مورد.' },
        { title: 'منهجيات مثبتة', desc: 'أطر عمل مجربة ومتطورة عبر مئات التطبيقات المؤسسية في مختلف الصناعات.' },
        { title: 'الامتثال التنظيمي', desc: 'امتثال كامل مع GDPR وNCA وPDPL واللوائح الخاصة بالقطاع، مما يضمن حماية بياناتك.' },
      ],
    },
    stats: {
      label: 'أثرنا',
      items: [
        { value: '150', label: 'مشروع منجز', suffix: '+' },
        { value: '40', label: 'عميل مؤسسي', suffix: '+' },
        { value: '98', label: 'رضا العملاء', suffix: '%' },
        { value: '15', label: 'دولة نخدمها', suffix: '+' },
        { value: '5000', label: 'متخصص مدرب', suffix: '+' },
        { value: '12', label: 'جائزة صناعية', suffix: '+' },
      ],
    },
    solutions: {
      label: 'الحلول المميزة',
      title: 'حلول ذكية مصممة للتأثير',
      desc: 'منصات وأدوات ذكاء اصطناعي مصممة خصيصاً لحل التحديات التنظيمية المعقدة على نطاق واسع.',
      learnMore: 'اعرف المزيد',
    },
    academy: {
      label: 'أكاديمية كورتكس',
      title: 'سرّع مسيرتك المهنية في الذكاء الاصطناعي',
      desc: 'شهادات معترف بها في الصناعة وبرامج تدريب عملية مصممة من قبل الممارسين للممارسين.',
      free: 'دورات مجانية',
      premium: 'دورات مدفوعة',
      certified: 'شهادات مهنية',
      viewAll: 'عرض جميع الدورات',
      enroll: 'سجل الآن',
    },
    blog: {
      label: 'أحدث الرؤى',
      title: 'الذكاء وراء الابتكار',
      desc: 'وجهات نظر خبراء حول اتجاهات الذكاء الاصطناعي وأبحاث الصناعة وأدلة عملية للتحول الرقمي.',
      readMore: 'اقرأ المقالة',
      viewAll: 'عرض جميع المقالات',
      minRead: 'دقيقة قراءة',
    },
    cta: {
      title: 'هل أنت مستعد لتحويل مؤسستك؟',
      desc: 'احجز استشارة مجانية مع خبرائنا واكتشف كيف يمكن لـ Cortex AI تسريع رحلة التحول الرقمي لمؤسستك.',
      book: 'احجز استشارة مجانية',
      explore: 'استكشف خدماتنا',
    },
    about: {
      hero: {
        title: 'من نحن',
        desc: 'نحن رواد في مجال الذكاء الاصطناعي والتحول الرقمي، نساعد المؤسسات على إطلاق إمكاناتها الكاملة من خلال التكنولوجيا الذكية.',
      },
      overview: {
        label: 'من نحن',
        title: 'شريك عالمي في التحول المدعوم بالذكاء الاصطناعي',
        desc: 'كورتكس AI هي شركة رائدة في الذكاء الاصطناعي وتحليلات البيانات والأمن السيبراني والتحول الرقمي. نتشارك مع الحكومات والمؤسسات والجامعات والمنظمات الصحية حول العالم لتصميم وبناء ونشر حلول ذكية تحقق نتائج قابلة للقياس.',
      },
      vision: {
        label: 'رؤيتنا',
        title: 'أن نصبح شريكاً عالمياً موثوقاً في الابتكار المدعوم بالذكاء الاصطناعي والتحول الرقمي.',
        desc: 'نتصور عالماً تستطيع فيه كل مؤسسة — بغض النظر عن حجمها أو صناعتها أو موقعها الجغرافي — تسخير القوة الكاملة للذكاء الاصطناعي لحل المشكلات المعقدة وخلق قيمة دائمة.',
      },
      mission: {
        label: 'مهمتنا',
        title: 'تمكين المؤسسات بالتقنيات الذكية والرؤى القائمة على البيانات والقدرات الجاهزة للمستقبل.',
        desc: 'نحن ملتزمون بتقديم حلول ذكاء اصطناعي لا تكون متميزة تقنياً فحسب، بل متوافقة استراتيجياً مع أهداف عملائنا ومبنية على أسس أخلاقية وقابلة للتوسع.',
      },
      values: {
        label: 'قيمنا الأساسية',
        title: 'المبادئ التي توجه كل ما نفعله',
        items: [
          { title: 'الابتكار', desc: 'نسعى بلا كلل نحو أفكار ومناهج جديدة، ندفع حدود ما يمكن للذكاء الاصطناعي تحقيقه.' },
          { title: 'التميز', desc: 'نضع أنفسنا أمام أعلى المعايير في كل حل وتفاعل ومشاركة.' },
          { title: 'النزاهة', desc: 'نعمل بشفافية وأمانة ومسؤولية أخلاقية جذرية في جميع أعمالنا.' },
          { title: 'الأثر', desc: 'نقيس النجاح بالفارق الملموس والمعنوي الذي نخلقه للعملاء والمجتمعات.' },
        ],
      },
      why: {
        label: 'لماذا كورتكس AI',
        title: 'ما يميزنا',
        items: [
          { title: 'نهج مبني على البحث', desc: 'حلولنا مستندة إلى أحدث أبحاث الذكاء الاصطناعي لضمان استفادتك من أحدث الإمكانات.' },
          { title: 'خبرة في المجال', desc: 'معرفة صناعية عميقة في قطاعات الحكومة والرعاية الصحية والمال والتعليم.' },
          { title: 'سجل حافل بالإنجازات', desc: 'أكثر من 150 مشروع ناجح تم تسليمه في أكثر من 15 دولة بنسبة رضا 98%.' },
          { title: 'دعم دورة الحياة الكاملة', desc: 'من الفكرة إلى النشر والتحسين المستمر — نحن معك في كل خطوة.' },
        ],
      },
    },
    servicesPage: {
      hero: { title: 'خدماتنا', desc: 'خدمات شاملة مدعومة بالذكاء الاصطناعي مصممة لتحويل مؤسستك وتحقيق ميزة تنافسية.' },
      aiTitle: 'حلول الذكاء الاصطناعي',
      aiDesc: 'خدمات ذكاء اصطناعي متكاملة من الاستراتيجية والاستشارات إلى النشر الكامل في الإنتاج.',
      aiItems: [
        { title: 'استشارات الذكاء الاصطناعي', desc: 'خارطة طريق استراتيجية للذكاء الاصطناعي وتقييمات الجدوى واختيار التكنولوجيا لتوجيه رحلتك.' },
        { title: 'وكلاء الذكاء الاصطناعي', desc: 'وكلاء ذكاء اصطناعي مستقلون يؤتمتون سير العمل المعقدة وعمليات صنع القرار.' },
        { title: 'روبوتات الدردشة والمساعدون الافتراضيون', desc: 'حلول الذكاء الاصطناعي التحادثي لخدمة العملاء والدعم الداخلي وأتمتة العمليات.' },
        { title: 'تكامل نماذج اللغة الكبيرة', desc: 'تكامل سلس لنماذج اللغة الكبيرة في منتجاتك وسير عملك الحالية.' },
        { title: 'أنظمة RAG', desc: 'أنظمة توليد معزز بالاسترجاع لاستجابات دقيقة ومدركة للسياق مستندة إلى بياناتك.' },
        { title: 'معالجة اللغة الطبيعية', desc: 'تحليل النصوص وتصنيف المشاعر واستخراج الكيانات وإمكانيات معالجة اللغة العربية.' },
        { title: 'رؤية الحاسوب', desc: 'أنظمة التعرف على الصور وكشف الأجسام ومعالجة المستندات ومراقبة الجودة البصرية.' },
        { title: 'التحليلات التنبؤية', desc: 'نماذج تعلم الآلة للتنبؤ واكتشاف الشذوذات وذكاء الأعمال.' },
      ],
      dataTitle: 'تحليلات البيانات',
      dataDesc: 'حوّل بياناتك إلى أصل استراتيجي مع خدمات التحليلات الشاملة لدينا.',
      cyberTitle: 'الأمن السيبراني',
      cyberDesc: 'حلول أمنية مدعومة بالذكاء الاصطناعي لحماية بنيتك التحتية الحيوية وأصول البيانات.',
      digitalTitle: 'التحول الرقمي',
      digitalDesc: 'حدّث مؤسستك بالبنية السحابية الأصلية والأتمتة والمنصات الذكية.',
      trainingTitle: 'التدريب المهني',
      trainingDesc: 'طور قدرات فريقك مع برامجنا المعتمدة في الذكاء الاصطناعي والبيانات والأمن السيبراني.',
    },
    academyPage: {
      hero: { title: 'أكاديمية كورتكس', desc: 'برامج تعليمية معترف بها في الصناعة مصممة لتزويد المهنيين بأكثر المهارات طلباً في المستقبل.' },
      freeCourses: 'دورات مجانية',
      premiumCourses: 'دورات مدفوعة',
      certifications: 'شهادات مهنية',
      enroll: 'سجل الآن',
      preview: 'معاينة الدورة',
      hours: 'ساعات',
      students: 'طالب',
      level: 'المستوى',
    },
    blogPage: {
      hero: { title: 'أحدث الرؤى', desc: 'تحليلات وأبحاث وأدلة عملية من فريق كورتكس AI.' },
      search: 'ابحث في المقالات...',
      allCategories: 'جميع الفئات',
    },
    contactPage: {
      hero: { title: 'تواصل معنا', desc: 'هل أنت مستعد لتحويل مؤسستك؟ لنبدأ الحوار.' },
      form: {
        title: 'أرسل لنا رسالة',
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        company: 'الشركة / المؤسسة',
        phone: 'رقم الهاتف',
        message: 'الرسالة',
        send: 'إرسال الرسالة',
        success: 'شكراً! تم إرسال رسالتك. سنرد عليك خلال 24 ساعة.',
      },
      info: {
        title: 'معلومات الاتصال',
        emailLabel: 'راسلنا',
        followUs: 'تابعنا',
      },
    },
    footer: {
      desc: 'تحويل المؤسسات من خلال الذكاء الاصطناعي وتحليلات البيانات وحلول التحول الرقمي.',
      quickLinks: 'روابط سريعة',
      services: 'الخدمات',
      legal: 'قانوني',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      cookies: 'سياسة ملفات تعريف الارتباط',
      rights: 'جميع الحقوق محفوظة.',
      tagline: 'تحويل الأفكار إلى حلول ذكية',
    },
  },
};
