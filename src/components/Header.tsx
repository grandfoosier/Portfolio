import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header.module.css";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Timeline", path: "/timeline" },
    { name: "Skills", path: "/skills" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          {"{/}"}
        </NavLink>

        {/* Desktop Nav */}
        <nav className={styles.navDesktop}>
          <ul className={styles.nav}>
            {navItems.map((item) => (
              <li
                key={item.name}
                className={location.pathname === item.path ? styles.active : ""}
              >
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.active : ""}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.rightControls}>
          <ThemeToggle />
          <button
            className={`${styles.menuButton} ${menuOpen ? styles.active : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <FiMenu size={28} />
          </button>
        </div>
      </div>

      {/* Backdrop + Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className={styles.backdrop}
              onClick={closeMenu}
              initial={{ opacity: 0, x: 0 }}
              // animate={{ opacity: 0.4, x: -10 }}   // 👈 subtle left shift
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />

            {/* Drawer */}
            <motion.nav
              className={styles.navMobile}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <ul>
                {navItems.map((item) => (
                  <li key={item.name} onClick={closeMenu}>
                    <NavLink to={item.path}>{item.name}</NavLink>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

    </header>
  );
}