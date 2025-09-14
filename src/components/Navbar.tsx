"use client";
import {
  Folder,
  Brush,
  Eraser,
  Video,
  Home,
  Pen,
  ImageIcon,
  ChevronDown,
  Bell,
  Headset,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
const navlinks: Navlink[] = [
  { icon: <Home />, href: "/" },
  { icon: <ImageIcon />, href: "#" },
  { icon: <Video />, href: "#" },
  { icon: <Pen />, href: "#" },
  { icon: <Brush />, href: "#" },
  { icon: <Eraser />, href: "#" },
  { icon: <Folder />, href: "#" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2">
        <Image
          src="/icons/kreaLogo.svg"
          alt="logo"
          width={24}
          height={24}
          className=" dark:invert"
        />
        <Avatar>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="font-medium">benevolentnimblebat</span>
        <ChevronDown />
      </div>
      <div className="bg-accent rounded-lg px-1 py-1">
        {navlinks.map((link, index) => (
          <Button
            variant="ghost"
            key={index}
            className={
              pathname === link.href
                ? "bg-white dark:text-black dark:hover:bg-white"
                : "transparent"
            }
          >
            <Link href={link.href}>{link.icon}</Link>
          </Button>
        ))}
      </div>
      <div className="flex gap-4">
        <Button variant="ghost" size="sm">
          Gallery
          <ImageIcon />
        </Button>
        <Button variant="ghost" size="sm">
          Support
          <Headset />
        </Button>
        <ThemeToggle />
        <Button variant="ghost" size="sm">
          <Bell />
        </Button>
        <Avatar>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Navbar;
