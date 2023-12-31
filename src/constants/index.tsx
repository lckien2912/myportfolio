import githubIcon from "@/assets/github-logo_icon-icons.com_73546.png";
import fbIcon from "@/assets/facebook_logo_icon_147291.png";
import htmlIcon from "@/assets/file_type_html_icon_130541.png";
import cssIcon from "@/assets/file_type_css_icon_130661.png";
import jsIcon from "@/assets/folder_js_icon_161291.png";
import tsIcon from "@/assets/folder_ts_icon_161281.png";
import reactIcon from "@/assets/react_original_logo_icon_146374.png";
import tailwindIcon from "@/assets/file_type_tailwind_icon_130128.png";
import scssIcon from "@/assets/sass_original_logo_icon_146350.png";
import gitIcon from "@/assets/file_type_git_icon_130581.png";
import nextIcon from "@/assets/nextjs_icon_132160.png";
import sqlIcon from "@/assets/icon_sql_256_30046.png";
import axiosIcon from "@/assets/axios_logo_icon_168546.png";
import routerIcon from "@/assets/react-router-mark-color.png";
import linkedinIcon from "@/assets/linkedin_icon-icons.com_65929.png";
import tksImg from "@/assets/tks.png";
import metaversus from "@/assets/metaversus.png";
import gpt3 from "@/assets/gpt3.png";

export const {
  VITE_SERVICE_ID: SERVICE_ID,
  VITE_TEMPLATE_ID: TEMPLATE_ID,
  VITE_PUBLIC_KEY: PUBLIC_KEY,
  VITE_CV: CV,
} = import.meta.env;

export const TECH_STACKS = [
  { name: "html", src: htmlIcon },
  { name: "css", src: cssIcon },
  { name: "js", src: jsIcon },
  { name: "ts", src: tsIcon },
  { name: "react", src: reactIcon },
  { name: "next", src: nextIcon },
  { name: "router", src: routerIcon },
  { name: "axios", src: axiosIcon },
  { name: "sql", src: sqlIcon },
  { name: "tailwind", src: tailwindIcon },
  { name: "scss", src: scssIcon },
  { name: "git", src: gitIcon },
];

export const NAV_ITEMS = [
  { title: "Home", href: "#home", className: "", variants: "ghost" },
  { title: "About", href: "#about", className: "", variants: "ghost" },
  { title: "Projects", href: "#projects", className: "", variants: "ghost" },
  {
    title: "Contact",
    href: "#contact",
    variants: "primary",
    className: "sm:py-2 md:py-2",
  },
];

export const HELLO_LINK_ITEMS = [
  {
    title: (
      <img src={fbIcon} alt="Github" className="w-full h-full object-cover" />
    ),
    href: "https://www.facebook.com/kienismee/",
  },
  {
    title: (
      <img
        src={githubIcon}
        alt="Github"
        className="w-full h-full object-cover"
      />
    ),
    href: "https://github.com/lckien2912",
  },
  {
    title: (
      <img
        src={linkedinIcon}
        alt="LinkedIn"
        className="w-full h-full object-cover"
      />
    ),
    href: "https://www.linkedin.com/in/kienlc/",
  },
];

export const PROJECTS = [
  {
    name: "The Keyboard Store",
    imgSrc: tksImg,
    type: "main",
    source: {
      sourceCode: "https://github.com/lckien2912/the-keyboard-store",
      live: "https://the-keyboard-store-lime.vercel.app/",
    },
    admin: {
      sourceCode: "https://github.com/lckien2912/e-commerce-admin",
      live: "https://e-commerce-admin-rust.vercel.app/",
    },
    description:
      "Welcome to our mechanical keyboard store! We offer a wide range of high-quality mechanical keyboards that are perfect for gamers, programmers, and anyone who wants a better typing experience. Our keyboards come in a variety of styles, layouts, and colors, so you're sure to find the perfect one for you.",
    className: "",
    techStacks: [
      "React",
      "Next.js",
      "Typescript",
      "Shadcn UI",
      "Headless UI",
      "Tailwind CSS",
      "React Hook Form",
      "Prisma",
      "Stripe",
      "Axios",
    ],
  },
  {
    name: "Metaversus",
    imgSrc: metaversus,
    type: "sub",
    source: {
      sourceCode: "https://github.com/lckien2912/metaversus",
      live: "https://metaversus-nu-rosy.vercel.app/",
    },
    description:
      "Metaverse is a term used to describe a virtual universe that is shared by millions of users around the world. It is a fully immersive environment that allows users to interact with each other and with virtual objects in real-time.",
    className: "",
    techStacks: [
      "React",
      "Next.js",
      "JavaScript",
      "Framer Motion",
      "Tailwind CSS",
    ],
  },
  {
    name: "Features of GPT-3",
    imgSrc: gpt3,
    type: "sub",
    source: {
      sourceCode: "https://github.com/lckien2912/gpt3",
      live: "https://gpt3-nu-one.vercel.app/",
    },
    description:
      'GPT-3 is a state-of-the-art language processing AI model developed by OpenAI. It stands for "Generative Pre-trained Transformer 3" and is capable of generating human-like text in a variety of styles and formats.',
    className: "",
    techStacks: ["React", "Typescript", "SASS"],
  },
];

export const FOOTER_LINK_ITEMS = [
  {
    title: (
      <img src={fbIcon} alt="Github" className="w-full h-full object-cover" />
    ),
    href: "https://www.facebook.com/kienismee/",
    className: "w-[36px]",
    target: "_blank",
  },
  {
    title: (
      <img
        src={githubIcon}
        alt="Github"
        className="w-full h-full object-cover"
      />
    ),
    href: "https://github.com/lckien2912",
    className: "w-[36px]",
    target: "_blank",
  },
  {
    title: (
      <img
        src={linkedinIcon}
        alt="Github"
        className="w-full h-full object-cover"
      />
    ),
    href: "https://www.linkedin.com/in/kienlc/",
    className: "w-[36px]",
    target: "_blank",
  },
];
