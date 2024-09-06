import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

export default function Navbar({ onLoginClicked }) {
  const [isScrolledBody, setScrolledBody] = useState(false);
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  useEffect(() => {
    const onScrollParent = (event) => {
      if (event.target.documentElement.scrollTop > 100) {
        setScrolledBody(true);
      } else {
        setScrolledBody(false);
      }
    };

    document.addEventListener("scroll", onScrollParent);

    return () => {
      document.removeEventListener("scroll", onScrollParent);
    };
  }, []);

  return (
    <nav
      className={`transition fixed left-0 right-0 top-0 flex items-center bg-gray-800 text-white py-6 md:py-0 ${
        isScrolledBody ? "md:h-16" : "md:h-20"
      }`}
      style={{
        transition: ".4s height ease",
      }}
    >
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div
          className={`flex justify-between w-full md:w-fit ${
            showMenuMobile ? "mb-4" : "mb-0"
          } md:mb-0`}
          onClick={() => setShowMenuMobile(!showMenuMobile)}
        >
          <div className="logo font-bold text-3xl font-mono">Altech</div>

          <button className="text-3xl md:hidden">
            <IoMenu />
          </button>
        </div>

        <ul
          className={`md:items-center gap-4 md:gap-8 text-lg flex flex-col md:flex-row w-full md:w-fit md:h-full ${
            showMenuMobile ? "" : "h-0 overflow-hidden"
          }`}
        >
          <li className="hover:text-secondary">
            <a href="#footer">About</a>
          </li>
          <li className="hover:text-secondary">
            <a href="#pricing">Pricing</a>
          </li>
          <li className="hover:text-secondary mb-1 md:mb-0">
            <a href="#contact">Contact</a>
          </li>
          <li>
            <button
              onClick={onLoginClicked}
              className="text-base w-full border-2 py-1.5 px-8 rounded border-secondary text-secondary font-semibold hover:bg-secondary hover:text-white transition"
            >
              LOGIN
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
