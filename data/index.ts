export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Chat Application",
    des: "A real-time messaging app with a sleek interface, built for seamless communication and collaboration.",
    img: "/quick-talk-img.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://quick-talk-3mro.onrender.com/",
  },
  {
    id: 2,
    title: "Ticket Booking Application",
    des: "The easiest way to book intercity trips with any transport provider, access various modes of transport, plan and embark on your journeys, all from one platform.",
    img: "/nomadicpod-image.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://nomadicpod.com/",
  },
  {
    id: 3,
    title: "AI Image SaaS - In Progress.....",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    // link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "A Combination of my Deployed Projects",
    des: "Responsive web application showcasing my projects, built with Next js and Tailwind CSS.",
    img: "/my_project_combo.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://gloryprojectcombo.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Glory is a dedicated and highly skilled developer. Her ability to break down complex concepts and mentor aspiring developers at Hackerspace has been invaluable. Her passion for technology and commitment to excellence make her a standout professional.",
    name: "Spencer Nweke",
    title: "Hackerspace Manager, GOMYCODE",
    image: "/Spencer.svg",
  },
  {
    quote:
      "Glory's problem-solving skills and attention to detail are exceptional. She played a key role in leading projects, mentoring junior developers, and ensuring high-quality software delivery. Her technical expertise and leadership make her an asset to any team.",
    name: "Saheed Ajayi",
    title: "Team Lead, Semicolon Africa",
    image: "/Saheed.jpeg",
  },
  {
    quote:
      "Working with Glory has been an absolute pleasure. She has a keen understanding of product development and always brings innovative ideas to the table. Her ability to collaborate across teams and deliver results makes her an invaluable contributor.",
    name: "Emmanuel Onwubiko",
    title: "Product Manager, Nomadipod",
    image: "/Emmanuel.jpeg",
  },
  {
    quote:
      "Glory is an outstanding software engineer with deep technical expertise and a strong problem-solving mindset. Her ability to tackle complex challenges and deliver scalable solutions sets her apart. She is an exceptional engineer and a great team player.",
    name: "Chibuzor Christian",
    title: "Senior Software Engineer, Black Silicon",
    image: "/Chibuzor.jpeg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using Vue.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Engineer",
    desc: "Designed and developed web application using React.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineer",
    desc: "Built full-stack web applications using MERN stack. Designed RESTful APIs, implemented authentication, and optimized performance for scalable solutions.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Frontend Engineer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/glorykachiihueze/",
  },
];
