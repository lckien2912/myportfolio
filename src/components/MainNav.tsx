import { NavItem } from "@/components";
import { NAV_ITEMS } from "@/constants";
import { cn } from "@/utils";

interface MainNavProps {
  className?: string;
}

const MainNav: React.FC<MainNavProps> = ({ className }) => {
  return (
    <nav className={cn("flex items-center gap-4", className)}>
      {NAV_ITEMS.map(({ title, href, className, variants }) => (
        <NavItem
          key={href}
          href={href}
          title={title}
          className={className}
          variants={variants}
        />
      ))}
    </nav>
  );
};

export default MainNav;
