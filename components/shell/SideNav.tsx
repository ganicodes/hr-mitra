"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "../Icons";

const navlinks = [
  {
    title: "Home",
    href: "/dashboard",
    icon: "dashboard",
  },
  {
    title: "Recruitment",
    href: "/recruitment",
    icon: "recruitment",
  },
  {
    title: "My Details",
    href: "/my-details",
    icon: "profile",
  },
  {
    title: "LMS",
    href: "/trainings",
    icon: "trainings",
  },
  {
    title: "Admin Panel",
    href: "/admin",
    icon: "admin",
  },
];

const SideNav = () => {
  const pathname = usePathname();
  console.log("pathname: ", pathname);
  if (pathname === "/") return null;
  return (
    <div className="hidden w-[240px] flex-col border-r border-border md:flex">
      <nav className="grid items-start gap-2">
        {navlinks.map((item, index) => {
          const Icon = Icons[item.icon];
          return (
            item.href && (
              <Link key={index} href={item.href}>
                <span
                  className={cn(
                    "group flex items-center rounded-md px-3 py-2 font-medium hover:bg-accent",
                    pathname === item.href
                      ? "bg-secondary text-accent-foreground"
                      : "transparent"
                  )}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  <span>{item.title}</span>
                </span>
              </Link>
            )
          );
        })}
      </nav>
    </div>
  );
};

export default SideNav;
