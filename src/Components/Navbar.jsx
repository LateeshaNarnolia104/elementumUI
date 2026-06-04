import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 lg:px-16 py-6">
      <h1 className=" font-heading text-2xl md:text-3xl font-semibold">
        Elementum
      </h1>

      <ul className="hidden md:flex gap-8 text-sm">
        <li>Home</li>
        <li>Studio</li>
        <li>Services</li>
        <li>Contact</li>
        <li>FAQs</li>
      </ul>

      <Menu className="md:hidden" />
    </nav>
  );
};

export default Navbar;