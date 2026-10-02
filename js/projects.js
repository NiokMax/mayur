/**
 * Mayur Bikash Gogoi - Projects Database
 * Add, edit, or remove projects dynamically.
 */

const PROJECTS_DATA = [
  {
    id: "loopni",
    name: "Loopni",
    tagline: "Clothing & Accessories Brand Website",
    category: "web-development",
    categoryLabel: "Web Development / E-Commerce",
    status: "Website built / Brand in development",
    statusType: "active", // 'active', 'in-development', 'completed'
    description: "Loopni is my clothing and accessories brand based in India. I created the brand's website as part of my journey in web development and entrepreneurship.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Brand Identity"],
    image: "assets/images/projects/loopni-project.svg",
    liveUrl: "https://loopni.shop",
    sourceUrl: "",
    socialUrl: "https://www.instagram.com/loopni.pvt/",
    socialLabel: "Loopni Instagram",
    featured: true,
    year: "Ongoing"
  },
  {
    id: "personal-ai-assistant",
    name: "Personal AI Assistant",
    tagline: "Inspired by JARVIS from Iron Man",
    category: "ai",
    categoryLabel: "AI / Automation / Software",
    status: "In Development",
    statusType: "in-development",
    description: "I'm developing a personal AI assistant inspired by JARVIS from Iron Man. The goal is to explore natural voice interaction, multilingual communication, computer automation, and intelligent assistance.",
    technologies: ["Python", "Natural Language Processing", "Voice Synthesis", "Desktop Automation"],
    image: "assets/images/projects/jarvis-assistant-project.svg",
    liveUrl: "",
    sourceUrl: "",
    socialUrl: "",
    featured: true,
    year: "In Progress"
  }
];

if (typeof window !== "undefined") {
  window.PROJECTS_DATA = PROJECTS_DATA;
}
