export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Labs", href: "/labs/" },
  { label: "Insights", href: "/insights/" },
  { label: "Programs", href: "/programs/" },
  { label: "Contact", href: "/contact/" }
];

export const media = {
  logo: "/images/logo.png",
  homePoster: "/images/hero/home-poster.jpg",
  homeVideo: "/videos/home.mp4",
  missionPoster: "/images/hero/mission-poster.jpg",
  missionVideo: "/videos/mission.mp4",
  labsPoster: "/images/hero/labs-poster.jpg",
  labsVideo: "/videos/labs.mp4",
  news: "/images/news.png",
  partnerLogo: "/images/partner-logo1.png",
  advisor: "/images/advisor.jpg",
  guangyin: "/images/labs/guangyin.jpg",
  houpu: "/images/labs/houpu.jpg",
  zefan: "/images/labs/zefan.jpg",
  theory: "/images/labs/theory.jpg",
  talks: "/images/programs/talks.jpg",
  education: "/images/programs/education.jpg",
  community: "/images/programs/community.jpg",
  llmSurvey: "/images/llm-survey-report.png",
  foodSurvey: "/images/insights/food-survey.jpg",
  contactCollab: "/images/contact/collab.jpg",
  contactTeam: "/images/contact/team.jpg",
  contactSupport: "/images/contact/support.png"
};

export const labProfiles = [
  {
    title: "Complex Systems Lab",
    focus: "Complex systems modeling and simulation",
    description: "Exploring data-driven approaches to understand and improve urban systems and human mobility.",
    bullets: ["Complex systems modeling and simulation", "Network dynamics and system interactions", "Multi-scale analysis of urban and environmental systems", "Resilience and system behavior"],
    projects: ["Reinforcement Learning for Adaptive Evacuation Policy Design", "AI Agent-based Simulation of Human Evacuation Decisions", "Remote Sensing + Mobility for Exposure Measurement", "Bias in Mobility Data for Disaster Research", "Measuring Evacuation Efficiency Across Policy Regimes", "AI-driven Early Warning and Behavioral Response"],
    quote: "Understanding complex systems means uncovering how data, behavior, and intelligence interact to shape the dynamics of our cities and societies.",
    director: "Guangyin Jin",
    role: "Complex Systems Lab Director",
    image: media.guangyin,
    bio: "Dr. Jin received his Ph.D. in Management Science and Engineering from Tsinghua University. He is a Senior Member of IEEE, a senior research fellow at NAAI, and was named among the Top 2% Scientists Worldwide in 2026."
  },
  {
    title: "Urban Data Science Lab",
    focus: "Urban mobility and accessibility",
    description: "Exploring data-driven approaches to understand and improve urban systems and human mobility.",
    bullets: ["Urban mobility and accessibility", "Spatial data analysis", "Built environment and behavior", "Policy-relevant data modeling"],
    projects: ["Reinforcement Learning for Adaptive Evacuation Policy Design", "AI Agent-based Simulation of Human Evacuation Decisions", "Remote Sensing + Mobility for Exposure Measurement", "Bias in Mobility Data for Disaster Research", "Measuring Evacuation Efficiency Across Policy Regimes", "AI-driven Early Warning and Behavioral Response"],
    quote: "Urban Data Science transforms data into insights that serve communities and shape more equitable urban futures.",
    director: "Houpu Li",
    role: "Urban Data Science Lab Director",
    image: media.houpu,
    bio: "Houpu Li is an urban data scientist specializing in GeoAI, spatial modeling, and computational urban research. He was a Research Associate at Harvard University (2024-2025)."
  },
  {
    title: "AI & Agent Systems Lab",
    focus: "Agent-based systems and AI-driven workflows",
    description: "Developing and deploying AI and agent-based systems to support real-world applications in urban, environmental, and societal contexts.",
    bullets: ["Agent-based systems and AI-driven workflows", "Human-centered and deployable AI solutions", "Applied machine learning for social and environmental challenges"],
    projects: ["Intelligent Food Ingredient Analysis Platform", "Global Food Safety Standards Database", "AI-Driven Personalized Learning Platform for K-12"],
    quote: "AI agents transform data into adaptive intelligence, enabling intelligent decision-making across systems, applications, and everyday user experiences.",
    director: "Zefan Wang",
    role: "AI & Agent Systems Lab Director",
    image: media.zefan,
    bio: "Zefan Wang is a Full Stack Engineer specializing in AI systems and agent-based architectures. With over 6 years of experience, he focuses on developing intelligent agents and AI-driven systems that automate complex workflows and enable adaptive, data-driven decision-making."
  },
  {
    title: "Theory & Foundations Lab",
    focus: "Theoretical and conceptual frameworks",
    description: "Advancing theoretical and methodological foundations for data-driven research in urban and environmental systems, climate resilience, and social equity.",
    bullets: ["Theoretical and conceptual frameworks", "Foundations of data-driven and computational research", "Interdisciplinary research methodologies", "Ethics and critical perspectives in technology"],
    projects: ["xxxx"],
    quote: "Theoretical foundations help research stay rigorous, reflective, and connected to real-world public value.",
    director: "XXX",
    role: "Theory & Foundations Lab Director",
    image: media.theory,
    bio: "This lab advances conceptual and methodological foundations for data-driven research across urban, environmental, and societal systems."
  }
];

export const programs = [
  {
    title: "SENSE Talks",
    text: "For researchers, practitioners, and the public, through open webinars and knowledge exchange, we translate ideas into real-world impact.",
    image: media.talks
  },
  {
    title: "SENSE Education",
    text: "For children and students, through interactive workshops, we build awareness and empower the next generation to engage with social and environmental challenges.",
    image: media.education
  },
  {
    title: "SENSE Community",
    text: "For communities and residents, through participatory research and co-creation, we generate knowledge together and drive meaningful local change.",
    image: media.community
  }
];

export const insights = [
  {
    title: "How Do LLMs Shape Your Everyday Life?",
    subtitle: "A 10-year longitudinal survey tracking the impact of AI on everyday life",
    contributors: "Survey Contributors: Yuetong Wang (Lead Researcher), XXX, XXX",
    text: "We launched this survey to understand how emerging AI technologies, particularly large language models, are shaping everyday life across diverse communities worldwide. As an ongoing initiative, we aim to track these changes over the next decade, building a longitudinal dataset to uncover how AI applications influence human behavior, perception, and decision-making.",
    image: media.llmSurvey
  },
  {
    title: "Do You Really Know What's in Your Food?",
    subtitle: "A survey exploring how people understand packaged foods, ingredients, and their impacts on health",
    contributors: "Survey Contributors: Zhiyan Chen (Lead Researcher), XXX, XXX",
    text: "We launched this survey to understand how people perceive the health impacts of packaged foods and their ingredients. While ingredient labels are widely available, they are often difficult to interpret, creating a gap between information access and meaningful understanding.",
    image: media.foodSurvey
  }
];

export const contactCards = [
  {
    title: "Collaborations & Inquiries",
    text: "For partnerships, research collaborations, or general inquiries.",
    email: "info@senseinstitute.org",
    image: media.contactCollab
  },
  {
    title: "Join Our Team",
    text: "Explore opportunities to work with us as a researcher, collaborator, intern, or volunteer.",
    email: "info@senseinstitute.org",
    image: media.contactTeam
  },
  {
    title: "Support Our Work",
    text: "Support our mission through donations and help expand our research, education, and community programs.",
    email: "yanyao@senseinstitute.org",
    image: media.contactSupport
  }
];
