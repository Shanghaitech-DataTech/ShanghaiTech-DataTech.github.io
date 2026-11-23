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
        achievements: "Achievements",
        publications: "Papers",
        activities: "Activities",
        resources: "Resources",
        contact: "Contact",
        hero_subtitle: "A Student Club from ShanghaiTech University, Focusing on Data Science Competitions & AI Technology Exploration",
        learn_more: "Learn More",
        about_title: "About DataTech",
        mission_title: "Our Mission",
        org_title: "Who We Are",
        partnership_title: "Partnership",
        about_p1: "DataTech is a student organization at <a href='https://www.shanghaitech.edu.cn/' target='_blank' rel='noopener'>ShanghaiTech University</a> dedicated to exploring the frontiers of data science and technology. We bring together passionate students who are interested in machine learning, artificial intelligence, data science, and other technical fields.",
        about_p2: "To create a discussion community for AI-related technologies at ShanghaiTech University, enabling students to learn and share knowledge. We support students in participating in data science competitions and AI research work, exploring the frontiers of artificial intelligence together.",
        partnership_p: "We are affiliated with Dadao College at <a href='https://www.shanghaitech.edu.cn/' target='_blank' rel='noopener'>ShanghaiTech University</a> and maintain deep and close collaborations with <a href='https://geekpie.club/' target='_blank' rel='noopener'>GeekPie Club</a> and <a href='https://acm.shanghaitech.edu.cn/' target='_blank' rel='noopener'>ACM Club</a>.",
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
        view_paper: "View Paper",
        view_pdf: "View PDF",
        column: "Column",
        total_prize_label: "Total Prize Money",
        award_count_label: "Awards",
        view_all_awards: "View all awards",
        view_all_papers: "View all papers",
        view_all_activities: "View all activities",
        view_all_column: "View all articles",
        column_title: "Column",
        cat_kaggle: "Kaggle",
        cat_crunchdao: "CrunchDAO",
        cat_tianchi: "Tianchi",
        cat_industry: "Industry Competitions",
        cat_academic: "Academic & Student Competitions",
        awards_page_title: "Awards | ShanghaiTech DataTech",
        awards_page_sub: "All competition awards won by DataTech members, grouped by category.",
        papers_page_title: "Papers | ShanghaiTech DataTech",
        papers_page_sub: "Research papers published by DataTech members.",
        activities_page_title: "Activities | ShanghaiTech DataTech",
        activities_page_sub: "Events, lectures and competitions organised or joined by DataTech.",
        column_page_title: "Column | ShanghaiTech DataTech",
        column_empty: "No articles yet.",
        achievement1_title: "CrunchDAO: ADIA Lab Structural Break Challenge",
        achievement1_members: "Mutian Hong, Guoqin Gu",
        achievement1_date: "Award Time: 2025.10",
        achievement2_title: "Tianchi: Alibaba Tianchi Ele.me AI Algorithm Competition",
        achievement2_members: "Guoqin Gu",
        achievement2_date: "Award Time: 2025.06",
        achievement3_title: "Kaggle: March Machine Learning Mania 2025",
        achievement3_members: "Guo Yu",
        achievement3_date: "Award Time: 2025.04",
        achievement4_title: "Kaggle: AI Mathematical Olympiad - Progress Prize 2",
        achievement4_members: "You Zhao",
        achievement4_date: "Award Time: 2025.04",
        achievement5_title: "CrunchDAO: ADIA Lab Causal Discovery Challenge",
        achievement5_members: "Mutian Hong, Guoqin Gu",
        achievement5_date: "Award Time: 2024.11",
        achievement6_title: "Tianchi: Kolors-LoRA Style Story Challenge",
        achievement6_members: "Dianshen Zhao",
        achievement6_date: "Award Time: 2024.09",
        achievement7_title: "Kaggle: Jigsaw - Agile Community Rules Classification",
        achievement7_members: "Guoqin Gu, Mutian Hong",
        achievement7_date: "Award Time: 2025.10",
        achievement8_title: "Tencent: Game Algorithm Competition - Track 3",
        achievement8_members: "Mutian Hong, Junye Wang, Yufei Zhang",
        achievement8_date: "Award Time: 2025.12",
        achievement9_title: "Kaggle: Bengali.AI Speech Recognition",
        achievement9_members: "Mutian Hong, Chuyan Zhou",
        achievement9_date: "Award Time: 2023.10",
        achievement10_title: "Kaggle: BirdCLEF+ 2026",
        achievement10_members: "starry",
        achievement10_date: "Award Time: 2026.06",
        achievement11_title: "Kaggle: Deep Past Challenge",
        achievement11_members: "Guoqin Gu, Mutian Hong, Zhengru Li, Yueting Wang",
        achievement11_date: "Award Time: 2026.04",
        achievement12_title: "Kaggle: Vesuvius Challenge - Surface Detection",
        achievement12_members: "starry",
        achievement12_date: "Award Time: 2026.02",
        achievement13_title: "Kaggle: BirdCLEF+ 2025",
        achievement13_members: "starry",
        achievement13_date: "Award Time: 2025.06",
        achievement14_title: "Kaggle: UW-Madison GI Tract Image Segmentation",
        achievement14_members: "starry",
        achievement14_date: "Award Time: 2022.06",
        achievement15_title: "Kaggle: BirdCLEF 2023",
        achievement15_members: "starry",
        achievement15_date: "Award Time: 2023.05",
        achievement16_title: "Kaggle: UM - Game-Playing Strength of MCTS Variants",
        achievement16_members: "starry",
        achievement16_date: "Award Time: 2024.12",
        achievement17_title: "Liangwen Cup Statistical Modeling and AI Prediction Challenge",
        achievement17_members: "Haotian Yang",
        achievement17_date: "Award Time: 2026.05",
        achievement18_title: "Xiaohongshu Hackathon Finals",
        achievement18_members: "Mutian Hong, Zebang He",
        achievement18_date: "Award Time: 2026.04",
        achievement19_title: "Liangwen Cup Statistical Modeling and AI Prediction Challenge",
        achievement19_members: "Zhengru Li",
        achievement19_date: "Award Time: 2026.05",
        achievement20_title: "The 3rd Peking University High-Performance Computing Comprehensive Ability Competition",
        achievement20_members: "Haotian Yang",
        achievement20_date: "Award Time: 2026.04",
        achievement21_title: "NVIDIA: 2nd DGX Spark Hackathon",
        achievement21_members: "Mutian Hong, Hanze Li, Dianshen Zhao, Zhexuan Zhang",
        achievement21_date: "Award Time: 2026.08",
        achievement22_title: "XianDao Cup: Weather LLM Inference Deployment Optimization on Domestic Scientific Computing Ecosystem",
        achievement22_members: "Mingkun Yue",
        achievement22_date: "Award Time: 2026.08",
        achievement23_title: "AFAC2026 Financial AI Innovation Competition: Track 1 - Market Participant Trading Behavior Identification and Fund Flow Analysis",
        achievement23_members: "Junye Wang, Zhihong Li",
        achievement23_date: "Award Time: 2026.08",
        achievement24_title: "Scientific Data Labeling Competition - Track 1: Molecular Identification and Structure Reconstruction",
        achievement24_members: "Zhengru Li",
        achievement24_date: "Award Time: 2026.07",
        achievement25_title: "Scientific Data Labeling Competition - Track 2: Chemical Reaction Result Annotation",
        achievement25_members: "Zhengru Li",
        achievement25_date: "Award Time: 2026.07",
        achievement26_title: "Scientific Data Labeling Competition - Track 1: Molecular Identification and Structure Reconstruction",
        achievement26_members: "Mutian Hong, Jianxuan Yao",
        achievement26_date: "Award Time: 2026.07",
        achievement27_title: "CrunchDAO: Obesity ML Competition - Broad Institute (Crunch 1, Track 2)",
        achievement27_members: "Mutian Hong, Dianshen Zhao",
        achievement27_date: "Award Time: 2026.03",
        achievement28_title: "Kaggle: NVIDIA Nemotron Model Reasoning Challenge",
        achievement28_members: "Bushi Liu",
        achievement28_date: "Award Time: 2026.06",
        achievement29_title: "Kaggle: AI Agent Security - Multi-Step Tool Attacks",
        achievement29_members: "Guoqin Gu",
        achievement29_date: "Award Time: 2026.09",
        achievement31_title: "Kaggle: RSNA Knee Abnormality Detection",
        achievement31_members: "Zhihong Li, Zhengru Li, Guoqin Gu, Mutian Hong",
        achievement31_date: "Award Time: 2026.10",
        achievement32_title: "Kaggle: Kaggriculture",
        achievement32_members: "Guoqin Gu",
        achievement32_date: "Award Time: 2026.10",
        achievement30_title: "ModelScope: Production AI Skills Competition (Phase 3)",
        achievement30_members: "Tianye Tan",
        achievement30_date: "Award Time: 2026",
        achievement30_rank: "Best Practice Award",
        publications_title: "Papers",
        paper1_source: "arXiv:2604.13016",
        paper1_member: "Club Member: Yaxuan Li",
        paper1_date: "April 2026",
        paper1_title: "Rethinking On-Policy Distillation of Large Language Models: Phenomenology, Mechanism, and Recipe",
        paper1_authors: "Yaxuan Li, Yuxin Zuo, Bingxiang He, Jinqian Zhang, Chaojun Xiao, Cheng Qian, Tianyu Yu, Huan-ang Gao, Wenkai Yang, Zhiyuan Liu, Ning Ding",
        paper1_abstract: "This work studies on-policy distillation for large language models, analyzing its phenomenology and mechanism, and proposing a practical recipe for effective distillation.",
        activities_title: "Recent Activities",
        act1_date: "2025.1",
        act1_title: "The Alchemist Cup",
        act1_description: "We hosted a data science competition at ShanghaiTech University, attracting over 60 participants.",
        act2_date: "2025.6",
        act2_title: "ShanghaiTech AI Agent Competition",
        act2_description: "We co-organized a competition on large model agents with ShanghaiTech University Library Information Center and Volcano Engine.",
        act3_date: "2025.10",
        act3_title: "Building LLMs from Scratch",
        act3_description: "We co-organized a series of lectures on building large language models from scratch with GeekPie Club and ACM Club.",
        act4_date: "2025.11",
        act4_title: "Club Culture Festival",
        act4_description: "We participated in the club culture festival organized by the college, giving away many AI technology-related merchandise.",
        act5_date: "2025.11",
        act5_title: "Humanities Festival",
        act5_description: "We participated in the Humanities Festival, showcasing an interactive virtual character with a traditional culture theme.",
        act6_date: "2025.12",
        act6_title: "Volcano Engine FORCE Conference",
        act6_description: "We were invited to participate in the FORCE Conference organized by Volcano Engine.",
        act7_date: "2025.12",
        act7_title: "Virtual Cell Machine Learning Challenge Launch Event",
        act7_description: "We invited Jean Herelle, CEO of CrunchDAO platform, to host a seminar introducing the latest competition co-organized by CrunchDAO platform, MIT & Harvard Broad Institute.",
        click_for_details: "Click for Details"
    },
    zh: {
        home: "首页",
        about: "关于我们",
        achievements: "获奖",
        publications: "论文",
        activities: "活动",
        resources: "资源",
        contact: "联系我们",
        hero_subtitle: "一个来自上海科技大学的学生社团，专注于数据科学竞赛与人工智能技术探索。",
        learn_more: "了解更多",
        about_title: "关于 DataTech",
        mission_title: "我们的使命",
        org_title: "我们是谁",
        partnership_title: "合作伙伴",
        about_p1: "DataTech 是<a href='https://www.shanghaitech.edu.cn/' target='_blank' rel='noopener'>上海科技大学</a>的学生组织，致力于探索数据科学和技术的前沿。我们汇聚了对机器学习、人工智能、数据科学等方向的技术感兴趣的学生。",
        about_p2: "在上海科技大学中创建人工智能相关技术的讨论社区，让学生能够学习与分享知识。支持学生参与数据科学竞赛与人工智能科学研究工作，共同探索人工智能前沿。",
        partnership_p: "我们挂靠<a href='https://www.shanghaitech.edu.cn/' target='_blank' rel='noopener'>上海科技大学</a>大道书院，与 <a href='https://geekpie.club/' target='_blank' rel='noopener'>GeekPie 社团</a>、<a href='https://acm.shanghaitech.edu.cn/' target='_blank' rel='noopener'>ACM 社团</a>有深入且密切的合作。",
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
        view_paper: "查看论文",
        view_pdf: "查看 PDF",
        column: "专栏",
        total_prize_label: "累计奖金总额",
        award_count_label: "获奖项目",
        view_all_awards: "查看全部获奖",
        view_all_papers: "查看全部论文",
        view_all_activities: "查看全部活动",
        view_all_column: "查看全部文章",
        column_title: "专栏",
        cat_kaggle: "Kaggle",
        cat_crunchdao: "CrunchDAO",
        cat_tianchi: "天池",
        cat_industry: "企业赛事",
        cat_academic: "学术与校园赛事",
        awards_page_title: "获奖 | 上海科技大学 DataTech",
        awards_page_sub: "DataTech 成员获得的全部竞赛奖项，按类别分组。",
        papers_page_title: "论文 | 上海科技大学 DataTech",
        papers_page_sub: "DataTech 成员发表的研究论文。",
        activities_page_title: "活动 | 上海科技大学 DataTech",
        activities_page_sub: "DataTech 组织或参与的活动、讲座与竞赛。",
        column_page_title: "专栏 | 上海科技大学 DataTech",
        column_empty: "暂无文章。",
        achievement1_title: "CrunchDAO: ADIA Lab Structural Break Challenge",
        achievement1_members: "洪沐天, 顾国勤",
        achievement1_date: "获奖时间: 2025.10",
        achievement2_title: "天池: 阿里云天池 饿了么AI算法大赛",
        achievement2_members: "顾国勤",
        achievement2_date: "获奖时间: 2025.06",
        achievement3_title: "Kaggle: March Machine Learning Mania 2025",
        achievement3_members: "虞果",
        achievement3_date: "获奖时间: 2025.04",
        achievement4_title: "Kaggle: AI Mathematical Olympiad - Progress Prize 2",
        achievement4_members: "赵优",
        achievement4_date: "获奖时间: 2025.04",
        achievement5_title: "CrunchDAO: ADIA Lab Causal Discovery Challenge",
        achievement5_members: "洪沐天, 顾国勤",
        achievement5_date: "获奖时间: 2024.11",
        achievement6_title: "天池: 可图Kolors-LoRA风格故事挑战赛",
        achievement6_members: "赵殿燊",
        achievement6_date: "获奖时间: 2024.09",
        achievement7_title: "Kaggle: Jigsaw - Agile Community Rules Classification",
        achievement7_members: "顾国勤, 洪沐天",
        achievement7_date: "获奖时间: 2025.10",
        achievement8_title: "腾讯：游戏算法大赛-赛道三",
        achievement8_members: "洪沐天, 王俊烨, 张羽飞",
        achievement8_date: "获奖时间: 2025.12",
        achievement9_title: "Kaggle: Bengali.AI Speech Recognition",
        achievement9_members: "洪沐天, 周楚焱",
        achievement9_date: "获奖时间: 2023.10",
        achievement10_title: "Kaggle: BirdCLEF+ 2026",
        achievement10_members: "starry",
        achievement10_date: "获奖时间: 2026.06",
        achievement11_title: "Kaggle: Deep Past Challenge",
        achievement11_members: "顾国勤, 洪沐天, 李政儒, 王越汀",
        achievement11_date: "获奖时间: 2026.04",
        achievement12_title: "Kaggle: 维苏威挑战 - 表面检测",
        achievement12_members: "starry",
        achievement12_date: "获奖时间: 2026.02",
        achievement13_title: "Kaggle: BirdCLEF+ 2025",
        achievement13_members: "starry",
        achievement13_date: "获奖时间: 2025.06",
        achievement14_title: "Kaggle: 威斯康星大学麦迪逊分校胃肠道图像分割",
        achievement14_members: "starry",
        achievement14_date: "获奖时间: 2022.06",
        achievement15_title: "Kaggle: BirdCLEF 2023",
        achievement15_members: "starry",
        achievement15_date: "获奖时间: 2023.05",
        achievement16_title: "Kaggle: UM - MCTS 变体游戏强度预测",
        achievement16_members: "starry",
        achievement16_date: "获奖时间: 2024.12",
        achievement17_title: "良文杯统计建模与AI预测挑战赛",
        achievement17_members: "杨昊天",
        achievement17_date: "获奖时间: 2026.05",
        achievement18_title: "小红书黑客松巅峰赛",
        achievement18_members: "洪沐天, 贺泽邦",
        achievement18_date: "获奖时间: 2026.04",
        achievement19_title: "良文杯统计建模与AI预测挑战赛",
        achievement19_members: "李政儒",
        achievement19_date: "获奖时间: 2026.05",
        achievement20_title: "第三届北京大学高性能计算综合能力竞赛",
        achievement20_members: "杨昊天",
        achievement20_date: "获奖时间: 2026.04",
        achievement21_title: "NVIDIA DGX Spark 黑客松（第二届）",
        achievement21_members: "洪沐天, 李翰泽, 赵殿燊, 张哲轩",
        achievement21_date: "获奖时间: 2026.08",
        achievement22_title: "先导杯-基于国产科学智算生态的气象大模型推理部署优化（先导杯-气象赛道）",
        achievement22_members: "岳明琨",
        achievement22_date: "获奖时间: 2026.08",
        achievement23_title: "AFAC2026 金融智能创新大赛-赛题一：市场参与者交易行为识别与资金流向分析",
        achievement23_members: "王俊烨, 李知鸿",
        achievement23_date: "获奖时间: 2026.08",
        achievement24_title: "科学数据标注大赛（玻尔）-赛道一：分子识别与结构还原赛",
        achievement24_members: "李政儒",
        achievement24_date: "获奖时间: 2026.07",
        achievement25_title: "科学数据标注大赛（玻尔）-赛道二：化学反应结果标注赛",
        achievement25_members: "李政儒",
        achievement25_date: "获奖时间: 2026.07",
        achievement26_title: "科学数据标注大赛（玻尔）-赛道一：分子识别与结构还原赛",
        achievement26_members: "洪沐天, 姚鉴轩",
        achievement26_date: "获奖时间: 2026.07",
        achievement27_title: "CrunchDAO：肥胖症机器学习竞赛 - Broad Institute（赛段一 赛道二）",
        achievement27_members: "洪沐天, 赵殿燊",
        achievement27_date: "获奖时间: 2026.03",
        achievement28_title: "Kaggle: NVIDIA Nemotron Model Reasoning Challenge",
        achievement28_members: "刘补石",
        achievement28_date: "获奖时间: 2026.06",
        achievement29_title: "Kaggle: AI Agent Security - Multi-Step Tool Attacks",
        achievement29_members: "顾国勤",
        achievement29_date: "获奖时间: 2026.09",
        achievement31_title: "Kaggle: RSNA Knee Abnormality Detection",
        achievement31_members: "李知鸿, 李政儒, 顾国勤, 洪沐天",
        achievement31_date: "获奖时间: 2026.10",
        achievement32_title: "Kaggle: Kaggriculture",
        achievement32_members: "顾国勤",
        achievement32_date: "获奖时间: 2026.10",
        achievement30_title: "魔搭社区：Production AI Skills 大赛（第三期）",
        achievement30_members: "谭天晔",
        achievement30_date: "获奖时间: 2026",
        achievement30_rank: "最佳实践奖",
        publications_title: "论文成果",
        paper1_source: "arXiv:2604.13016",
        paper1_member: "社团成员: 黎亚轩",
        paper1_date: "2026年4月",
        paper1_title: "Rethinking On-Policy Distillation of Large Language Models: Phenomenology, Mechanism, and Recipe",
        paper1_authors: "Yaxuan Li, Yuxin Zuo, Bingxiang He, Jinqian Zhang, Chaojun Xiao, Cheng Qian, Tianyu Yu, Huan-ang Gao, Wenkai Yang, Zhiyuan Liu, Ning Ding",
        paper1_abstract: "该工作研究大语言模型的 on-policy distillation，分析其现象与机制，并提出有效蒸馏的实践方案。",
        activities_title: "近期活动",
        act1_date: "2025.1",
        act1_title: "慧炼丹心杯",
        act1_description: "我们举办了一场上海科技大学校内的数据科学竞赛，吸引了60余名参与者",
        act2_date: "2025.6",
        act2_title: "2025上海科技大学 AI 智能体创新应用大赛",
        act2_description: "我们与上海科技大学图书馆信息中心，以及火山引擎，共同开展了一场关于大模型智能体的竞赛",
        act3_date: "2025.10",
        act3_title: "从零构建大语言模型",
        act3_description: "我们与 GeekPie 社团、ACM 社团共同举办了 从零构建大语言模型 系列课程讲座。",
        act4_date: "2025.11",
        act4_title: "社团文化节",
        act4_description: "我们参与了书院举办的社团文化节，送出了许多人工智能技术相关的周边礼品",
        act5_date: "2025.11",
        act5_title: "人文节",
        act5_description: "我们参与了人文节，展示了一个传统文化主题的可互动的虚拟形象。",
        act6_date: "2025.12",
        act6_title: "火山引擎FORCE大会",
        act6_description: "我们受邀参与了火山引擎举办的FORCE大会。",
        act7_date: "2025.12",
        act7_title: "虚拟细胞机器学习挑战赛启动会",
        act7_description: "我们邀请了 CrunchDAO 平台的 CEO, Jean Herelle，举办了一场研讨会，介绍了 CrunchDAO平台与 MIT & Harvard Broad Institute 共同举办的最新比赛。",
        click_for_details: "点击获取详细信息"
    }
};

