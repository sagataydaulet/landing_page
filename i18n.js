/**
 * Bridge Invest Capital — Translation System
 * Языки: ru | en | kz | zh
 *
 * Как изменить перевод: найдите нужный язык и ключ, отредактируйте значение.
 * Как добавить язык: скопируйте блок ru, задайте новый ключ,
 *   переведите строки, добавьте lang-option в nav каждой страницы.
 */

const LANGS = {
  ru: { flag: '🇷🇺', label: 'Русский',    code: 'RU' },
  en: { flag: '🇬🇧', label: 'English',     code: 'EN' },
  kz: { flag: '🇰🇿', label: 'Қазақша',    code: 'ҚЗ' },
  zh: { flag: '🇨🇳', label: '中文',        code: 'ZH' },
};

const translations = {

  /* ══════════════════════════════
     РУССКИЙ
  ══════════════════════════════ */
  ru: {
    'nav.home':        'Главная',
    'nav.services':    'Услуги',
    'nav.team':        'Наша команда',
    'nav.cta':         'Обсудить проект',

    'home.hero.title.gold':   'Надежный мост',
    'home.hero.title.rest':   'к инвестициям в Казахстане.',
    'home.hero.desc':         'Как профессиональный инвестиционный оператор, мы трансформируем инвестиционные идеи в работающий бизнес, обеспечивая сквозное сопровождение проекта от концепции до операционной прибыли. Наша экспертиза сфокусирована на системной нейтрализации регуляторных и административных барьеров, позволяя обеспечить «безопасность» входа и устойчивую деятельность вашего предприятия.',
    'home.hero.btn.discuss':  'Обсудить проект',
    'home.hero.btn.services': 'Наши услуги',

    'home.why.label':  'Почему Казахстан',
    'home.why.h2.1':   'Казахстан — один из самых активных инвестиционных рынков Центральной Азии.',
    'home.why.text.1': 'Тысячи проектов в национальных инвестиционных пулах, 16 специальных экономических зон, институты развития с капиталом в десятки триллионов тенге. Государство системно создаёт условия для привлечения капитала — фискальные преференции, инфраструктурные площадки, механизмы соинвестирования.',
    'home.why.h2.2':   'Возможностей достаточно. Сложность — в том, чтобы ими воспользоваться.',
    'home.why.text.2': 'Инвесторы регулярно сталкиваются с барьерами, которые сложно преодолеть без опыта работы внутри системы: административные процедуры, земельные вопросы, интеграция в госпрограммы, неформальная рыночная динамика. Bridge Invest Capital создана именно для того, чтобы закрыть этот разрыв.',

    'home.approach.label': 'Наш подход',
    'home.approach.h2':    'Комплексное сопровождение на каждом этапе',
    'home.card1.title':    'Комплексное сопровождение',
    'home.card1.text':     'Закрываем весь цикл проекта: от оценки идеи до операционного запуска и постинвестиционного мониторинга. Один партнёр на всех этапах.',
    'home.card2.title':    'Региональная экспертиза',
    'home.card2.text':     'Глубокое понимание казахстанской деловой среды, регуляторики и местной специфики — в каждом регионе страны.',
    'home.card3.title':    'GR-сопровождение',
    'home.card3.text':     'Эффективное взаимодействие с государственными органами, содействие в получении преференций, лицензий и участии в госпрограммах.',
    'home.card4.title':    'Защита интересов инвестора',
    'home.card4.text':     'Сопровождение на постинвестиционном этапе: контроль обязательств, регуляторные риски, текущие институциональные вопросы.',

    'services.label':    'Услуги',
    'services.subtitle': 'Пять этапов комплексного инвестиционного сопровождения',
    'services.s1.title': 'Идея проекта',
    'services.s1.sub':   'Мы проводим комплексную предварительную оценку реализуемости проекта до принятия инвестиционного решения и вовлечения капитала.',
    'services.s1.li1':   'Оперативную диагностику жизнеспособности проекта (оценка базовых предпосылок и реализуемости)',
    'services.s1.li2':   'Идентификацию ключевых рисков и ограничений (регуляторных, рыночных, инфраструктурных)',
    'services.s1.li3':   'Предварительное зондирование институциональной поддержки (взаимодействие с государственными органами и квазигосударственным сектором)',
    'services.s1.li4':   'Стратегическое позиционирование и анализ рынка (оценка спроса, конкурентной среды и ниш)',
    'services.s2.title': 'Структурирование входа',
    'services.s2.sub':   'Формирование правовой и операционной платформы для эффективного запуска и масштабирования бизнеса в Казахстане.',
    'services.s2.li1':   'Регистрация юридического лица (выбор оптимальной юрисдикции и организационно-правовой формы, сопровождение регистрации)',
    'services.s2.li2':   'Разработка стратегии выхода на рынок (адаптация бизнес-модели)',
    'services.s2.li3':   'Получение лицензий и разрешительной документации (определение требований, сопровождение процедур согласования и получения)',
    'services.s2.li4':   'Операционный запуск бизнеса (настройка ключевых бизнес-процессов, запуск деятельности и первичная операционная поддержка)',
    'services.s3.title': 'Локализация проекта',
    'services.s3.sub':   'Определение оптимальной территории размещения с учетом инфраструктурной обеспеченности, регуляторных условий и экономической эффективности проекта.',
    'services.s3.li1':   'Выбор региона и площадки размещения (анализ локаций с учетом логистики, ресурсов, рынков сбыта и мер государственной поддержки)',
    'services.s3.li2':   'Аудит технических условий и инфраструктурной готовности (оценка доступности и параметров подключения к инженерным сетям)',
    'services.s3.li3':   'Получение земельного участка (подбор, сопровождение процедур предоставления)',
    'services.s3.li4':   'Подключение к инженерной инфраструктуре (сопровождение до фактического подключения)',
    'services.s4.title': 'Стимулирование проекта',
    'services.s4.sub':   'Интеграция проекта в систему государственных мер поддержки с целью максимизации преференций и повышения экономической эффективности инвестиций.',
    'services.s4.li1':   'Структурирование и заключение инвестиционных инструментов поддержки (определение оптимального режима, сопровождение переговоров и фиксация условий предоставления преференций)',
    'services.s4.li2':   'Получение таможенных льгот на импорт оборудования (освобождение от ввозных пошлин и НДС в рамках применимого регулирования)',
    'services.s4.li3':   'Привлечение натурных грантов (предоставление земельных участков, инфраструктуры и иных имущественных активов)',
    'services.s4.li4':   'Интеграция в национальные и отраслевые программы развития (доступ к субсидиям, софинансированию и институциональной поддержке)',
    'services.s5.title': 'Операционное сопровождение и мониторинг после запуска проекта',
    'services.s5.sub':   'Комплексное сопровождение проекта на операционном этапе, направленное на защиту инвестиций, соблюдение обязательств и устойчивость деятельности.',
    'services.s5.li1':   'Контроль исполнения контрактных и инвестиционных обязательств (мониторинг KPI, сроков и условий соглашений, предупреждение рисков неисполнения)',
    'services.s5.li2':   'Текущее GR-консультирование (поддержка во взаимодействии с государственными органами, сопровождение регуляторных изменений)',
    'services.s5.li3':   'Выявление и управление регуляторными рисками (постоянный анализ нормативной среды, разработка мер по минимизации рисков)',
    'services.s5.li4':   'Взаимодействие с государственными органами и местным сообществом (выстраивание устойчивых коммуникаций, сопровождение рабочих вопросов и инициатив)',

    'team.label':   'Наша команда',
    'team.m1.name': 'Алмас Айдаров',
    'team.m1.role': 'Председатель наблюдательного совета',
    'team.m2.name': 'Даулет Сагатай',
    'team.m2.role': 'Генеральный директор',
    'team.m3.name': 'Нурсултан Спандияр',
    'team.m3.role': 'Директор по развитию бизнеса',
    'team.m4.name': 'Диас Сериков',
    'team.m4.role': 'Директор по стратегии и стратегическим проектам',
    'team.hint':   'Подробнее',

    'contacts.label':         'Контакты',
    'contacts.h1':            'Свяжитесь с нами',
    'contacts.h1.gold':       'Свяжитесь',
    'contacts.h1.rest':       ' с нами',    
    'contacts.subtitle':      'Готовы обсудить ваш проект и предложить оптимальный формат сопровождения. Работаем с проектами на любом этапе.',
    'contacts.phone.label':   'Телефон',
    'contacts.email.label':   'Электронная почта',
    'contacts.address.label': 'Адрес',
    'contacts.address.line1': 'Казахстан, г. Астана',
    'contacts.address.line2': 'ул. Достык, 20, 14 этаж',
    'contacts.hours.label':   'Режим работы',
    'contacts.hours.line1':   'Понедельник — Пятница',
    'contacts.hours.line2':   '09:00 — 18:00 (GMT+5, Астана)',
    'contacts.linkedin.label':'LinkedIn',
    'contacts.linkedin.text': 'Следите за нашими обновлениями и новостями компании',
    'contacts.linkedin.btn':  'Открыть LinkedIn',

    'footer.nav.label':      'Навигация',
    'footer.contacts.label': 'Контакты',
    'footer.address.label':  'Адрес',
    'footer.copyright':      '© 2026 Bridge Invest Capital. Все права защищены.',
  },

  /* ══════════════════════════════
     ENGLISH
  ══════════════════════════════ */
  en: {
    'nav.home':        'Home',
    'nav.services':    'Services',
    'nav.team':        'Our Team',
    'nav.cta':         'Discuss a Project',

    'home.hero.title.gold':   'A Reliable Bridge',
    'home.hero.title.rest':   'to Investment in Kazakhstan.',
    'home.hero.desc':         'As a professional investment operator, we transform investment ideas into functioning businesses by providing end-to-end project support from concept to operational profitability. Our expertise is focused on systematically neutralizing regulatory and administrative barriers, ensuring a “safe” market entry and the sustainable operation of your enterprise.',
    'home.hero.btn.discuss':  'Discuss a Project',
    'home.hero.btn.services': 'Our Services',

    'home.why.label':  'Why Kazakhstan',
    'home.why.h2.1':   'Kazakhstan is one of the most active investment markets in Central Asia.',
    'home.why.text.1': 'Thousands of projects in national investment pools, 16 special economic zones, development institutions with capital in the tens of trillions of tenge. The government systematically creates conditions to attract capital — fiscal incentives, infrastructure sites, co-investment mechanisms.',
    'home.why.h2.2':   'The opportunities are there. The challenge is knowing how to use them.',
    'home.why.text.2': 'Investors regularly encounter barriers that are difficult to overcome without experience inside the system: administrative procedures, land issues, integration into government programs, informal market dynamics. Bridge Invest Capital was created specifically to close this gap.',

    'home.approach.label': 'Our Approach',
    'home.approach.h2':    'Comprehensive support at every stage',
    'home.card1.title':    'End-to-End Support',
    'home.card1.text':     'We cover the full project cycle: from idea assessment to operational launch and post-investment monitoring. One partner across all stages.',
    'home.card2.title':    'Regional Expertise',
    'home.card2.text':     'Deep understanding of the Kazakhstani business environment, regulatory framework and local specifics — in every region of the country.',
    'home.card3.title':    'GR Support',
    'home.card3.text':     'Effective engagement with government bodies, assistance in obtaining preferences, licenses and participation in state programs.',
    'home.card4.title':    'Investor Protection',
    'home.card4.text':     'Post-investment support: obligation monitoring, regulatory risks, ongoing institutional issues.',

    'services.label':    'Services',
    'services.subtitle': 'Five stages of comprehensive investment support',
    'services.s1.title': 'Project Concept',
    'services.s1.sub':   'We conduct a comprehensive preliminary assessment of project feasibility prior to making an investment decision and committing capital.',
    'services.s1.li1':   'Rapid diagnostics of project viability (assessment of key assumptions and feasibility)',
    'services.s1.li2':   'Identification of key risks and constraints (regulatory, market, and infrastructure-related)',
    'services.s1.li3':   'Preliminary exploration of institutional support (engagement with government bodies and quasi-government sector entities)',
    'services.s1.li4':   'Strategic positioning and market analysis (assessment of demand, competitive landscape, and market niches)',
    'services.s2.title': 'Market Entry Structuring',
    'services.s2.sub':   'Establishing a legal and operational platform for the efficient launch and scaling of a business in Kazakhstan.',
    'services.s2.li1':   'Legal entity registration (selection of optimal jurisdiction and legal structure, full registration support)',
    'services.s2.li2':   'Go-to-market strategy development (adaptation of the business model)',
    'services.s2.li3':   'Obtaining licenses and permits (identification of requirements, support throughout approval and acquisition processes)',
    'services.s2.li4':   'Operational business launch (setup of key business processes, launch of operations, and initial operational support)',
    'services.s3.title': 'Project Localization',
    'services.s3.sub':   'Determining the optimal location for project implementation, taking into account infrastructure availability, regulatory conditions, and overall economic efficiency.',
    'services.s3.li1':   'Selection of region and site (location analysis considering logistics, resource availability, target markets, and government support measures)',
    'services.s3.li2':   'Technical conditions and infrastructure readiness audit (assessment of availability and parameters for connection to utility infrastructure)',
    'services.s3.li3':   'Land plot acquisition (site selection and support throughout the allocation process)',
    'services.s3.li4':   'Connection to engineering infrastructure (end-to-end support through to actual connection)',
    'services.s4.title': 'Project Incentivization',
    'services.s4.sub':   'Integration of the project into the system of government support measures to maximize incentives and enhance the economic efficiency of investments.',
    'services.s4.li1':   'Structuring and execution of investment support instruments (selection of the optimal regime, support in negotiations, and formalization of incentive terms)',
    'services.s4.li2':   'Obtaining customs incentives for equipment imports (exemptions from import duties and VAT in accordance with applicable regulations)',
    'services.s4.li3':   'Attraction of in-kind grants (provision of land plots, infrastructure, and other tangible assets)',
    'services.s4.li4':   'Integration into national and sectoral development programs (access to subsidies, co-financing, and institutional support)',
    'services.s5.title': 'Post-Launch Operational Support and Monitoring',
    'services.s5.sub':   'Comprehensive project support at the operational stage aimed at protecting investments, ensuring compliance with obligations, and maintaining business sustainability.',
    'services.s5.li1':   'Monitoring of contractual and investment obligations (tracking KPIs, timelines, and agreement terms; prevention of non-compliance risks)',
    'services.s5.li2':   'Ongoing GR advisory (support in engagement with government authorities and navigation of regulatory changes)',
    'services.s5.li3':   'Identification and management of regulatory risks (continuous analysis of the regulatory environment and development of risk mitigation measures)',
    'services.s5.li4':   'Interaction with government authorities and local communities (building sustainable communication channels and supporting ongoing operational matters and initiatives)',

    'team.label':   'Our Team',
    'team.m1.name': 'Almas Aidarov',
    'team.m1.role': 'Chairman of the Board',
    'team.m2.name': 'Daulet Sagatay',
    'team.m2.role': 'Chief Executive Officer',
    'team.m3.name': 'Nursultan Spandiyar',
    'team.m3.role': 'Director, Business Development',
    'team.m4.name': 'Dias Serikov',
    'team.m4.role': 'Director, Strategy and Strategic Projects',
    'team.hint':   'Learn more',

    'contacts.label':         'Contacts',
    'contacts.h1':            'Get in Touch',
    'contacts.h1.gold':       'Get in',
    'contacts.h1.rest':       ' Touch',    
    'contacts.subtitle':      'Ready to discuss your project and propose the optimal support format. We work with projects at any stage.',
    'contacts.phone.label':   'Phone',
    'contacts.email.label':   'Email',
    'contacts.address.label': 'Address',
    'contacts.address.line1': 'Kazakhstan, Astana',
    'contacts.address.line2': 'Dostyk St. 20, 14th floor',
    'contacts.hours.label':   'Working Hours',
    'contacts.hours.line1':   'Monday — Friday',
    'contacts.hours.line2':   '09:00 — 18:00 (GMT+5, Astana)',
    'contacts.linkedin.label':'LinkedIn',
    'contacts.linkedin.text': 'Follow our updates and company news',
    'contacts.linkedin.btn':  'Open LinkedIn',

    'footer.nav.label':      'Navigation',
    'footer.contacts.label': 'Contacts',
    'footer.address.label':  'Address',
    'footer.copyright':      '© 2026 Bridge Invest Capital. All rights reserved.',
  },

  /* ══════════════════════════════
     ҚАЗАҚША
  ══════════════════════════════ */
  kz: {
    'nav.home':        'Басты бет',
    'nav.services':    'Қызметтер',
    'nav.team':        'Біздің команда',
    'nav.cta':         'Жобаны талқылау',

    'home.hero.title.gold':   'Қазақстандағы инвестицияларға',
    'home.hero.title.rest':   'cенімді көпір.',
    'home.hero.desc':         'Кәсіби инвестициялық оператор ретінде біз инвестициялық идеяларды өміршең бизнеске айналдырамыз, жобаны тұжырымдамадан операциялық пайдаға дейін соңына дейін қамтамасыз етеміз. Біздің тәжірибеміз реттеуші және әкімшілік кедергілерді жүйелі түрде жоюға, бизнесіңіздің қауіпсіз және тұрақты жұмысын қамтамасыз етуге бағытталған.',
    'home.hero.btn.discuss':  'Жобаны талқылау',
    'home.hero.btn.services': 'Біздің қызметтер',

    'home.why.label':  'Неліктен Қазақстан',
    'home.why.h2.1':   'Қазақстан — Орталық Азиядағы белсенді инвестициялық нарықтардың бірі.',
    'home.why.text.1': 'Ұлттық инвестициялық пулдардағы мыңдаған жобалар, 16 арнайы экономикалық аймақ, капиталы ондаған триллион теңгені құрайтын даму институттары. Мемлекет капиталды тарту үшін жүйелі түрде жағдай жасайды-фискалдық преференциялар, инфрақұрылымдық алаңдар, бірлесіп инвестициялау тетіктері.',
    'home.why.h2.2':   'Мүмкіндіктер жеткілікті. Қиындық - оларды дұрыс пайдалана білуде.',
    'home.why.text.2': 'Инвесторлар жүйе ішіндегі тәжірибесіз еңсеруге қиын кедергілерге жиі тап болады: әкімшілік рәсімдер, Жер мәселелері, мемлекеттік бағдарламаларға интеграция, бейресми нарықтық динамика. Bridge Invest Capital дәл осы олқылықты жабу үшін жасалған.',

    'home.approach.label': 'Біздің тәсіл',
    'home.approach.h2':    'Әр кезеңде кешенді сүйемелдеу',
    'home.card1.title':    'Кешенді сүйемелдеу',
    'home.card1.text':     'Біз жобаның бүкіл циклін жабамыз: идеяны бағалаудан бастап Операциялық іске қосуға және инвестициядан кейінгі бақылауға дейін. Барлық кезеңдерде бір серіктес.',
    'home.card2.title':    'Аймақтық сараптама',
    'home.card2.text':     'Еліміздің әр өңірінде қазақстандық іскерлік ортаны, реттеушілік пен жергілікті ерекшелікті терең түсіну.',
    'home.card3.title':    'GR-сүйемелдеу',
    'home.card3.text':     'Мемлекеттік органдармен тиімді өзара іс-қимыл жасау, преференциялар, лицензиялар алуға және мемлекеттік бағдарламаларға қатысуға жәрдемдесу',
    'home.card4.title':    'Инвестор мүдделерін қорғау',
    'home.card4.text':     'Инвестициядан кейінгі кезеңде сүйемелдеу: міндеттемелерді бақылау, реттеуші тәуекелдер, ағымдағы институционалдық мәселелер.',

    'services.label':    'Қызметтер',
    'services.subtitle': 'Инвестициялық сүйемелдеудің бес кезеңі',
    'services.s1.title': 'Жоба идеясы',
    'services.s1.sub':   'Біз жобаның орындылығын инвестициялық шешім қабылдап, капиталды тарту алдында алдын-ала кешенді бағалауды жүргіземіз.',
    'services.s1.li1':   'Операциялық жобаның өміршеңдігін бағалау (негізгі болжамдар мен орынды бағалау)',
    'services.s1.li2':   'Негізгі тәуекелдер мен шектеулерді анықтау (реттеу, нарықтық, инфрақұрылымдық)',
    'services.s1.li3':   'Институционалдық қолдауды алдын ала бағалау (мемлекеттік органдармен және квазимемлекеттік сектормен өзара іс-қимыл)',
    'services.s1.li4':   'Стратегиялық позициялау және нарықты талдау (сұранысты, бәсекелестік ортаны және тауашаларды бағалау)',
    'services.s2.title': 'Кіру құрылымы',
    'services.s2.sub':   'Қазақстанда бизнесті тиімді іске қосу және масштабтау үшін құқықтық және операциялық платформаны әзірлеу.',
    'services.s2.li1':   'Заңды тұлғаны тіркеу (оңтайлы юрисдикция мен құқықтық нысанды таңдау, тіркеуді сүйемелдеу)',
    'services.s2.li2':   'Нарыққа шығу стратегиясын әзірлеу (бизнес үлгісіне бейімделу)',
    'services.s2.li3':   'Лицензиялар мен рұқсаттарды алу (талаптарды анықтау, бекіту және сатып алу процедураларын сүйемелдеу)',
    'services.s2.li4':   'Бизнесті жедел іске қосу (негізгі бизнес-процестерді орнату, операцияларды бастау және бастапқы операциялық сүйемелдеу)',
    'services.s3.title': 'Жобаны орналастыру',
    'services.s3.sub':   'Инфрақұрылымның қолжетімділігін, нормативтік шарттарды және жобаның экономикалық тиімділігін ескере отырып, оңтайлы орналасуды анықтау.',
    'services.s3.li1':   'Аймақ пен алаңды таңдау (логистиканы, ресурстарды, өткізу нарықтарын және мемлекеттік қолдау шараларын ескере отырып, орындарды талдау)',
    'services.s3.li2':   'Техникалық шарттар мен инфрақұрылымның дайындығын тексеру (инженерлік желілерге қолжетімділік пен қосылу параметрлерін бағалау)',
    'services.s3.li3':   'Жер телімін алу (таңдау, алу рәсімдерін сүйемелдеу)',
    'services.s3.li4':   'Коммуналдық инфрақұрылымға қосылу (нақты қосылымға дейін сүйемелдеу)',
    'services.s4.title': 'Жобаны ынталандыру',
    'services.s4.sub':   'Инвестициялардың экономикалық тиімділігін және ынталандыруды барынша арттыру үшін жобаны мемлекеттік қолдау шаралары жүйесіне интеграциялау',
    'services.s4.li1':   'Инвестициялық қолдау құралдарын құрылымдау және бекіту (Оңтайлы режимді анықтау, келіссөздерді сүйемелдеу және ынталандыру шарттарын белгілеу)',
    'services.s4.li2':   'Жабдық импорты үшін кедендік жеңілдіктер алу (Қолданыстағы ережелер шеңберінде импорттық баждар мен ҚҚС-тан босату)',
    'services.s4.li3':   'Натуралды гранттарды тарту (Жер, инфрақұрылым және басқа да мүліктік активтерді беру)',
    'services.s4.li4':   'Ұлттық және салалық даму бағдарламаларына интеграциялау (Субсидияларға, бірлесіп қаржыландыруға және институционалдық қолдауға қол жеткізу)',
    'services.s5.title': 'Жоба іске қосылғаннан кейін операциялық сүйемелдеу және мониторинг',
    'services.s5.sub':   'Инвестицияларды қорғауға, міндеттемелерді орындауға және бизнестің тұрақтылығын қамтамасыз етуге бағытталған пайдалану кезеңіндегі кешенді жобалық қолдау.',
    'services.s5.li1':   'Келісімшарттық және инвестициялық міндеттемелердің орындалуын бақылау (KPI мониторингі, келісімдердің шарттары мен талаптарын бақылау, сәйкессіздік тәуекелдерінің алдын алу)',
    'services.s5.li2':   'GR бойынша үздіксіз кеңес беру (мемлекеттік органдармен өзара әрекеттесуді сүйемелдеу, реттеуші өзгерістерді бақылау)',
    'services.s5.li3':   'Реттеуші тәуекелдерді анықтау және басқару (реттеуші ортаны үздіксіз талдау, тәуекелдерді азайту шараларын әзірлеу)',
    'services.s5.li4':   'Мемлекеттік органдармен және жергілікті қауымдастықпен өзара әрекеттесу (тұрақты коммуникацияларды құру, операциялық мәселелер мен бастамаларды сүйемелдеу)',


    'team.label':   'Біздің команда',
    'team.m1.name': 'Алмас Айдаров',
    'team.m1.role': 'Қадағалау кеңесінің төрағасы',
    'team.m2.name': 'Дәулет Сағатай',
    'team.m2.role': 'Бас директор',
    'team.m3.name': 'Нұрсұлтан Спандияр',
    'team.m3.role': 'Бизнесті дамыту директоры',
    'team.m4.name': 'Диас Сериков',
    'team.m4.role': 'Стратегия және стратегиялық жобалар жөніндегі директор',    
    'team.hint':   'Толығырақ',

    'contacts.label':         'Байланыс',
    'contacts.h1':            'Бізбен байланысыңыз',
    'contacts.h1.gold':       'Бізбен',
    'contacts.h1.rest':       ' байланысыңыз',    
    'contacts.subtitle':      'Жобаңызды талқылауға және оңтайлы сүйемелдеу форматын ұсынуға дайынбыз. Кез келген кезеңдегі жобалармен жұмыс істейміз.',
    'contacts.phone.label':   'Телефон',
    'contacts.email.label':   'Электрондық пошта',
    'contacts.address.label': 'Мекенжай',
    'contacts.address.line1': 'Қазақстан, Астана қ.',
    'contacts.address.line2': 'Достық к-сі, 20, 14-қабат',
    'contacts.hours.label':   'Жұмыс уақыты',
    'contacts.hours.line1':   'Дүйсенбі — Жұма',
    'contacts.hours.line2':   '09:00 — 18:00 (GMT+5, Астана)',
    'contacts.linkedin.label':'LinkedIn',
    'contacts.linkedin.text': 'Компания жаңалықтарын бақылаңыз',
    'contacts.linkedin.btn':  'LinkedIn-ді ашу',

    'footer.nav.label':      'Навигация',
    'footer.contacts.label': 'Байланыс',
    'footer.address.label':  'Мекенжай',
    'footer.copyright':      '© 2026 Bridge Invest Capital. Барлық құқықтар қорғалған.',
  },

  /* ══════════════════════════════
     中文（简体）
  ══════════════════════════════ */
  zh: {
    'nav.home':        '首页',
    'nav.services':    '服务',
    'nav.team':        '我们的团队',
    'nav.cta':         '讨论项目',

    'home.hero.title.gold':   '可靠的桥梁',
    'home.hero.title.rest':   '通往哈萨克斯坦的投资。',
    'home.hero.desc':         '作为专业的投资运营机构，我们将投资理念转化为可运营的业务，提供从项目构想到实现经营盈利的全流程支持。我们的专业能力聚焦于系统性消除监管和行政壁垒，从而确保企业“安全”进入市场并实现可持续运营。',
    'home.hero.btn.discuss':  '讨论项目',
    'home.hero.btn.services': '我们的服务',

    'home.why.label':  '为何选择哈萨克斯坦',
    'home.why.h2.1':   '哈萨克斯坦是中亚最活跃的投资市场之一。',
    'home.why.text.1': '国家投资池中有数千个项目，16个特别经济区，资本达数十万亿坚戈的发展机构。政府系统性地创造吸引资本的条件——税收优惠、基础设施园区、联合投资机制。',
    'home.why.h2.2':   '机遇就在眼前，难在如何把握。',
    'home.why.text.2': '投资者经常面临没有系统内部经验难以克服的障碍：行政程序、土地问题、融入国家项目、非正式市场动态。Bridge Invest Capital正是为弥合这一差距而生。',

    'home.approach.label': '我们的方法',
    'home.approach.h2':    '每个阶段的全面陪伴',
    'home.card1.title':    '全程陪伴',
    'home.card1.text':     '覆盖项目全周期：从理念评估到运营启动及投后监测。全程一个合作伙伴。',
    'home.card2.title':    '区域专业知识',
    'home.card2.text':     '深入了解哈萨克斯坦商业环境、监管体系及地方特性——覆盖全国每个地区。',
    'home.card3.title':    '政府关系支持',
    'home.card3.text':     '与政府机构有效互动，协助获取优惠政策、许可证并参与国家项目。',
    'home.card4.title':    '投资者利益保护',
    'home.card4.text':     '投后阶段陪伴：义务监督、监管风险、持续机构事务处理。',

    'services.label':    '服务',
    'services.subtitle': '全面投资陪伴的五个阶段',
    'services.s1.title': '项目构想',
    'services.s1.sub':   '在作出投资决策并投入资本之前，我们对项目的可行性进行全面的前期评估.',
    'services.s1.li1':   '项目可行性的快速诊断 （对关键前提条件和可实现性的评估）',
    'services.s1.li2':   '关键风险与限制因素识别 （包括监管、市场及基础设施方面）',
    'services.s1.li3':   '制度性支持的初步调研 （与政府机构及准国有部门的沟通与协作）',
    'services.s1.li4':   '战略定位与市场分析 （对需求、竞争环境及市场细分的评估）',
    'services.s2.title': '进入结构设计',
    'services.s2.sub':   '为在哈萨克斯坦高效启动和扩展业务构建法律和运营平台.',
    'services.s2.li1':   '法律实体注册 （选择最优司法辖区及组织形式，并提供注册全流程支持）',
    'services.s2.li2':   '市场进入战略制定 （商业模式的本地化与调整）',
    'services.s2.li3':   '获取许可证及相关许可文件 （明确要求并全程支持审批与获取流程）',
    'services.s2.li4':   '业务运营启动 （搭建关键业务流程，启动运营并提供初期运营支持）',
    'services.s3.title': '项目落地选址',
    'services.s3.sub':   '在综合考虑基础设施条件、监管环境及项目经济效益的基础上，确定项目实施的最优选址.',
    'services.s3.li1':   '区域及具体选址确定 （综合物流、资源、销售市场及政府支持政策进行分析）',
    'services.s3.li2':   '技术条件及基础设施准备情况审计 （评估接入工程基础设施的可行性及相关参数）',
    'services.s3.li3':   '土地获取 （选址并全程支持土地获取流程）',
    'services.s3.li4':   '接入工程基础设施 （提供直至实际接入完成的全流程支持）',
    'services.s4.title': '项目激励支持',
    'services.s4.sub':   '将项目纳入国家支持政策体系，以最大化优惠措施并提升投资的经济效率.',
    'services.s4.li1':   '投资支持工具的结构设计与落地 （选择最优政策模式，支持谈判并明确优惠条件）',
    'services.s4.li2':   '获取设备进口的海关优惠 （根据适用法规享受关税及增值税减免）',
    'services.s4.li3':   '引入实物形式的资助 （提供土地、基础设施及其他有形资产）',
    'services.s4.li4':   '纳入国家及行业发展规划 （获取补贴、联合融资及制度性支持）',
    'services.s5.title': '项目投产后的运营支持与监测',
    'services.s5.sub':   '在项目运营阶段提供全面支持，旨在保护投资、确保履约并保障业务的可持续发展.',
    'services.s5.li1':   '合同及投资义务履行监控 （跟踪KPI、时间进度及协议条款，预防违约风险）',
    'services.s5.li2':   '持续性的政府关系（GR）咨询支持 （协助与政府机构沟通并应对监管变化）',
    'services.s5.li3':   '监管风险识别与管理 （持续分析政策环境并制定风险缓释措施）',
    'services.s5.li4':   '与政府机构及当地社区的互动 （建立稳定的沟通机制，支持日常运营事务及相关举措）',

    'team.label':   '我们的团队',
    'team.m1.name': 'Almas Aidarov',
    'team.m1.role': '监事会主席',
    'team.m2.name': 'Daulet Sagatay',
    'team.m2.role': '首席执行官',
    'team.m3.name': 'Nursultan Spandiyar',
    'team.m3.role': '业务发展总监',
    'team.m4.name': 'Dias Serikov',
    'team.m4.role': '战略与战略项目总监',
    'team.hint':   '了解更多',

    'contacts.label':         '联系我们',
    'contacts.h1':            '与我们联系',
    'contacts.h1.gold':       '与我们',
    'contacts.h1.rest':       '联系',    
    'contacts.subtitle':      '我们随时准备讨论您的项目并提出最优陪伴方案。接受任何阶段的项目。',
    'contacts.phone.label':   '电话',
    'contacts.email.label':   '电子邮件',
    'contacts.address.label': '地址',
    'contacts.address.line1': '哈萨克斯坦，阿斯塔纳市',
    'contacts.address.line2': 'Dostyk大街20号，14楼',
    'contacts.hours.label':   '工作时间',
    'contacts.hours.line1':   '周一 — 周五',
    'contacts.hours.line2':   '09:00 — 18:00（GMT+5，阿斯塔纳）',
    'contacts.linkedin.label':'LinkedIn',
    'contacts.linkedin.text': '关注我们的最新动态和公司新闻',
    'contacts.linkedin.btn':  '打开 LinkedIn',

    'footer.nav.label':      '导航',
    'footer.contacts.label': '联系方式',
    'footer.address.label':  '地址',
    'footer.copyright':      '© 2026 Bridge Invest Capital. 版权所有。',
  },
};

/* ═══════════════════════════════════════
   ENGINE
═══════════════════════════════════════ */
const I18N_KEY = 'bic_lang';
let currentLang = localStorage.getItem(I18N_KEY) || 'ru';

function t(key) {
  return (translations[currentLang]?.[key]) || (translations.ru?.[key]) || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  // Update dropdown button label
  const btnLabel = document.getElementById('langLabel');
  if (btnLabel) {
    const info = LANGS[currentLang] || LANGS.ru;
    btnLabel.textContent = info.flag + ' ' + info.code;
  }
  // Update active state on all lang options
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === currentLang);
  });
  document.querySelectorAll('.mob-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
  document.documentElement.lang = currentLang;
  const titleMeta = document.querySelector('meta[name="i18n-title"]');
  if (titleMeta) document.title = t(titleMeta.content) + ' — Bridge Invest Capital';
}

function setLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem(I18N_KEY, lang);
  const dd = document.getElementById('langDropdown');
  if (dd) dd.classList.remove('open');
  applyTranslations();
  document.dispatchEvent(new CustomEvent('langChanged', { detail: lang }));
}

document.addEventListener('DOMContentLoaded', applyTranslations);
