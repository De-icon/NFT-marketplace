import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { User, Logo } from "../assets/img/icons/index";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "@/utils/AuthContext";



export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { user, logoutUser } = useAuth() ;

  // ... existing code ...

  const handleLogout = () => {
    logoutUser()
    // The navigation will be handled in the AuthContext after successful logout
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavItems = () => (
    <ul className={`font-WorkSans ${isMobile ? 'flex flex-col space-y-4' : 'flex space-x-6 items-center'}`}>
      <li className="hover:bg-secondary p-2 rounded-md">
        <NavLink to='/marketplace'>Marketplace</NavLink>
      </li>
      <li className="hover:bg-secondary p-2 rounded-md">
        <NavLink to='/ranking'>Ranking</NavLink>
      </li>
      <li className="hover:bg-secondary p-2 rounded-md">
        <NavLink to='/connectWallet'>Connect a Wallet</NavLink>
      </li>
      { user? 
        <li>
        <NavLink to='/register'>
          <Button className={isMobile ? 'w-full' : ''}>
            <img src={User} className="w-5 h-5 mr-2 bg-transparent" alt="User icon"/> Sign Up
          </Button>
        </NavLink>
      </li>
      :
      <li>
        
          <Button onClick={handleLogout} className={isMobile ? 'w-full' : ''}>
            <img src={User} className="w-5 h-5 mr-2 bg-transparent" alt="User icon"/> Log Out
          </Button>
        
      </li>

      }
    </ul>
  );

  return (
    <div className="w-full">
      <div className="w-full p-7">
        <div className="flex flex-row items-center justify-between">
          <NavLink to="/"><img className="w-52 cursor-pointer" src={Logo} alt="Logo" /></NavLink>
          
          {isMobile ? (
            <button onClick={toggleMenu} className="z-50">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          ) : (
            <nav>
              <NavItems />
            </nav>
          )}
        </div>
        {isMobile && (
          <nav className={`mt-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <NavItems />
          </nav>
        )}
      </div>
    </div>
  );
}