"use client";
import { siteConfig } from "@/config/site";
import { BellIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "../Icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import AttendanceButton from "./AttendanceButton";

const Header = () => {
  const path = usePathname();
  if (path === "/") {
    return (
      <div className="py-2 px-4 shadow flex justify-between items-center gap-16 bg-primary text-background">
        <div className="basis-2/12 h-8">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Icons.logo />
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="py-2 px-4 shadow flex justify-between items-center gap-16 bg-primary text-background">
      <div className="basis-2/12">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <Icons.logo />
          <span className="hidden font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>
      </div>
      <div className="basis-10/12 items-center flex text-sm gap-2 justify-between">
        <div className="">
          <p>
            Checked in at: <span>09:30 AM</span>
          </p>
          <div>
            Recent Check{" "}
            <Badge className="cursor-default" variant="success">
              Out
            </Badge>
          </div>
        </div>
        <div className="">
          <p>
            Total Hours: <span>00:00</span>
          </p>
          <p>
            Week Total Hours: <span>00:00</span>
          </p>
        </div>
        <div className="">
          <p>
            Actual Working Hours: <span>00:00</span>
          </p>
          <p>
            Week Actual Hours: <span>00:00</span>
          </p>
        </div>
        <div className="flex gap-x-2">
          <Button variant="outline" size="icon" className="text-foreground">
            <BellIcon className="h-4 w-4" />
          </Button>
          <AttendanceButton />
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