let currentLang = 'en';

// Fixed exchange rate used to merge USD and RMB prizes into one total.
const USD_CNY_RATE = 7.2;

// Totals come from AWARDS (script/awards-data.js): [id, category, prize, "USD"|"CNY"].
// English shows USD, Chinese shows RMB; the other currency is converted with USD_CNY_RATE.
function formatPrize(amountInLangCurrency, lang) {
    const n = Math.round(amountInLangCurrency).toLocaleString('en-US');
    return lang === 'zh' ? '\u2248 RMB ' + n : '\u2248 $' + n;
}

function updatePrizeTotals(lang) {
    if (typeof AWARDS === 'undefined') return;
    const perCat = {};
    let total = 0;
    AWARDS.forEach(([, cat, prize, cur]) => {
        let v = prize;
        if (cur === 'USD' && lang === 'zh') v = prize * USD_CNY_RATE;
        if (cur === 'CNY' && lang !== 'zh') v = prize / USD_CNY_RATE;
        total += v;
        perCat[cat] = (perCat[cat] || 0) + 1;
    });
    document.querySelectorAll('[data-total-prize]').forEach(el => el.textContent = formatPrize(total, lang));
    document.querySelectorAll('[data-award-count]').forEach(el => el.textContent = AWARDS.length);
    document.querySelectorAll('[data-prize-rate]').forEach(el => el.textContent = '(1USD=' + USD_CNY_RATE + 'RMB)');
    Object.keys(perCat).forEach(c => {
        document.querySelectorAll('[data-cat-count="' + c + '"]').forEach(el => el.textContent = perCat[c]);
    });
}

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

    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    updatePrizeTotals(lang);

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

    // Logo paths are relative to the current page (homepage: ./img/, subpages: ../img/)
    const imgBase = navbarLogo ? navbarLogo.getAttribute('src').replace(/datatechlogo_[wb]\.svg$/, '') : './img/';
    const whiteLogoSrc = imgBase + 'datatechlogo_b.svg';
    const blackLogoSrc = imgBase + 'datatechlogo_w.svg';

    function updateThemeForDayMode(isDay) {
        body.classList.toggle('day-mode', isDay);
        if (navbarLogo) navbarLogo.src = isDay ? blackLogoSrc : whiteLogoSrc;
        if (aboutLogo) aboutLogo.src = isDay ? blackLogoSrc : whiteLogoSrc;
        if (shanghaiTechLogo) shanghaiTechLogo.style.filter = isDay ? 'none' : 'invert(1)';
    }

    // Initial theme setup (the choice is shared across all pages)
    const savedTheme = localStorage.getItem('preferred-theme');
    updateThemeForDayMode(savedTheme ? savedTheme === 'day' : body.classList.contains('day-mode'));

    themeToggle.addEventListener('click', () => {
        const isDay = !body.classList.contains('day-mode');
        updateThemeForDayMode(isDay);
        localStorage.setItem('preferred-theme', isDay ? 'day' : 'night');
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
