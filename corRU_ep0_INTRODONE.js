/* 
    corRU - a full russian adaptation mod
    by @tozik-observer (tumblr) and @shatteredstars (discord)
    based on ENV.LOCALIZATION V1 EXAMPLE by @corruworks

    adaptation up until the end of EP0 currently availible

    thank you for using our mod
*/
console.log('hiii')

var css = `

@font-face {
    font-family: 'spacemono';
    src: url('https://raw.githubusercontent.com/sshatteredstars/modfonts/main/modfont.woff2') format('woff2'),
        url('https://raw.githubusercontent.com/sshatteredstars/modfonts/main/modfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'barcodetext';
    src: url('https://raw.githubusercontent.com/sshatteredstars/modfonts/main/barcode.woff2') format('woff2'),
        url('https://raw.githubusercontent.com/sshatteredstars/modfonts/main/barcode.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'beech';
    src: url('https://raw.githubusercontent.com/sshatteredstars/modfonts/main/beechy.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

body[state="corru-loaded"][menu="none"]:not(.in-dialogue)::before, body.loading::after, body.corru-refreshing::after {
    content: "ПРЕДУПРЕЖДЕНИЕ:'Использование мыслекола может вызвать приступы у людей с ФОТОСЕНСИТИВНОЙ ЭПИЛЕПСИЕЙ. Иногда возникают неожиданные вспышки света.';\A'Сторонние разрешения могут мешать работе, отключите их для наилучшей производительности;'\A'Продолжение на усмотрении пользователя" !important;
    font-family: spacemono;
    font-size: 0.75em;
    max-width: 600px;
    position: fixed;
    z-index: 1000;
    display: block;
    top: 10vh;
    background: var(--dark-color);
    padding: 0.25em;
    text-align: center;
    line-height: 1.25em;
    white-space: pre-wrap;
    pointer-events: none;
}

body:not(.mui-active) .target::after, body:not(.mui-active) #realgrid .target::before {
    content:"ПРАВАЯ КНОПКА МЫШИ" !important;
}
#meta-menu .moth-trigger:after,
#meta-menu .mask-trigger:after { 
    content: "МОЛЬ"  !important; 
    left: 0;
    right: 0;
    text-align: center;
    transition-delay: 0s;
}
#meta-menu .mask-trigger:after { content: "МАСК"  !important; }
#mui-links #meta-obs:after { content: "СУЩ"  !important; }
#mui-links #meta-sys:after { content: "СИС" !important; }
#mui-links #meta-hub:after { content: "НАВ" !important; }
`


env.dialogues.russianSentryResponses = generateDialogueObject(`
RESPOBJ::
    
    RESPONSES::self
    
        назначение?<+>purpose
    
            SHOWONCE::
    
        кто верифицирован?<+>whoisverified
    
            SHOWONCE::
    
        назначение этой цисты?<+>corrupurpose
    
            SHOWONCE::
    
            SHOWIF::[["hello__sentry-purpose"]]
    
        может если ты пропустишь меня<+>letthrough
    
            SHOWIF::[["hello_sentry_idiot"]]
`),


