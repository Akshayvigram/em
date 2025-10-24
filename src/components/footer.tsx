import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      {/* ---------- Main Footer Content ---------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* ---------- Column 1: Logo & Description ---------- */}
        <div>
          <h2 className="text-lg font-bold text-[#8dc201] mb-3">EASEMILKER</h2>
            <p className="text-xs leading-relaxed text-gray-300 mb-4">
            EaseMilker is an automated smart milking system that ensures
            hygienic, efficient, and stress-free milking for cows.
            </p>
          <div className="flex items-center gap-4 text-lg space-x-4">
            <a href="#" className="hover:text-[#8dc201]">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-[#8dc201]">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-[#8dc201]">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="hover:text-[#8dc201]">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" className="hover:text-[#8dc201]">
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </div>

        {/* ---------- Column 2: Quick Links ---------- */}
        <div>
            <h3 className="font-semibold mb-3 text-lg">Quick Links</h3>
            <ul className="space-y-1 text-xs text-gray-300">
            <li><a href="#" className="hover:text-[#8dc201]">Home</a></li>
            <li><a href="#" className="hover:text-[#8dc201]">Shop</a></li>
            <li><a href="#" className="hover:text-[#8dc201]">Mobile App</a></li>
            <li><a href="#" className="hover:text-[#8dc201]">Review</a></li>
            <li><a href="#" className="hover:text-[#8dc201]">Helpline</a></li>
            </ul>
        </div>

        {/* ---------- Column 3: Products ---------- */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Products</h3>
          <ul className="space-y-1 text-xs text-gray-300">
            <li>Basic Package</li>
            <li>Milk Testing Package</li>
            <li>STM32 Controller</li>
            <li>Sensor System</li>
          </ul>
        </div>

        {/* ---------- Column 4: Contact Info ---------- */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Contact Info</h3>
          <ul className="space-y-2 text-xs text-gray-300">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-[#8dc201]" />
              <span>+91 9789889776</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-[#8dc201]" />
              <span>azhizensolutions@gmail.com</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="text-[#8dc201] mt-1" />
              <span>
                R-NO:309, Mercury Block<br />
                KSRCE, Tiruchengode,<br />
                Namakkal, Tamil Nadu
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* ---------- Divider ---------- */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-xs text-gray-400 -mx-6">
        © EaseMilker Copy Rights
      </div>
    </footer>
  );
};