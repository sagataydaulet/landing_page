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
    'home.hero.desc':         '— профессиональный инвестиционный оператор. Мы сопровождаем проект от первоначальной идеи до работающего бизнеса — преодолевая административные, регуляторные и институциональные барьеры на каждом этапе.',
    'home.hero.btn.discuss':  'Обсудить проект',
    'home.hero.btn.services': 'Наши услуги',

    'home.why.label':  'Почему Казахстан',
    'home.why.h2.1':   'Казахстан — один из самых активных инвестиционных рынков Центральной Азии.',
    'home.why.text.1': 'Тысячи проектов в национальных инвестиционных пулах, 16 специальных экономических зон, институты развития с капиталом в десятки триллионов тенге. Государство системно создаёт условия для привлечения капитала — фискальные преференции, инфраструктурные площадки, механизмы соинвестирования.',
    'home.why.h2.2':   'Возможности есть. Сложность — в том, чтобы ими воспользоваться.',
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
    'services.s1.sub':   'Оцениваем реализуемость до того, как вы вложите капитал или ресурсы.',
    'services.s1.li1':   'Экспресс-оценка реализуемости проекта',
    'services.s1.li2':   'Выявление рисков и ограничений',
    'services.s1.li3':   'Зондирование поддержки со стороны госорганов',
    'services.s1.li4':   'Стратегическое позиционирование и анализ рынка',
    'services.s2.title': 'Структурирование входа',
    'services.s2.sub':   'Правовая и операционная основа для запуска бизнеса в Казахстане.',
    'services.s2.li1':   'Регистрация юридического лица',
    'services.s2.li2':   'Разработка стратегии выхода на рынок',
    'services.s2.li3':   'Получение лицензий и разрешений',
    'services.s2.li4':   'Операционный запуск',
    'services.s3.title': 'Локализация',
    'services.s3.sub':   'Подбор оптимального региона, площадки и доступ к инфраструктуре.',
    'services.s3.li1':   'Региональный и площадочный выбор',
    'services.s3.li2':   'Аудит технических условий',
    'services.s3.li3':   'Получение земельного участка',
    'services.s3.li4':   'Подключение к инженерной инфраструктуре',
    'services.s4.title': 'Стимулирование',
    'services.s4.sub':   'Интеграция в государственные программы поддержки и получение преференций.',
    'services.s4.li1':   'Заключение инвестиционного контракта (льготы по КПН, налогу на имущество, земельному налогу)',
    'services.s4.li2':   'Таможенные льготы на импорт оборудования',
    'services.s4.li3':   'Натурные гранты: земля и инфраструктура',
    'services.s4.li4':   'Участие в национальных программах развития',
    'services.s5.title': 'Эксплуатация и мониторинг',
    'services.s5.sub':   'Защита инвестиций и сопровождение на операционном этапе.',
    'services.s5.li1':   'Контроль исполнения контрактных обязательств',
    'services.s5.li2':   'Текущее GR-консультирование',
    'services.s5.li3':   'Выявление и снижение регуляторных рисков',
    'services.s5.li4':   'Взаимодействие с госорганами и местным сообществом',

    'team.label':   'Наша команда',
    'team.m1.name': 'Айдаров Алмас',
    'team.m1.role': 'Председатель наблюдательного совета',
    'team.m2.name': 'Сагатай Даулет',
    'team.m2.role': 'Генеральный директор',
    'team.m3.name': 'Спандияр Нурсултан',
    'team.m3.role': 'Директор по развитию бизнеса',
    'team.m4.name': 'Сериков Диас',
    'team.m4.role': 'Директор по связи с государством',
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
    'home.hero.desc':         '— a professional investment operator. We accompany projects from initial idea to working business — overcoming administrative, regulatory and institutional barriers at every step.',
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
    'services.s1.title': 'Project Idea',
    'services.s1.sub':   'We assess feasibility before you invest capital or resources.',
    'services.s1.li1':   'Express project feasibility assessment',
    'services.s1.li2':   'Risk and constraint identification',
    'services.s1.li3':   'Government support sounding',
    'services.s1.li4':   'Strategic positioning and market analysis',
    'services.s2.title': 'Entry Structuring',
    'services.s2.sub':   'Legal and operational foundation for launching a business in Kazakhstan.',
    'services.s2.li1':   'Legal entity registration',
    'services.s2.li2':   'Market entry strategy development',
    'services.s2.li3':   'Obtaining licenses and permits',
    'services.s2.li4':   'Operational launch',
    'services.s3.title': 'Localization',
    'services.s3.sub':   'Selecting the optimal region, site and infrastructure access.',
    'services.s3.li1':   'Regional and site selection',
    'services.s3.li2':   'Technical conditions audit',
    'services.s3.li3':   'Land plot acquisition',
    'services.s3.li4':   'Engineering infrastructure connection',
    'services.s4.title': 'Incentivization',
    'services.s4.sub':   'Integration into government support programs and obtaining preferences.',
    'services.s4.li1':   'Investment contract conclusion (CIT, property tax, land tax exemptions)',
    'services.s4.li2':   'Customs exemptions on equipment imports',
    'services.s4.li3':   'In-kind grants: land and infrastructure',
    'services.s4.li4':   'Participation in national development programs',
    'services.s5.title': 'Operations & Monitoring',
    'services.s5.sub':   'Investment protection and support at the operational stage.',
    'services.s5.li1':   'Contractual obligation performance monitoring',
    'services.s5.li2':   'Ongoing GR consulting',
    'services.s5.li3':   'Regulatory risk identification and mitigation',
    'services.s5.li4':   'Engagement with government bodies and local community',

    'team.label':   'Our Team',
    'team.m1.name': 'Almas Aidarov',
    'team.m1.role': 'Chairman of the Board',
    'team.m2.name': 'Daulet Sagatay',
    'team.m2.role': 'Chief Executive Officer',
    'team.m3.name': 'Nursultan Spandiyar',
    'team.m3.role': 'Director, Business Development',
    'team.m4.name': 'Dias Serikov',
    'team.m4.role': 'Director, Government Relations',
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

    'home.hero.title.gold':   'Сенімді көпір',
    'home.hero.title.rest':   'Қазақстандағы инвестицияларға.',
    'home.hero.desc':         '— кәсіби инвестициялық оператор. Біз жобаны бастапқы идеядан жұмыс істейтін бизнеске дейін сүйемелдейміз — әкімшілік, реттеуші және институционалдық кедергілерді жеңе отырып.',
    'home.hero.btn.discuss':  'Жобаны талқылау',
    'home.hero.btn.services': 'Біздің қызметтер',

    'home.why.label':  'Неліктен Қазақстан',
    'home.why.h2.1':   'Қазақстан — Орталық Азиядағы ең белсенді инвестициялық нарықтардың бірі.',
    'home.why.text.1': 'Ұлттық инвестициялық пулдардағы мыңдаған жобалар, 16 арнайы экономикалық аймақ, капиталы ондаған триллион теңгені құрайтын даму институттары. Мемлекет капиталды тарту үшін жүйелі жағдайлар жасайды — фискалдық преференциялар, инфрақұрылымдық алаңдар, бірлескен инвестиция механизмдері.',
    'home.why.h2.2':   'Мүмкіндіктер бар. Қиындық — олардан пайдалана білуде.',
    'home.why.text.2': 'Инвесторлар жүйе ішіндегі тәжірибесіз еңсеруге қиын кедергілерге жиі тап болады: әкімшілік рәсімдер, жер мәселелері, мемлекеттік бағдарламаларға интеграция, бейресми нарықтық динамика. Bridge Invest Capital осы алшақтықты жою үшін құрылған.',

    'home.approach.label': 'Біздің тәсіл',
    'home.approach.h2':    'Әр кезеңде кешенді сүйемелдеу',
    'home.card1.title':    'Кешенді сүйемелдеу',
    'home.card1.text':     'Идеяны бағалаудан операциялық іске қосуға және инвестициядан кейінгі мониторингке дейін жобаның толық циклін жабамыз. Барлық кезеңде бір серіктес.',
    'home.card2.title':    'Аймақтық сараптама',
    'home.card2.text':     'Қазақстанның іскерлік ортасын, реттеу жүйесін және жергілікті ерекшеліктерді тереңінен түсіну — елдің әр аймағында.',
    'home.card3.title':    'GR-сүйемелдеу',
    'home.card3.text':     'Мемлекеттік органдармен тиімді өзара іс-қимыл, жеңілдіктер, лицензиялар алуға және мемлекеттік бағдарламаларға қатысуға жәрдемдесу.',
    'home.card4.title':    'Инвестор мүдделерін қорғау',
    'home.card4.text':     'Инвестициядан кейінгі кезеңде сүйемелдеу: міндеттемелерді бақылау, реттеуші тәуекелдер, ағымдағы институционалдық мәселелер.',

    'services.label':    'Қызметтер',
    'services.subtitle': 'Инвестициялық сүйемелдеудің бес кезеңі',
    'services.s1.title': 'Жоба идеясы',
    'services.s1.sub':   'Капитал немесе ресурстарды салмас бұрын іске асырылу мүмкіндігін бағалаймыз.',
    'services.s1.li1':   'Жобаның іске асырылу мүмкіндігін экспресс-бағалау',
    'services.s1.li2':   'Тәуекелдер мен шектеулерді анықтау',
    'services.s1.li3':   'Мемлекеттік органдардың қолдауын зондтау',
    'services.s1.li4':   'Стратегиялық позициялау және нарықты талдау',
    'services.s2.title': 'Кіру құрылымы',
    'services.s2.sub':   'Қазақстанда бизнес іске қосудың құқықтық және операциялық негізі.',
    'services.s2.li1':   'Заңды тұлғаны тіркеу',
    'services.s2.li2':   'Нарыққа шығу стратегиясын әзірлеу',
    'services.s2.li3':   'Лицензиялар мен рұқсаттар алу',
    'services.s2.li4':   'Операциялық іске қосу',
    'services.s3.title': 'Локализация',
    'services.s3.sub':   'Оңтайлы аймақты, алаңды таңдау және инфрақұрылымға қол жеткізу.',
    'services.s3.li1':   'Аймақтық және алаңдық таңдау',
    'services.s3.li2':   'Техникалық шарттарды аудит',
    'services.s3.li3':   'Жер учаскесін алу',
    'services.s3.li4':   'Инженерлік инфрақұрылымға қосылу',
    'services.s4.title': 'Ынталандыру',
    'services.s4.sub':   'Мемлекеттік қолдау бағдарламаларына интеграция және жеңілдіктер алу.',
    'services.s4.li1':   'Инвестициялық келісімшарт жасасу (КТС, мүлік салығы, жер салығы бойынша жеңілдіктер)',
    'services.s4.li2':   'Жабдықтарды импорттауға кедендік жеңілдіктер',
    'services.s4.li3':   'Натуралдық гранттар: жер және инфрақұрылым',
    'services.s4.li4':   'Ұлттық даму бағдарламаларына қатысу',
    'services.s5.title': 'Пайдалану және мониторинг',
    'services.s5.sub':   'Операциялық кезеңде инвестицияларды қорғау және сүйемелдеу.',
    'services.s5.li1':   'Шарттық міндеттемелердің орындалуын бақылау',
    'services.s5.li2':   'Ағымдағы GR-консультациялау',
    'services.s5.li3':   'Реттеуші тәуекелдерді анықтау және азайту',
    'services.s5.li4':   'Мемлекеттік органдармен және жергілікті қауыммен өзара іс-қимыл',

    'team.label':   'Біздің команда',
    'team.m1.name': 'Айдаров Алмас',
    'team.m1.role': 'Қадағалау кеңесінің төрағасы',
    'team.m2.name': 'Сағатай Дәулет',
    'team.m2.role': 'Бас директор',
    'team.m3.name': 'Спандияр Нұрсұлтан',
    'team.m3.role': 'Бизнесті дамыту директоры',
    'team.m4.name': 'Сериков Диас',
    'team.m4.role': 'Мемлекетпен байланыс директоры',    
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
    'home.hero.desc':         '——专业投资运营商。我们陪伴项目从初步构想到成功运营——克服每个阶段的行政、监管和制度障碍。',
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
    'services.s1.sub':   '在您投入资本或资源之前评估可行性。',
    'services.s1.li1':   '项目可行性快速评估',
    'services.s1.li2':   '风险与限制识别',
    'services.s1.li3':   '政府支持探测',
    'services.s1.li4':   '战略定位与市场分析',
    'services.s2.title': '进入结构化',
    'services.s2.sub':   '在哈萨克斯坦启动业务的法律和运营基础。',
    'services.s2.li1':   '法人实体注册',
    'services.s2.li2':   '市场进入策略制定',
    'services.s2.li3':   '获取许可证和审批',
    'services.s2.li4':   '运营启动',
    'services.s3.title': '本土化',
    'services.s3.sub':   '选择最优区域、场地并获取基础设施接入。',
    'services.s3.li1':   '区域和场地选择',
    'services.s3.li2':   '技术条件审计',
    'services.s3.li3':   '土地获取',
    'services.s3.li4':   '工程基础设施接入',
    'services.s4.title': '激励措施',
    'services.s4.sub':   '融入国家支持项目并获取优惠政策。',
    'services.s4.li1':   '签订投资合同（企业所得税、财产税、土地税减免）',
    'services.s4.li2':   '设备进口关税减免',
    'services.s4.li3':   '实物补助：土地和基础设施',
    'services.s4.li4':   '参与国家发展项目',
    'services.s5.title': '运营与监测',
    'services.s5.sub':   '运营阶段的投资保护与陪伴。',
    'services.s5.li1':   '合同义务履行监督',
    'services.s5.li2':   '持续政府关系咨询',
    'services.s5.li3':   '监管风险识别与缓解',
    'services.s5.li4':   '与政府机构及社区互动',

    'team.label':   '我们的团队',
    'team.m1.name': 'Almas Aidarov',
    'team.m1.role': '监事会主席',
    'team.m2.name': 'Daulet Sagatay',
    'team.m2.role': '首席执行官',
    'team.m3.name': 'Nursultan Spandiyar',
    'team.m3.role': '业务发展总监',
    'team.m4.name': 'Dias Serikov',
    'team.m4.role': '政府关系总监',
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