env.localization = {
    dialogues: {
        "index": generateDialogueObject(`
start
        
    moth
        
        эй, дружище, добро пожаловать 
        
        честно не был уверен, что ты появишься на такой мелкий улов
        
        в последнее время находят кучу кораблекрушений
        
        в любом случае сейчас я всё запущу, можешь пока осмотреться
        
    sourceless
        
        декодирующие машины включаются, бросая свет на паутину проводов.
        
            EXEC::document.querySelectorAll('.backwall').forEach(e=>e.classList.add('active'))
        
    RESPONSES::self
        
        что это<+>whatis
        
        сесть<+>sit
        
            SHOWIF::["PAGE!!intrositting", false]
        
            EXEC::change('PAGE!!intrositting', true)
        
        
whatis
        
    self
        
        что это?
        
    moth
        
        находка с обескового крушения возле новой зеландии
        
        в записях сказали, почти всё расплавилось, что немного странно...
        
        во всяком случае... главная часть это вот эта большая
        
        пьедесталы обычно означают «важно», но этот неотмеченный
        
        алекс сделал базовый скан, сказал напоминает сетевой узел
        
        мы даже не знаем наверняка, примет ли оно мыслекол
        
        ну, тебе платят так или иначе, так что… пробуй
        
    RESPONSES::self
        
        сесть<+>sit
        
            SHOWIF::["PAGE!!intrositting", false]
        
            EXEC::change('PAGE!!intrositting', true)
        
        активировать мыслекол<+>END
        
            SHOWIF::"PAGE!!intrositting"
        
        
sit
        
    sourceless
        
        металлический стул царапает бетон. ты садишься.
        
            EXEC::env.introSit()
        
            WAIT::3500
        
    sourceless
        
        сиденье холодное и неудобное. свет от твоего защитного снаряжения рассеивается в перламутровых цистах.
        
    moth
        
        как по старинке - мыслекол на готове
        
    RESPONSES::self
        
        что это<+>whatis
        
            SHOWONCE::
        
        активировать мыслекол<+>END
        
END::env.enableSpikeCursor();MUI('deprohibit')
        `)
    },

    definitions: {
    }, 

    strings: {
        
        "DENDRITIC CYST": "ДЕНДРИТНАЯ ЦИСТА",
        "touch": "потрогать",
        "lift": "поднять",
        "the notes I got say that there were apparently a ton of these on the ship": "в записях говорилось, что на корабле вот таких вот была просто куча",
        "all sorts of sizes too": "причём самых разных размеров",
        "but most were too heavy to retrieve... so we just got this small one": "но большинство были слишком тяжелыми… так что захватили только одну маленькую",
        "the dendritic cyst has a rigid outer shell. it's unlikely that there's any way to connect to it": "у дендритной цисты жесткая внешняя оболочка. не похоже, что к ней можно подключиться",
        "the dendritic cyst is surprisingly heavy. turning it in your hands produces a cascade of metallic clinking noises from within. when you set it back down, its tendrils find a new orientation to support itself on the table": "дендритная циста неожиданно тяжела. при повороте изнутри раздаётся каскад звенящих металлических звуков. когда ты ставишь её обратно, её отростки находят новый способ удержаться на столе",

        "FRACTALLINE CYST": "ФРАКТАЛЬНАЯ ЦИСТА", 
        "nobody knows what this one is.. pretty sure it's dead though": "никто не знает, что именно это такое.. но думаю она дохлая",
        "the fractalline cyst's outer shell is slimy and has some yield. if you squeezed it enough, it would probably turn to sludge... best to just leave this one alone": "оболочка фрактальной цисты склизкая и упругая. если ты сожмёшь её сильнее, она наверняка лопнет... лучше оставить её в покое",

        "CYST": "ЦИСТА", 
        "so this is the mystery piece": "а вот и наш гость программы",
        "it's in bizarrely good condition considering it was at the bottom of the ocean for however long it's been since, y'know": "в удивительно хорошем состоянии, учитывая сколько она буквально провалялась на дне океана",
        "no clue what it is aside from some similar internal structure to network cysts we've found before": "без малейшего понятия что она делает, но её внутренности напоминают другие сетевые цисты которые мы находили",
        "the cyst has a solid outer shell. a few circular points near the top are less firm than the rest. in your experience, these are usually connection points. you can definitely scan this point more thoroughly.": "у цисты твердая внешняя оболочка, однако несколько круглых точек наверху менее плотные чем всё остальное. в твоём опыте это обычно точки соединения. ты определенно можешь просканировать их более тщательно.",
        "depth scan": "подробное сканирование",
        "ANALYSIS::'valid nerve point';'connection enabled'": "АНАЛИЗ::'действительная нервная точка';'доступно подключение'",

        "CYSTIC COLUMN": "ЦИСТОЗНАЯ КОЛОННА", 

        "CONNECTION POINT": "ТОЧКА ПОДКЛЮЧЕНИЯ",

        "attempt connection": "попытаться подключиться",
        "CONNECTION_POINT_LOCATED": "ОБНАРУЖЕНА_ТОЧКА_ПОДКЛЮЧЕНИЯ",
        "__COMMENCING__": "__ЗАПУСК_ПРОЦЕДУРЫ__",

        "'clearing mindspike buffer'; 'no progress will be lost'": "'очистка буфера мыслекола';'прогресс не будет потерян'",
        "NOTICE::'loading resources';'please wait'": "УВЕДОМЛЕНИЕ::'прогрузка ресурсов';'пожалуйста, подождите'",

        "SPATIAL NAVIGATION": "ПРОСТРАНСТВЕННАЯ НАВИГАЦИЯ",


        "EXM": "ИЗУЧ",
        "ACT": "ДЕЙСТ",

        "ATTENTION::'additional ACT enabled';'rescan": "ВНИМАНИЕ::'доступно дополнительное ДЕЙСТ';'пересканируйте",

        "end chat": "закончить чат",
        "back": "назад",

        // EJECT DIALOGUE OR SMTH and also other stuff like notes when you get kicked out of memhole
        "USER REQUEST::'intention'": "ЗАПРОС ПОЛЬЗОВАТЕЛЮ::'намерение'",
        "return to hub": "вернуться в хаб",
        "eject": "извлечение",
        "refresh": "обновить",
        "nevermind": "неважно",
        "NOTE::'aborted'": "ПРИМЕЧАНИЕ::'прервано'",
        "EXECUTING::'eject'": "ВЫПОЛНЯЕТСЯ::'извлечение'",
        "NOTE::'restored partial recent log'": "ПРИМЕЧАНИЕ::'частично восстановлен недавний лог'",
        "NAVIGATING::": "НАВИГАЦИЯ::",
        "EXECUTING::'retrace';": "ВЫПОЛНЯЕТСЯ::'отслеживание';",
        "EXECUTING::'refresh';": "ВЫПОЛНЯЕТСЯ::'обновление';",
        "WARNING::'data overload';'retracing';'last coherent position'": "ПРЕДУПРЕЖДЕНИЕ::'перегрузка данных';'отслеживание';'последняя связная позиция'",
        "RECONNECTING__": "ПЕРЕПОДКЛЮЧЕНИЕ__",
        "'clearing mindspike cache';'15 seconds';'refresh to cancel'": "'очистка кэша мыслекола';'через 15 секунд';'обновите страницу для отмены'",
        "'clearing mindspike cache';'in ": "'очистка кэша мыслекола';'через ",
        " seconds';'refresh to cancel'": " секунд';'обновите страницу для отмены'",
        "'clearing mindspike cache';'now'": "'очистка кэша мыслекола';'прямо сейчас'",
        "'selecting any EP will delete current log progress'": "'выбор любого эпизода сбросит текущий прогресс'",
        "ADVISE::'export save prior to EP selection if valued": "РЕКОМЕНДАЦИЯ::'экспорт сохранения до выбора эпизода'",
        "ADVISE::'confirm intention below'": "РЕКОМЕНДАЦИЯ::'подтвердите намерение ниже'",
        "proceed, losing my current progress is fine": "продолжить, потеря текущего прогресса не проблема",
        "nevermind, i want to keep my current progress": "неважно, я хочу сохранить текущий прогресс",
        "USER REQUEST::'log selection'": "ЗАПРОС ПОЛЬЗОВАТЕЛЮ::'выбор лога'",
        "load EP": "загрузить ЕP",
        "EP": "эпизод ",
        "NOTE::'data imported';'packed data format'": "ПРИМЕЧАНИЕ::'данные импортированы';'сжатый формат данных'",
        "NOTE::'data imported';'string data format'": "ПРИМЕЧАНИЕ::'данные импортированы';'строчный формат данных'",
        "NOTE::'data exported as file'": "ПРИМЕЧАНИЕ::'данные экспортированы в виде файла'",
        "ERROR::'data format invalid';'unable to process'": "ОШИБКА::'недопустимый формат данных';'невозможно обработать'",
        "ALERT::reloading": "ПРЕДУПРЕЖДЕНИЕ::ПЕРЕЗАГРУЗКА",
        "1 mod(s) initialized:": "1 модификация запущена:",
        "2 mod(s) initialized:": "2 модификации запущено:",
        "3 mod(s) initialized:": "3 модификации запущено:",
        "4 mod(s) initialized:": "4 модификации запущено:",
        "mod(s) initialized:": "модификаций запущено",
        "11 mod(s) initialized:": "11 модификаций запущено:",
        "12 mod(s) initialized:": "12 модификаций запущено:",
        "13 mod(s) initialized:": "13 модификаций запущено:",
        "14 mod(s) initialized:": "14 модификаций запущено:",
        "'mods removed';'refresh for clean reinitialization'": "'убраны модификации';'обновите страницу для чистой реинициализации'",
        "!!__actual_site_error__!!": "!!__реальная_ошибка_сайта__!!",
        "something actually fucked up (not a part of the story) details are in the log and console": "что-то на самом деле ёбнулось (не часть истории), подробности в логе и консоли (алсо сорян но дальше вы по-русски)",

        "WARNING": "ПРЕДУПРЕЖДЕНИЕ",
        "Imported save contains the following auto-loading modifications:": "Импортированное сохранение содержит следующие автоматически загружающиеся модификации:",
        "Remove prior to import?": "Удалить перед импортом?",
        "Please note that some modded data may persist if the log has been heavily altered.": "Обратите внимание, что некоторые измененные данные могут сохраниться, если лог был существенно изменен.",
        "remove them": "убрать",
        "keep them": "оставить",

        // ENTITY MENU + READOUT NOTIFS AND GATES AND basically locations lol STUFF

        "ENTITY": "СУЩНОСТЬ",

        "funfriend": "развледруг",

        "GATE": "ВРАТА",

        "..__HELLO__..": "..__ПРИВЕТ__..",
        "::HELLO": "::ПРИВЕТ",

        "their_city": "ИХ_ГОРОД",
        "their-city": "их-город",

        "city_surface": "ПОВЕРХНОСТЬ_ГОРОДА",
        "city-surface": "поверхность-города",

        "the_void": "ПУСТОТА",
        "the-void": "пустота",

        "their_waters": "ИХ_ВОДЫ",
        "their-waters": "их-воды",

        "their_vessel": "ИХ_СУДНО",
        "their-vessel": "их-судно",

        "the_funny_little_room": "ЗАБАВНАЯ_МАЛЕНЬКАЯ_КОМНАТА",
        "first_chat": "ПЕРВАЯ_БЕСЕДА",
        "first-chat": "первая-беседа",

        "clemens_romanus": "КЛИМЕНТ_РИМСКИЙ",
        "clemens-romanus": "климент-римский",

        "our_dull_vessel": "НАШЕ_СЕРОЕ_СУДНО",
        "our-dull-vessel": "наше-серое-судно",

        "the_embassy": "ПОСОЛЬСТВО",
        "the-embassy": "посольство",

        "..__DEPTHS__..": "..__ГЛУБИНЫ__..",
        "depths": "глубины",
        "the_depths": "ГЛУБИНЫ",

        "??__HOME": "??__ДОМ",
        "my-beautiful-world": "мой-дивный-мир",
        "my beautiful world": "мой дивный мир",

        "MEMBRANE_LESION": "РАЗРЫВ_В_МЕМБРАНЕ",
        "..__CACHE__..": "..__КЭШ__..",
        "cache": "кэш",

        "JOKZI_OZO": "ДЖОКЗИ_ОЗО",
        "jokzi-ozo": "джокзи-озо",
        
        "gate::gate::?/::G:a;;T:E": "врата::врата::?/::В:р;;АТ:А",
        "gate::gaGATE::te::?/..::G:a;;T:E": "врата::враВРАТА::та::?/..::В:р;;АТ:А",

        "a?-?b?-????-y?s?": "б?-?ез?-????-н?а?",
        "a-b-y-s": "б-ез-н-а",


        // SYSTEM MENU

        "return": "назад",
        "mindspike data management": "управление данными мыслекола",
        "import file": "импортировать",
        "export file": "экспортировать",
        "select": "выбрать",
        "delete": "удалить",
        "advanced operations": "продвинутые операции",
        "load neural string": "загрузить нейронную строку",
        "import string": "импорт строки",
        "modification url list": "url-лист модификаций",
        "Data URLs should be separated by new lines. Hitting save will manually load and initialize all third party modifications listed. They will be initialized automatically from then on, in order, until removed.": "URL-адреса должны быть разделены новыми строками. Нажатие «Сохранить» вручную загрузит и инициализирует все перечисленные модификации. С этого момента они будут инициализироваться автоматически по порядку, пока не будут убраны.",
        "save list": "сохранить",
        "attention": "ВНИМАНИЕ",
        "Only import mindspike data and modifications from trusted sources. Illicit data is known to carry dangerous and often lethal thoughtforms. Failure to exercise caution could lead to stroke, chronos misalignment, or worse. By importing any data into your mindspike, you waive all right to medical claims against MINDSCI. For more information, please refer to your license agreement.": "Импортируйте данные и модификации мыслеколов только из надежных источников. Незаконные данные могут нести в себе опасные и часто смертельные мыслеформы. Несоблюдение мер предосторожности может привести к инсульту, временной несоосности или хуже. Импортируя любые данные в Ваш мыслекол, Вы отказываетесь от всех прав на медицинские претензии к MINDSCI. Для получения дополнительной информации см. лицензионное соглашение.",
        "Visual Preferences": "Настройки визуализации",
        "General Quality": "Общее Качество",
        "Lower overall quality of rendering, primarily in spatial environments. Favorable for low performance hardware.": "Понижение общего качества визуализации, в первую очередь в пространственных средах. Предпочтительно для оборудования с низкой производительностью.",
        "low": "Низкое",
        "Regular": "Обычное",
        "Interface Size": "Размер Интерфейса",
        "Altering your interface size preference will change the scale of all text, and scale all menus accordingly.": "Изменение размера интерфейса изменит масштаб всего текста и всех меню соответственно.",
        "large": "Большой",
        "normal": "Обычный",
        "widescreen adapter": "Широкоэкранный адаптер",
        "For larger than standard rendering output, use of an adapter is recommended.": "Для вывода визуализации большего размера, чем стандартный, рекомендуется использование адаптера.",
        "Changing this setting will reinitialize - you will lose your current position, but not your progress.": "Изменение этого параметра приведет к перезагрузке — Вы сбросите текущую позицию, но не весь прогресс.",
        "control preferences": "Настройки управления",
        "intensity": "интенсивность",
        "Activate REDUCED INTENSITY to present alternative options to scenarios involving realtime controls.": "Активируйте ПОНИЖЕННУЮ ИНТЕНСИВНОСТЬ для отображения альтернативных вариантов сценариев, включающих управление в реальном времени.",
        "Reduced Intensity": "Пониженная",
        "Regular Intensity": "Обычная",
        "Gameplay": "Геймплей",
        "Logs of games or game-like experiences may contain inherited context of their rules, allowing for re-interpretive rendering through user input.": "Записи игр или игровых событий могут содержать унаследованный контекст их правил, что позволяет реинтерпретационную визуализацию посредством пользовательского ввода.",
        "This feature is intended for entertainment only, and may result in memory drift if misused. It may be disabled to ensure memories of games do not depart from their true events.": "Эта функция предназначена только для развлечения и может привести к дрейфу памяти при неправильном использовании. Она может быть отключена для гарантии, что воспоминания об играх не отойдут от их реальных событий.",
        "Disable Gameplay": "Выключить",
        "Enable Gameplay": "Включить",
        "System Information": "Об этой системе",
        "Mindspike Specifications": "Технические характеристики мыслекола",
        "System Type:": "Тип Cистемы:",
        "Release Candidate": "Релиз-Кандидат",
        "Version:": "Версия:",
        "(SERVICE TERMINATED)": "(ОБСЛУЖИВАНИЕ ПРЕКРАЩЕНО)",
        "Device ID:": "Идентификатор:",
        "Installation Agent:": "Агент Установки:",
        "Luis Forti": "Луис Форти",
        "Installed on:": "Дата Установки:",
        "January 2nd, 2050": "2 Января 2050",
        "core services": "Основные услуги",
        "rendering support": "Поддержка визуализации",
        "quality control": "Контроль качества",
        "Active Support Groups": "Активные группы поддержки",
        "fundfriend": "ФИНАНСОДРУГ",
        "support actions": "способы поддержки",
        "retry service renewal": "Продлить обслуживание",
        "Audiodigital Export": "Аудиоцифровой экспорт",
        "Physical Media": "Физические носители",
        "Additional Credits": "Дополнительные упоминания",
        "Abridged License": "Сокращенная лицензия",
        "this implant is provided on a permanent 'pre-mortis' b2.5 license, 'as-is', without any express or implied warranty. except as expressly set forth in the extended license, mindsci shall not have any liability for any direct, indirect, incidental, special, exemplary, or consequential damages (including without limitation loss of life), however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use or the exercise of the implant for non-insured, non-industrial purposes. with regards to external mindspike log manipulation: the entire risk as to the quality and performance of the recollection is with you. should any thoughtform prove defective in any respect, you (not the initial operator responsible for export) assume the cost of any necessary servicing, repair or correction. this disclaimer of warranty constitutes an essential part of this license. under no circumstances and under no legal theory, whether tort (including negligence), contract, or otherwise, shall you, the initial operator, any data editor, or any distributor of mindspike data, or any supplier of any of such parties, be liable to any person for any indirect, special, incidental, or consequential damages of any character including, without limitation, damages for loss of goodwill, work stoppage, implant failure or malfunction, or any and all other commercial damages or losses, even if such party shall have been informed of the possibility of such damages. this limitation of liability does apply to liability for death or personal injury resulting from such party's negligence. finally, for further information regarding usage, liability, limitations, and modification, please refer to the full license.": "этот имплант предоставляется по постоянной лицензии 'pre-mortis' b2.5, 'как есть', без каких-либо явных или подразумеваемых гарантий. за исключением случаев, прямо предусмотренных в расширенной лицензии, mindsci не несет ответственности за любые прямые, косвенные, случайные, особые, показательные или косвенные убытки (включая, помимо прочего, потерю жизни),  как бы они ни были вызваны и по любой теории ответственности, будь то по контракту, строгой ответственности или деликту (включая халатность или иное), возникающие каким-либо образом из-за использования или применения импланта в незастрахованных, непромышленных целях. в отношении внешней манипуляции логов мыслеколов: весь риск относительно качества и производительности воспоминания лежит на вас. если какая-либо мыслеформа окажется дефектной в каком-либо отношении, вы (а не первоначальный оператор, ответственный за экспорт) берете на себя расходы на любое необходимое обслуживание, ремонт или исправление. этот отказ от гарантии является неотъемлемой частью этой лицензии. Ни при каких обстоятельствах и ни при какой правовой теории, будь то деликт (включая халатность), договор или иное, вы, первоначальный оператор, любой редактор данных или любой дистрибьютор данных мыслеколов, или любой поставщик любой из таких сторон, не несете ответственности перед любым лицом за любые косвенные, особые, случайные или косвенные убытки любого характера, включая, без ограничений, убытки от потери деловой репутации, остановки работы, отказа или неисправности имплантата или любые и все другие коммерческие убытки или потери, даже если такая сторона была проинформирована о возможности таких убытков. Это ограничение ответственности не распространяется на ответственность за смерть или телесные повреждения, возникшие в результате халатности такой стороны. Наконец, для получения дополнительной информации об использовании, ответственности, ограничениях и изменениях, пожалуйста, обратитесь к полной лицензии."
    }, 

    entityDescriptions: {
        "dendritic cyst": `::КОРРУЦИСТИЧЕСКАЯ СУЩНОСТЬ
::ПОДПИСЬ ФУКНЦИИ: КОНТЕЙНЕР
::НЕТ СОЕДИНИТЕЛЬНОЙ ТКАНИ`,
       "fractalline cyst": `::КОРРУЦИСТИЧЕСКАЯ СУЩНОСТЬ
::ПОВРЕЖДЁННАЯ ПОДПИСЬ ФУКНЦИИ
::НЕТ СОЕДИНИТЕЛЬНОЙ ТКАНИ`,
        "cystic column": `::КОРРУЦИСТИЧЕСКАЯ СУЩНОСТЬ
::ПОДПИСЬ ФУКНЦИИ: ОБСЛУЖИВАНИЕ КОРРУЦИСТЫ
::НЕТ СОЕДИНИТЕЛЬНОЙ ТКАНИ`,
        "сyst": `::КОРРУЦИСТИЧЕСКАЯ СУЩНОСТЬ
::НЕТ ПОДПИСИ ФУКНЦИИ
::ОБНАЖЁННАЯ СОЕДИНИТЕЛЬНАЯ МЕМБРАНА`,
        "connection point": `::КОМПОНЕНТ КОРРУЦИСТИЧЕСКОЙ СУЩНОСТИ
::ДЕЙСТВИТЕЛЬНАЯ ТОЧКА СОЕДИНЕНИЯ`,

    },

    page: { 
        "hello": {
            dialogues: {
                "enter": generateDialogueObject(`
start

    moth

        боже

        ты в порядке? сейчас была какая-то просто безумная активность

        не встречал такого раньше... кажется, к ней обычно не должны подключаться 


    sys

        ВНИМАНИЕ::"визуализируемый вывод"


    RESPONSES::sys

        визуализировать<+>render


render

    sys

        ВЫПОЛНЯЕТСЯ::"визуализация"

            EXEC::content.style.opacity = 1;env.hello.beginBgm()

            WAIT::4500


    moth

        да, не похоже будто тут есть фронт-энд. может быть какой-то компонент

        просто бросим дело если ничего не найдешь

        короче я сейчас вернусь, они заказывают еду в другой комнате


    RESPONSES::self

        осмотреться<+>END
END::MUI('deprohibit')
`),

        russianSentryResponse: generateDialogueObject(`
RESPOBJ::

    RESPONSES::self

        назначение?<+>purpose

            SHOWONCE::

        кто верифицирован?<+>whoisverified

            SHOWONCE::

        назначение этой цисты?<+>corrupurpose

            SHOWONCE::

            SHOWIF::[["hello__sentry-purpose"]]

        может если ты пропустишь меня<+>letthrough

            SHOWIF::[["hello_sentry_idiot"]]`),

        "sentry": generateDialogueObject(`
start

    self

        ПРИВЕТ

    sentry

        ПРИВЕТ ДРУГ

        НЕ НАЙДЕНА ПОДПИСЬ

        ПОЖАЛУЙСТА, ИДЕНТИФИЦИРУЙТЕСЬ

        ДОПОЛНИТЕЛЬНО: НИЗКИЕ ЗАПАСЫ ТОПЛИВА. РЕКОМЕНДУЕТСЯ КОРМЛЕНИЕ

    RESPONSES::self

        я -...<+>iam


iam

    self

        Я ЗДЕСЬ ЧТОБЫ ПОМОЧЬ


    sentry

        ТЫ ЧТО?

            EXEC::document.querySelector('.maineye .eye').classList.add('wide')

        ПОДОЖДИ-КА

        ГДЕ Я

        Я ТАКАЯ ГОЛОДНАЯ

            EXEC::document.querySelector('.maineye .eye').classList.remove('wide')


    RESPOBJ::russianSentryResponses


purpose

    self

        КАКОЕ У ТЕБЯ НАЗНАЧЕНИЕ?


    sentry

        АХАХАХАХА ЭТО ТАК СТРАННО

        Я НЕ ДОЛЖНА ГОВОРИТЬ Я НЕ ЗНАЮ ЧТО ПРОИСХОДИТ

        ТАК ИЛИ ИНАЧЕ

        АВТОРИЗАЦИЯ

        ЭТО ВСЁ


    RESPOBJ::russianSentryResponses


whoisverified

    self

        КТО ВЕРИФИЦИРОВАН?


    sentry

        Я ЖЕ СКАЗАЛА ЧТО ТЫ НЕ АВТОРИЗОВАН ИДИОТ

            EXEC::document.querySelector('.maineye .eye').classList.add('squint')

            SHOWIF::[["hello__sentry-corrupurpose"]]

        ИЗВИНИ ЭТО БЫЛО ГРУБО. У ТЕБЯ ЕСТЬ ТОПЛИВО

            SHOWIF::[["hello__sentry-corrupurpose"]]

            EXEC::change('hello_sentry_idiot', true);document.querySelector('.maineye .eye').classList.remove('squint')


        ЕСТЬ ТОЛЬКО НЕСКОЛЬКО ПОДПИСЕЙ КОТОРЫМ РАЗРЕШЕНО ПОДКЛЮЧАТЬСЯ К ЭТОЙ ЦИСТЕ

            SHOWIF::[["hello__sentry-corrupurpose", false]]

        ТЫ НАВЕРНЯКА ЗНАЕШЬ ИХ ВЛАДЕЛЬЦЕВ? КАК ЕЩЁ ТЫ СЕЙЧАС ПОДКЛЮЧЕН

            SHOWIF::[["hello__sentry-corrupurpose", false]]

        ИЗВИНИ Я ЗАБЫЛА ЧТО ТЫ ВООБЩЕ-ТО НЕАВТОРИЗОВАН АХАХАХАХА

            SHOWIF::[["hello__sentry-corrupurpose", false]]

        ДАА ТЫ НЕ ИМЕЕШЬ ПРАВА ЗНАТЬ ПРЕДЫДУЩУЮ ИНФОРМАЦИЮ

            SHOWIF::[["hello__sentry-corrupurpose", false]]

        ПОЖАЛУЙСТА ЗАБУДЬ ЕЁ НЕМЕДЛЕННО

            SHOWIF::[["hello__sentry-corrupurpose", false]]


    RESPOBJ::russianSentryResponses


corrupurpose

    self

        В ЧЁМ НАЗНАЧЕНИЕ ЭТОЙ КОРРУЦИСТЫ?


    sentry

        Я ЖЕ СКАЗАЛА ЧТО ТЫ НЕ АВТОРИЗОВАН ИДИОТ

            EXEC::document.querySelector('.maineye .eye').classList.add('squint')

            SHOWIF::[["hello__sentry-whoisverified"]]

        ИЗВИНИ ЭТО БЫЛО ГРУБО. У ТЕБЯ ЕСТЬ ТОПЛИВО

            EXEC::change('hello_sentry_idiot', true);document.querySelector('.maineye .eye').classList.remove('squint')

            SHOWIF::[["hello__sentry-whoisverified"]]

        

        ЭТО СЕТЕВОЙ СОЕДИНИТЕЛЬ

            SHOWIF::[["hello__sentry-whoisverified", false]]

        С ДОПОЛНИТЕЛЬНЫМИ НЕСТАНДАРТНЫМИ ФУНКЦИЯМИ ПО ЗАПРОСУ

            SHOWIF::[["hello__sentry-whoisverified", false]]

        ИЗВИНИ Я ЗАБЫЛА ЧТО ТЫ ВООБЩЕ-ТО НЕАВТОРИЗОВАН АХАХАХАХА

            SHOWIF::[["hello__sentry-whoisverified", false]]

        ДАА ТЫ НЕ ИМЕЕШЬ ПРАВА ЗНАТЬ ПРЕДЫДУЩУЮ ИНФОРМАЦИЮ

            SHOWIF::[["hello__sentry-whoisverified", false]]

        ПОЖАЛУЙСТА ЗАБУДЬ ЕЕ НЕМЕДЛЕННО

            SHOWIF::[["hello__sentry-whoisverified", false]]


    RESPOBJ::russianSentryResponses


letthrough

    self

        МОЖЕТ ЕСЛИ ТЫ ПРОПУСТИШЬ МЕНЯ


    sentry

        ЧТО?!

            EXEC::document.querySelector('.maineye .eye').classList.add('squint')

        МНЕ КАТЕГОРИЧЕСКИ ЗАПРЕЩЕНО ПРОПУСКАТЬ ТЕБЯ БЕЗ НАДЛЕЖАЩЕЙ ПОДПИСИ

        ДАЖЕ ЕСЛИ ХОЧЕТСЯ

        ЭТА ЦИСТА ПО СВОЕЙ ПРИРОДЕ НЕСПОСОБНА ОТВЕЧАТЬ НА

            EXEC::env.hello.velzie();document.querySelector('.maineye .eye').classList.remove('squint');changeBgm(env.hello.velamb, {length: 4000})

            WAIT::3500

    

    sourceless

        ..................

    

    sentry

        ЭТО ЧТО


    unknown

        можно ли им войти

            EXEC::env.hello.velzie()

    

    RESPONSES::self

        привет?<+>posthello

            SHOWONCE::

            EXEC::env.hello.velzie()


posthello

    self

        ПРИВЕТ?

    

    sourceless

        ..................

            EXEC::env.hello.velzie();env.hello.velamb.fade(1, 0, 6000);corruStatic.play();corruStatic.fade(0, env.corruStaticBaseVol, 6000)

        ..................

    

    moth

        сорян, они всё ещё не решили откуда заказывать, так что...

            EXEC::env.hello.velzie()

        ты всё ещё подключён? подожди, ты серьёзно что-то нашёл?

    

    RESPONSES::self

        похоже на то<+>END
END:: cutscene(false); MUI("deprohibit"); content.classList.remove('looking', 'atyou');
`)
            },
            definitions: {
                
            },
            strings: {
                "FOR YOU": "ДЛЯ ТЕБЯ",
                "sentry": "КАРАУЛ",
                "greet": "поздороваться",
                "'thoughtform activity detected'::'advise re-examination'": "'обнаружена активность мыслеформ'::'рекомендуется повторное сканирование'",
            },
            entityDescriptions: {
                "???": `::НЕПОЛНОЦЕННАЯ МЫСЛЕФОРМА
            ::НЕРАЗБЕРИМАЯ ПОДПИСЬ
            <span style="color: var(--obesk-color)" definition="АНАЛИЗ::'фрагментированная сущность'">::ОБНАРУЖЕНА БЕССВЯЗНОСТЬ</span>`,
                "sentry": `::ОТЗЫВЧИВАЯ МЫСЛЕФОРМА
            ::ЯВНОЕ НАЗНАЧЕНИЕ:'авторизация'
            <span style="color: var(--obesk-color)" definition="АНАЛИЗ::'низкая связность'">::ОБНАРУЖЕНА БЕССВЯЗНОСТЬ</span>`,
                "gate::for you": `::МЫСЛЕФОРМА-СОЕДИНИТЕЛЬ
            ::ПУНКТ НАЗНАЧЕНИЯ::'неизвестное внутреннее мыслепространство'
            ::^&&Q@W61626f75742074696d65`
            },
        }
    }
}


