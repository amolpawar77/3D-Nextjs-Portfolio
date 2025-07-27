export const navLinks = [
	{
		id: "about",
				title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "UI/UX Designer",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "github",
		icon: "/logo.png",
	},
	{
		name: "mongoDB",
		icon: "/tech/mdb.png",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "vs-code",
		icon: "/tech/vscode.jfif"
	}
];

const experiences = [
	{
		"title": "Full Stack Web Developer",
		"company_name": "Sdaemon Infotech Pvt Ltd",
		"icon": "/company/sdaemonLogo.png",
		"iconBg": "#383E56",
		"date": "AUG-2023 - Present",
		"points": [
		  "Developed and maintained responsive web applications using modern technologies like Angular, React, Next.js, and Node.js.",
		  "Implemented RESTful APIs and integrated third-party services to enhance application functionality.",
		  "Ensured website security and best practices by implementing authentication, authorization, and data protection techniques.",
		  "Deployed and managed applications using cloud platforms, improving scalability and reliability.",
		  "Contributed to business growth by delivering high-quality web solutions that enhanced client engagement and user retention."
		]
	  },	  
];

const testimonials = [
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Amol Pawar",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/amol-pawar-bb7256130",
	},
	// {
	// 	id: 3,
	// 	testimonial:
	// 		"Dribbble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio.",
	// 	name: "Om Patel",
	// 	image: "/socialmedia/dribble.svg",
	// 	link: "https://dribbble.com/om2121",
	// },
	// {
	// 	id: 4,
	// 	testimonial:
	// 		"Also do check out my UI/UX Portfolio where I have shared by design studies.",
	// 	name: "Om Patel",
	// 	image: "/socialmedia/portfolio.svg",
	// 	link: "https://omthecreator.netlify.app/",
	// },
	{
		id: 5,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Amol Pawar",
		image: "/tech/github.webp",
		link: "https://github.com/amolpawar77",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
	{
		name: "FarmBlogs",
		description:
			"Designed and developed a visually appealing and user-friendly FarmBlogs platform for uploading and reading plant-related documents.",
		tags: [
			{
				name: "MERN",
				color: "blue-text-gradient",
			},
			{
				name: "TypeScript",
				color: "green-text-gradient",
			},
			{
				name: "Cloudinery",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/farmblog.jpeg",
		platform: "Netlify",
		deploy_link: "https://farmblogs.netlify.app/",
	},
	{
		name: "Skill Track Learning",
		description:
			"Designed and developed a visually appealing and user-friendly course access platform where instructors can manage courses, upload content.",
		tags: [
			{
				name: "MERN",
				color: "blue-text-gradient",
			},
			{
				name: "TypeScript",
				color: "green-text-gradient",
			},
			{
				name: "Google authentication",
				color: "orange-text-gradient",
			},
			{
				name: "Cloudinery",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/skilltrack.jpeg",
		platform: "Netlify",
		deploy_link: "https://skilltrack-e-learn.netlify.app/",
	},
	{
		name: "Tripmate travel Partner",
		description:
			"TripMate is a smart and reliable travel companion designed to make your journeys seamless and enjoyable. Travel smarter with TripMate your trusted guide for every destination!",
		tags: [
			{
				name: "MERN",
				color: "green-text-gradient",
			},
			{
				name: "Tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/tripmate.jpeg",
		platform: "Netlify",
		deploy_link: "https://tripmatetraveling.netlify.app/",
	},
	{
		name: "Craftnest Furniture",
		description:
			"Designed and developed a visually stunning and highly interactive home page for CraftNest Furniture Management using Framer Motion and Tailwind CSS. ",
		tags: [
			{
				name: "next.js",
				color: "blue-text-gradient",
			},
			{
				name: "TypeScript",
				color: "green-text-gradient",
			},
			{
				name: "stripe",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/craftnest.png",
		platform: "Vercel",
		deploy_link: "https://craftnest-furniture.vercel.app/",
	},
	{
		name: "Daule Hospital",
		description:
			"Designed and developed a visually stunning and highly interactive home page for Daule Hospital Management using Framer Motion and Tailwind CSS. ",
		tags: [
			{
				name: "MERN",
				color: "blue-text-gradient",
			},
			{
				name: "TypeScript",
				color: "green-text-gradient",
			},
			{
				name: "Framer Motion",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/daule.jpeg",
		platform: "Netlify",
		deploy_link: "https://daulehospital.netlify.app/",
	},
	{
		name: "KeyShare",
		description:
			"Designed and developed a visually stunning and highly interactive home page for Property Rental Management using Framer Motion and Tailwind CSS. ",
		tags: [
			{
				name: "next.js",
				color: "blue-text-gradient",
			},
			{
				name: "TypeScript",
				color: "green-text-gradient",
			},
			{
				name: "stripe",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/keyshare.png",
		platform: "Vercel",
		deploy_link: "https://key-share.vercel.app/",
	},
];

export { services, technologies, experiences, testimonials, projects };
