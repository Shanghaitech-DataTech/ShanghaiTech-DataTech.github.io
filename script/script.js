/* Code for changing active link on clicking */
var btns =
    $(".navbar-nav .nav-link");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click",
        function() {
            var current = document
                .getElementsByClassName("active");

            current[0].className = current[0]
                .className.replace(" active", "");

            this.className += " active";
        });
}

/* Code for changing active 
link on Scrolling */
$(window).scroll(function() {
    var distance = $(window).scrollTop();
    $('.page-section').each(function(i) {

        if ($(this).position().top <=
            distance + 250) {

            $('.navbar-nav a.active')
                .removeClass('active');

            $('.navbar-nav a').eq(i)
                .addClass('active');
        }
    });
}).scroll();

// Language switching functionality
const translations = {
    en: {
        home: "Home",
        about: "About",
        resources: "Resources",
        contact: "Contact",
        hero_subtitle: "A Student Club from ShanghaiTech University, Focusing on Data Science Competitions & AI Technology Exploration",
        learn_more: "Learn More",
        about_title: "About DataTech",
        mission_title: "Our Mission",
        org_title: "Who We Are",
        partnership_title: "Partnership",
        about_p1: "DataTech is a student organization at ShanghaiTech University dedicated to exploring the frontiers of data science and technology. We bring together passionate students who are interested in machine learning, artificial intelligence, data science, and other technical fields.",
        about_p2: "To create a discussion community for AI-related technologies at ShanghaiTech University, enabling students to learn and share knowledge. We support students in participating in data science competitions and AI research work, exploring the frontiers of artificial intelligence together.",
        partnership_p: "We are affiliated with Dadao College at ShanghaiTech University and maintain deep and close collaborations with GeekPie Club and ACM Club.",
        resources_title: "EXPLORE<br><span>OUR RESOURCES</span>",
        ml_title: "<i class=\"fas fa-brain me-2\"></i>Machine Learning",
        ml_p: "Explore the latest in ML algorithms, deep learning frameworks, and AI applications.",
        da_title: "<i class=\"fas fa-chart-bar me-2\"></i>Data Analysis",
        da_p: "Learn data visualization, statistical analysis, and data-driven decision making.",
        ti_title: "<i class=\"fas fa-code me-2\"></i>Tech Innovation",
        ti_p: "Discover emerging technologies and participate in innovative projects.",
        contact_title: "Get In Touch",
        contact_p: "Interested in joining DataTech or collaborating with us? Please contact us:",
        achievements_title: "Competition Achievements",
        team_members: "Team Members:",
        award_time: "Award Time:",
        view_competition: "Click to view Competition detail",
        view_solution: "Click to view Solution",
        achievement1_title: "ADIA Lab Causal Discovery Challenge",
        achievement1_members: "Mutian Hong, Guoqin Gu",
        achievement1_date: "November 2024",
        achievement2_title: "March Machine Learning Mania 2025",
        achievement2_members: "Guo Yu",
        achievement2_date: "April 2025",
        achievement3_title: "Alibaba Tianchi Ele.me AI Algorithm Competition",
        achievement3_members: "Guoqin Gu",
        achievement3_date: "June 2025",
        achievement4_title: "Kolors-LoRA Style Story Challenge",
        achievement4_members: "Dianshen Zhao",
        achievement4_date: "September 2024",
        achievement5_title: "Kaggle AI Mathematical Olympiad - Progress Prize 2",
        achievement5_members: "You Zhao",
        achievement5_date: "April 2025"
    },
    zh: {
        home: "首页",
        about: "关于我们",
        resources: "资源",
        contact: "联系我们",
        hero_subtitle: "一个来自上海科技大学的学生社团，专注于数据科学竞赛与人工智能技术探索。",
        learn_more: "了解更多",
        about_title: "关于 DataTech",
        mission_title: "我们的使命",
        org_title: "我们是谁",
        partnership_title: "合作伙伴",
        about_p1: "DataTech 是上海科技大学的学生组织，致力于探索数据科学和技术的前沿。我们汇聚了对机器学习、人工智能、数据科学等方向的技术感兴趣的学生。",
        about_p2: "在上海科技大学中创建人工智能相关技术的讨论社区，让学生能够学习与分享知识。支持学生参与数据科学竞赛与人工智能科学研究工作，共同探索人工智能前沿。",
        partnership_p: "我们挂靠上海科技大学大道书院，与 GeekPie 社团、ACM 社团有深入且密切的合作。",
        resources_title: "探索<br><span>我们的资源</span>",
        ml_title: "<i class=\"fas fa-brain me-2\"></i>机器学习",
        ml_p: "探索最新的机器学习算法、深度学习框架和人工智能应用。",
        da_title: "<i class=\"fas fa-chart-bar me-2\"></i>数据分析",
        da_p: "学习数据可视化、统计分析和数据驱动的决策制定。",
        ti_title: "<i class=\"fas fa-code me-2\"></i>技术创新",
        ti_p: "发现新兴技术并参与创新项目。",
        contact_title: "联系我们",
        contact_p: "有兴趣加入 DataTech 或与我们合作吗？请联系：",
        achievements_title: "竞赛获奖",
        team_members: "团队成员:",
        award_time: "获奖时间:",
        view_competition: "点击查看竞赛详情",
        view_solution: "点击查看解决方案",
        achievement1_title: "ADIA Lab Causal Discovery Challenge",
        achievement1_members: "洪沐天, 顾国勤",
        achievement1_date: "2024年11月",
        achievement2_title: "March Machine Learning Mania 2025",
        achievement2_members: "虞果",
        achievement2_date: "2025年4月",
        achievement3_title: "阿里云天池 饿了么AI算法大赛",
        achievement3_members: "顾国勤",
        achievement3_date: "2025年6月",
        achievement4_title: "可图Kolors-LoRA风格故事挑战赛",
        achievement4_members: "赵殿燊",
        achievement4_date: "2024年9月",
        achievement5_title: "Kaggle AI Mathematical Olympiad - Progress Prize 2",
        achievement5_members: "赵优",
        achievement5_date: "2025年4月"
    }
};

