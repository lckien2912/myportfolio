import { NavItem } from "@/components";
import { FOOTER_LINK_ITEMS } from "@/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative z-2">
      <div className="mx-auto  flex flex-col items-center justify-between gap-4 p-5">
        <div className="flex gap-5">
          {FOOTER_LINK_ITEMS.map(({ title, href, className, target }) => (
            <NavItem
              key={href}
              href={href}
              title={title}
              className={className}
              target={target}
              variants="ghost"
            />
          ))}
        </div>
        <p className="text-center text-xs text-black select-none">
          &copy; {currentYear} Created by Kien Le. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
