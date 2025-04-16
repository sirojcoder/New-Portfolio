'use client'
import Link from "next/link";
import Socials from '../components/Socials';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5"; // X tugmasi uchun icon

const Header = () => {
  const [showLangMenu, setShowLangMenu] = useState(false);

  const toggleLanguageMenu = () => {
    setShowLangMenu(prev => !prev);
  };

  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/*  logo  */}
          <Link href={'/'} className=" text-4xl md:text-3xl font-semibold">
            S|R
          </Link>

          {/* Til tanlash tugmasi */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <button
              onClick={toggleLanguageMenu}
              className="w-[50px] h-[20px] bg-white rounded-lg flex items-center justify-center"
            >
            </button>

            {/* AnimatePresence orqali ochiladigan menyu */}
            <AnimatePresence>
              {showLangMenu && (
                <motion.div
                initial={{ left: '50%', opacity: 0, top: -30 }}
                animate={{ left: '50%', opacity: 1, top: 12 }}
                exit={{ left: '50%', opacity: 0, top: -30 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-12 left-1/2 right-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md w-[190px] h-[90px] rounded-xl shadow-lg p-3 flex flex-col items-center justify-center gap-2 z-50"
                >
                  <button
                    className="absolute top-1 right-1 text-white"
                    onClick={toggleLanguageMenu}
                  >
                    <IoClose size={20} />
                  </button>
                  <p className="text-sm text-center text-white">Choose a language</p>
                  <div className="flex justify-center gap-4">
                    <button className="text-xs font-semibold bg-white/70 text-black px-3 py-1 rounded-md hover:bg-white">UZ</button>
                    <button className="text-xs font-semibold bg-white/70 text-black px-3 py-1 rounded-md hover:bg-white">EN</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