let currentLang = 'en';

function switchLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-lang]');

    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            // Check if the element contains HTML tags
            if (translations[lang][key].includes('<')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update language toggle button text
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = lang === 'en' ? '文' : 'EN';
    }

    // Save language preference
    localStorage.setItem('preferred-language', lang);
}

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) {
        return;
    }

    const body = document.body;
    const navbarLogo = document.getElementById('navbar-logo');
    const aboutLogo = document.getElementById('about-logo');
    const shanghaiTechLogo = document.getElementById('ShanghaiTech-logo');

    const whiteLogoSrc = './img/datatechlogo_b.svg';
    const blackLogoSrc = './img/datatechlogo_w.svg';

    function updateThemeForDayMode(isDay) {
        body.classList.toggle('day-mode', isDay);
        if (navbarLogo) navbarLogo.src = isDay ? blackLogoSrc : whiteLogoSrc;
        if (aboutLogo) aboutLogo.src = isDay ? blackLogoSrc : whiteLogoSrc;
        if (shanghaiTechLogo) shanghaiTechLogo.style.filter = isDay ? 'none' : 'invert(1)';
    }

    // Initial theme setup
    updateThemeForDayMode(body.classList.contains('day-mode'));

    themeToggle.addEventListener('click', () => {
        updateThemeForDayMode(!body.classList.contains('day-mode'));
    });

    // Language toggle functionality
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        // Load saved language preference or default to English
        const savedLang = localStorage.getItem('preferred-language') || 'en';
        switchLanguage(savedLang);

        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'zh' : 'en';
            switchLanguage(newLang);
        });
    }
});