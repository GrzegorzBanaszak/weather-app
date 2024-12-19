import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="px-4 py-6 bg-blue-900 text-white md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div className="font-bold">Pogodynka</div>
          <div className="md:hidden">
            <GiHamburgerMenu size={24} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
        <ul
          className={`mt-4 text-center ${
            isOpen ? "block" : "hidden"
          } md:flex md:gap-2 md:items-center md:mt-0`}
        >
          <li className="py-2">Strona główna</li>
          <li className="py-2">Twoja lokalizacja</li>
          <li className="py-2">Ulubione</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
