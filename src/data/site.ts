export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Labs", href: "/labs/" },
  { label: "Insights", href: "/insights/" },
  { label: "Programs", href: "/programs/" },
  { label: "Contact", href: "/contact/" }
];

export const media = {
  logo: "https://static.wixstatic.com/media/b0f0cd_320a3c0aa304417cbf1258224f2a4357~mv2.png",
  homePoster: "https://static.wixstatic.com/media/b0f0cd_b346518a4a1044eb9e51a85e1d094be1f000.jpg",
  homeVideo: "https://video.wixstatic.com/video/b0f0cd_b346518a4a1044eb9e51a85e1d094be1/720p/mp4/file.mp4",
  missionPoster: "https://static.wixstatic.com/media/b0f0cd_165da95fa31a461fab4812a0d7f1a3d3f000.jpg",
  missionVideo: "https://video.wixstatic.com/video/b0f0cd_165da95fa31a461fab4812a0d7f1a3d3/720p/mp4/file.mp4",
  labsPoster: "https://static.wixstatic.com/media/b0f0cd_9b83e2530b6b495184999e8a8900fc96f000.jpg",
  labsVideo: "https://video.wixstatic.com/video/b0f0cd_9b83e2530b6b495184999e8a8900fc96/720p/mp4/file.mp4",
  news: "https://static.wixstatic.com/media/b0f0cd_ae6e6984bfd84f38b80504150168240f~mv2.png",
  partnerLogo: "/images/partner-logo1.png",
  advisor: "https://static.wixstatic.com/media/b0f0cd_6d92140e847c44fa8a29d54c2ca5659a~mv2.jpg",
  guangyin: "https://static.wixstatic.com/media/b0f0cd_25adb509b8f0497f9e442aae6de92818~mv2.jpg",
  houpu: "https://static.wixstatic.com/media/b0f0cd_b76f761efbcb4f9fad5261c28b5d5014~mv2.jpg",
  zefan: "https://static.wixstatic.com/media/b0f0cd_413b50f46f3f4fad8a41797e0e984bc6~mv2.jpg",
  theory: "https://static.wixstatic.com/media/11062b_19bdd1b0a32347649f3ab4484e2e246f~mv2.jpg",
  talks: "https://static.wixstatic.com/media/11062b_6b36a599be634ccda9de42848c8c6dd8~mv2.jpg",
  education: "https://static.wixstatic.com/media/11062b_fb30077eae5943bb9d4880293c525a17~mv2.jpg",
  community: "https://static.wixstatic.com/media/b0f0cd_186669379305436ea5d9dbfdf5fc8bc1~mv2.jpg",
  llmSurvey: "/images/llm-survey-report.png",
  foodSurvey: "https://static.wixstatic.com/media/b0f0cd_c8764f96f1d44e859d2171969b64cbf6~mv2.jpg",
  contactCollab: "https://static.wixstatic.com/media/556afc712f9e4d8aae4b2a39ad38c9bf.jpg",
  contactTeam: "https://static.wixstatic.com/media/b0f0cd_69a90b48c9cb44dd8e671de89cbd08ca~mv2.jpg",
  contactSupport: "https://static.wixstatic.com/media/b0f0cd_2e228e9704854dd4bce45f82c308ef66~mv2.png"
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
