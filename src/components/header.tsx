import Link from "next/link";
import { Menu } from "lucide-react";   // Import the hamburger menu icon from lucide-react
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet";  // Import the sheet component from ShadCN


export default function Header() {
  
  return (
    <header className="flex justify-between items-center bg-gray-800 text-white px-6 py-3">
      {/* Logo Section */}
      <div className="text-2xl font-semibold italic">
        RS Computers
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex gap-x-7">
          <li className="hover:text-yellow-400">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link href="/about">About Us</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Mobile Menu Button (Hamburger Icon) using ShadCN Button */}
      <div className="md:hidden">
                            <Sheet>
  <SheetTrigger> <Menu className=" text-white"/> </SheetTrigger>
  <SheetContent>
  <nav>
        <ul>
          <li className="hover:text-yellow-400">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link href="/about">About Us</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
  </SheetContent>
</Sheet>
</div>
</header>
);
}
