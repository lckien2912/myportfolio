import nameIcon from "@/assets/name-card-icon_31834.png";
import educationIcon from "@/assets/3069198-cap-education-hat-school_112714 (1).png";
import emailIcon from "@/assets/google_mail_gmail_logo_icon_159346.png";
import jobIcon from "@/assets/job_employment_find_recuitment_seeker_icon_192532.png";
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
  { title: "Home", href: "#home", className: "" },
  { title: "About", href: "#about", className: "" },
  {
    title: "Experiences & Skills",
    href: "#experiencesAndSkills",
    className: "",
  },
  { title: "Projects", href: "#projects", className: "" },
  {
    title: "Contact",
    href: "#contact",
    className: "px-4 py-2 bg-primary-black text-white rounded-xl",
  },
];

export const HELLO_LINK_ITEMS = [
  {
    title: (
      <img src={fbIcon} alt="Github" className="w-full h-full object-cover" />
    ),
    href: "https://www.facebook.com/kienismee/",
    className: "w-[48px]",
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
    className: "w-[48px]",
    target: "_blank",
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
    className: "w-[48px]",
    target: "_blank",
  },
];

export const DETAIL_ITEMS = [
  {
    title: "Name",
    description: "Le Chi Kien",
    iconLink: nameIcon,
  },
  {
    title: "Education",
    description: "PTIT (Graduated)",
    iconLink: educationIcon,
  },
  {
    title: "Email",
    description: "lechikien123@gmail.com",
    iconLink: emailIcon,
  },
  {
    title: "Employment",
    description: "Open",
    iconLink: jobIcon,
  },
];

export const PROJECTS = [
  {
    name: "The Keyboard Store",
    imgSrc: tksImg,
    type: "main",
    source: {
      sourceCode: "https://e-commerce-store-lime.vercel.app/",
      live: "https://e-commerce-store-lime.vercel.app/",
    },
    admin: {
      sourceCode: "https://e-commerce-store-lime.vercel.app/",
      live: "https://e-commerce-store-lime.vercel.app/",
    },
    description:
      "Are you interested in mechanical keyboard? You find the right place to explore more the best mechanical keyboard in the world.",
    className: "",
    techStacks: [
      "React",
      "Next.js",
      "Shadcn",
      "Tailwind",
      "React Hook Form",
      "Prisma",
      "Stripe",
    ],
  },
  {
    name: "Metaversus",
    imgSrc: metaversus,
    type: "sub",
    source: {
      sourceCode: "https://e-commerce-store-lime.vercel.app/",
      live: "https://e-commerce-store-lime.vercel.app/",
    },
    description:
      "Are you interested in mechanical keyboard? You find the right place to explore more the best mechanical keyboard in the world.",
    className: "",
    techStacks: [
      "React",
      "Next.js",
      "Shadcn",
      "Tailwind",
      "React Hook Form",
      "Prisma",
      "Stripe",
    ],
  },
  {
    name: "GPT-3",
    imgSrc: gpt3,
    type: "sub",
    source: {
      sourceCode: "https://e-commerce-store-lime.vercel.app/",
      live: "https://e-commerce-store-lime.vercel.app/",
    },
    description:
      "Are you interested in mechanical keyboard? You find the right place to explore more the best mechanical keyboard in the world.",
    className: "",
    techStacks: [
      "React",
      "Next.js",
      "Shadcn",
      "Tailwind",
      "React Hook Form",
      "Prisma",
      "Stripe",
    ],
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
