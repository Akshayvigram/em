import { Link, Outlet, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";
import { PopNotify } from "../screens/PopNotify";

const navigationItems = [
  { label: "HOME", path: "/", color: "text-[#092944]" },
  { label: "SHOP", path: "/shop", color: "text-[#042a4b]" },
  { label: "MOBILE APP", path: "/mobile-app", color: "text-[#8dc201]" },
  // { label: "REVIEWS", path: "/reviews", color: "text-[#092944]" },
  { label: "CONTACT", path: "/contact", color: "text-[#092944]" },
];

export const Layout = (): JSX.Element => {
  const location = useLocation();
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);

  return (
    <div className="bg-[#ddefff] w-full min-w-[1440px] min-h-screen flex flex-col">
      <header className="w-full h-[120px] bg-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.2),0px_2px_4px_-1px_rgba(0,0,0,0.12)] relative z-10">
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-[calc(50%-513px)]">
          <Link to="/" className="relative w-44 h-[55px]">
            <div className="absolute top-0 left-[34px] w-[140px] [font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-[#012e43] text-[13.5px] tracking-[0] leading-[13.5px]">
              Ease Milker
            </div>

            <img
              className="absolute top-3 left-3.5 w-[123px] h-[43px]"
              alt="Group"
              src="/group-19.png"
            />

            <img
              className="absolute top-px left-0 w-[18px] h-2.5"
              alt="Vector"
              src="/vector-37.svg"
            />

            <img
              className="absolute top-[13px] left-[9px] w-[11px] h-1.5"
              alt="Group"
              src="/group-20.png"
            />
          </Link>

          <nav className="flex items-center gap-[25px]">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`[font-family:'Mochiy_Pop_P_One',Helvetica] font-normal ${
                  location.pathname === item.path ? "text-[#8dc201]" : "text-[#092944]"
                } text-[12.4px] tracking-[0] leading-[normal] hover:scale-110 transition-all duration-300 ease-in-out`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button 
            onClick={() => setIsOrderDialogOpen(true)}
            className="w-[99px] h-[29px] bg-[#8dc201] hover:bg-[#7ab001] rounded-[7.09px] [font-family:'Mochiy_Pop_P_One',Helvetica] font-normal text-white text-[12.4px] tracking-[0] leading-[normal]"
          >
            BUY NOW
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <PopNotify 
        isOpen={isOrderDialogOpen}
        onOpenChange={setIsOrderDialogOpen}
      />
    </div>
  );
};
