const config = {
  title: "Surya | AI Enthusiast",
  description: {
    long: "Surya is an AI enthusiast and curious about learning trending software technologies. With a strong foundation in web development and a passion for exploring AI, he is dedicated to building innovative solutions and staying at the forefront of technological advancements.",
    short:
      "Surya, an AI enthusiast and tech explorer building the future.",
  },
  keywords: [
    "Surya",
    "Surya AI",
    "Surya Portfolio",
    "AI Enthusiast",
    "Software Engineer",
    "Flutter Developer",
    "Full Stack Developer",
    "Web Development",
    "Interactive Websites",
    "JavaScript",
    "Python",
    "Java",
    "Machine Learning",
  ],
  author: "Surya Natarajan",
  email: "suryanatarajan04@gmail.com",
  site: "https://github.com/Surya-2k4", // Using GitHub as fallback for site

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/surya-2k4/",
    github: "https://github.com/Surya-2k4/",
    twitter: "",
    instagram: "",
  },
};
export { config };