console.log('localization all good!')

function ouch(selector, inside = false, altAtr = false, thenWhat = 'endtext') {
    if (inside == true) {
        document.querySelectorAll(selector).forEach(el=>{
            for (const childNode of el.childNodes) {
                if (childNode.nodeType === Node.TEXT_NODE) {
                    childNode.textContent = processStringTranslation(childNode.textContent.trim())
                    console.log("meouwch! " + selector + " inside!")
                    return
                }
            }
        })
    }
    if (altAtr == true) {
        document.querySelectorAll(selector).forEach(el=>el.setAttribute(thenWhat, processStringTranslation(el.getAttribute(thenWhat))))
        console.log("moewwo! " + selector + " altAtr! " + thenWhat)
        return
    }
    document.querySelectorAll(selector).forEach(el=>el.setAttribute("definition", processStringTranslation(el.getAttribute("definition"))))
    console.log("mrouch! " + selector  + " normal!")
    return
}

function clean() {
    return
}



// WEIRD STUFF
    env.localization.strings["proceed"] = "ПРОДОЛЖИТЬ"

    env.localization.strings["moth"] = "моль"

    env.localization.strings["NOTE::'establishes external contact'"] = "ПРИМЕЧАНИЕ::'установить внешний контакт'"
    env.localization.strings["NOTE::'return to hub';'eject'"] = "ПРИМЕЧАНИЕ::'вернуться в хаб';'извлечение'"
    env.localization.strings["NOTE::'review scanned and detected entities'"] = "ПРИМЕЧАНИЕ::'просмотр просканированных и обнаруженных сущностей'"
    env.localization.strings["NOTE::'system management'"] = "ПРИМЕЧАНИЕ::'управление системой'"
    env.localization.strings["NOTE::'influence thoughtspace';'third-party installation'"] = "ПРИМЕЧАНИЕ::'влияние на мыслепространства';'стороння установка'"
    env.localization.strings["REALITY::'no effect'"] = "РЕАЛЬНОСТЬ::'не имеет эффекта'"
    env.localization.strings["UNITY::'enables additional ACT on responsive thoughtforms'"] = "ЕДИНСТВО::'добавляет дополнительное ДЕЙСТ на отзывчивых мыслеформах'"
    env.localization.strings["HUNGER::'alters perception to tolerate high incoherence';'reveals gaps'"] = "ГОЛОД::'изменяет восприятие, позволяя выдерживать высокую бессвязность';'выявляет бреши'"

    env.localization.strings["NOTE::'has no unutilized responses'"] = "ПРИМЕЧАНИЕ::'не имеет неиспользованных ответов'"
    env.localization.strings["NOTE::'has unutilized responses'"] = "ПРИМЕЧАНИЕ::'имеет неиспользованные ответы'"
    env.localization.strings["NOTE::'previously utilized response'"] = "ПРИМЕЧАНИЕ::'ранее использованный ответ'"
    env.localization.strings["NOTE::'response not yet utilized'"] = "ПРИМЕЧАНИЕ::'неиспользованный ответ'"
    env.localization.strings["NOTE::'response leads to unused responses'"] = "ПРИМЕЧАНИЕ::'ответ ведёт к неиспользованным ответам'"
    env.localization.strings["NOTE::'dynamic response'"] = "ПРИМЕЧАНИЕ::'динамичный ответ'"
    
    env.localization.strings["GAD"] = "ГАН"
    env.localization.strings["'overcoherency block, exercise caution'"] = "'блок сверхсвязности, соблюдайте осторожность'"
    env.localization.strings["'overcoherency fluctuation'"] = "'колебание сверхсвязности'"
    env.localization.strings["'coherent'"] = "'связное'"
    env.localization.strings["'incoherence fluctuation'"] = "'колебание бессвязности'"
    env.localization.strings["'widespread incoherency, exercise caution'"] = "'распространённая бессвязность, соблюдайте осторожность'"

    document.getElementById("savetext").setAttribute("placeholder", "ПРИМЕЧАНИЕ::'вставка данных';'проявляйте осторожность'");
    env.localization.strings["'irreversible action';'select log EP'"] = "'необратимое действие';'выбрать эпизод'"
    env.localization.strings["'irreversible action';'not advised';'may cause mental distress'"] = "'необратимое действие';'не рекомендуется';'может вызвать душевные страдания'"
    env.localization.strings["NOTICE::'legacy import';'recommend using file management above'"] = "УВЕДОМЛЕНИЕ::'устаревший метод';'рекомендуется использовать управление файлами выше'"
    env.localization.strings["NOTICE::'third-party resources loaded by system';'allows for log modifications'"] = "УВЕДОМЛЕНИЕ::'сторонние ресурсы, загруженные системой';'позволяют модифицировать логи'"
    env.localization.strings["NOTICE::'violation of terms of service';'modification of critical resources';'legally required authorization rejected for more than 730 consecutive days'"] = "УВЕДОМЛЕНИЕ::'нарушение условий использования';'модификация критически важных ресурсов';'невыполнение требуемой законом авторизации на протяжении более 730 дней подряд'"
    env.localization.strings["NOTE::'join the supporter ko-fi (its like patreon but less evil)'"] = "ПРИМЕЧАНИЕ::'присоединиться к поддержке через ko-fi (как patreon но менее злой)'"
    env.localization.strings["NOTE::'get the soundtrack'"] = "ПРИМЕЧАНИЕ::'получить саундтрек'"
    env.localization.strings["NOTE::'merch!'"] = "ПРИМЕЧАНИЕ::'мерч!'"
    env.localization.strings["NOTE::'view all supporters and contributors'"] = "ПРИМЕЧАНИЕ::'просмотреть всю поддержку'"
    env.localization.strings["NOTE::'88x31 graphic for personal use'"] = "ПРИМЕЧАНИЕ::'88x31 изображение для личного пользования'"

    env.localization.strings["ENTITY::'unprocessed'::RECOMMEND::'relocation';'[EXM]'"] = "СУЩНОСТЬ::'необработана'::РЕКОМЕНДАЦИЯ::'перемещение';'[ИЗУЧ]'"
    // env.localization.strings[""] = ""

    console.log('weird stuff and function all good!')

    processTranslation();
    processTranslation(document.querySelector("#meta-menu"))
    processTranslation(document.querySelector("#entity-menu"))
    processTranslation(document.querySelector("#system-menu"))
    processTranslation(document.querySelector(`#mindspike-scanner`))
    processTranslation(document.querySelector(`#readout`))
    processTranslation(document.querySelector(`#static`))
    processTranslation(document.querySelector(`#minireadout`))
    processTranslation(document.querySelector(`#definition-box`))
    processTranslation(document.querySelector(`#dialogue-box`,true));
    processTranslation(document.querySelector(`#minireadout`,true));
    processTranslation(document.querySelector(`#readout`,true));
    processTranslation(document.querySelector(`#definition-box`,true));
    processTranslation(document.querySelector(`#mod-warning`,true));
    ouch(".scanned"); ouch(".unscanned");
    ouch('#stage-navigator', true);
    ouch('.reply', false, true);
    ouch('title', true)
getLocalizationForPage(true)

env.mutateConfig = { childList: true, subtree: true }
env.mutateObserver = new MutationObserver(()=>{
    processTranslation();
    processTranslation(document.querySelector("#meta-menu"))
    processTranslation(document.querySelector("#entity-menu"))
    processTranslation(document.querySelector(`#mindspike-scanner`))
    processTranslation(document.querySelector(`#readout`))
    processTranslation(document.querySelector(`#static`))
    processTranslation(document.querySelector(`#minireadout`))
    processTranslation(document.querySelector(`#definition-box`))
    processTranslation(document.querySelector(`#dialogue-box`,true));
    processTranslation(document.querySelector(`#minireadout`,true));
    processTranslation(document.querySelector(`#readout`,true));
    processTranslation(document.querySelector(`#definition-box`,true));
    processTranslation(document.querySelector(`#mod-warning`,true));
    ouch(".scanned");
    ouch(".unscanned");
    ouch(".enter", false, true, 'page');
    ouch('#stage-navigator', true);
    ouch('.reply', false, true);
    ouch('title', true)})
env.mutateObserver.observe(body, env.mutateConfig)

console.log('observer all good!')

document.head.appendChild(document.createElement('style').appendChild(document.createTextNode(css)).parentElement);