import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Clapperboard,
  Compass,
  Heart,
  Home,
  LogOut,
  Menu,
  MessageCircle,
  Moon,
  PlusSquare,
  Save,
  Search,
  Settings,
  Sun,
  User,
} from "lucide-react";

export const SideBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [activeMenu, setActiveMenu] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  //for testing darkmode
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  //update mobile state when resizing
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //close menu when clicking outside of it
  const handleClickOutside = (event) => {
    if (
      !event.target.closest(".menu-dropdown") &&
      !event.target.closest(".menu-button")
    ) {
      setMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });

  const sections = [
    { link: "/", name: "Home", icon: <Home />, id: "home" },
    { link: "/search", name: "Search", icon: <Search />, id: "search" },
    { link: "/explore", name: "Explore", icon: <Compass />, id: "explore" },
    { link: "/reels", name: "Reels", icon: <Clapperboard />, id: "reels" },
    {
      link: "/messages",
      name: "Messages",
      icon: <MessageCircle />,
      id: "messages",
    },
    {
      link: "/notifications",
      name: "Notifications",
      icon: <Heart />,
      id: "notifications",
    },
    { link: "/create", name: "Create", icon: <PlusSquare />, id: "create" },
    { link: "/profile", name: "Profile", icon: <User />, id: "profile" },
    { link: "/more", name: "More", icon: <Menu />, id: "more" },
  ];

  const dropdown = [
    { link: "/settings", name: "Settings", icon: <Settings />, id: "settings" },
    { link: "/saved", name: "Saved", icon: <Save />, id: "save" },
    {
      link: "/darkmode",
      name: darkMode ? "Light mode" : "Dark mode",
      icon: darkMode ? <Sun /> : <Moon />,
      id: "darkmode",
    },
    { link: "/logout", name: "Log out", icon: <LogOut />, id: "logout" },
    { link: "/profile", name: "Profile", icon: <User />, id: "profile" },
  ];

  // Hide sidebar text for specific sections
  const hideText = ["search", "messages", "notifications"].includes(
    activeSection
  );

  return (
    <div
      className={` text-[var(--text-color)]
        ${
          isMobile
            ? "fixed bottom-0 w-full flex justify-around bg-[var(--white-color)] border-t-white p-2 shadow-lg "
            : "fixed left-0 top-0 h-full bg-[var(--white-color)] p-4 shadow-lg transition-all duration-300"
        } ${hideText ? "w-20" : "w-64"}
      `}
    >
      {!isMobile && (
        <div className="flex items-center mb-6 h-[40px]">
          <h1>
            <img
              src={"/logo-txt.png"}
              alt=""
              className={`w-[180px] ${hideText ? "hidden" : "block"}`}
            />
          </h1>
          <h1>
            <img
              src={"/logo-img.png"}
              alt=""
              className={`w-[40px] ${hideText ? "block" : "hidden"}`}
            />
          </h1>
        </div>
      )}

      <nav
        className={`flex ${
          isMobile ? "w-full justify-around" : "flex-col space-y-4"
        }`}
      >
        {sections
          .filter(
            (section) =>
              !(
                isMobile &&
                ["profile", "notifications", "explore", "create"].includes(
                  section.id
                )
              )
          )
          .map((section) => (
            <Link key={section.id} to={section.link}>
              <button
                className={`flex space-x-2 items-center w-full p-2 transition menu-button ${
                  activeSection === section.id
                    ? "bg-[var(--selecting-color)] rounded-lg "
                    : "hover:bg-[var(--hover-color)] rounded-lg"
                }`}
                onClick={() =>
                  section.id === "more"
                    ? setMenuOpen(!menuOpen)
                    : setActiveSection(section.id)
                }
              >
                {React.cloneElement(section.icon, {
                  strokeWidth: activeSection === section.id ? 3 : 2,
                })}

                {!isMobile && (
                  <span className={`${hideText ? "hidden" : "block"}`}>
                    {section.name}
                  </span>
                )}
              </button>
            </Link>
          ))}

        {menuOpen && (
          <div
            className={`absolute ${
              isMobile ? "right-2 bottom-12" : " top-[40%] "
            } bg-[var(--white-color)] shadow-lg rounded-3xl flex flex-col w-72 space-y-2 justify-around px-5 py-4 menu-dropdown`}
          >
            {dropdown
              .filter(
                (dropdown) => !(!isMobile && ["profile"].includes(dropdown.id))
              )
              .map((dropdown) => (
                <Link key={dropdown.id} to={dropdown.link}>
                  <button
                    className={`flex space-x-2 items-center p-2 w-full ${
                      activeMenu === dropdown.id
                        ? "bg-[var(--selecting-color)] rounded-lg "
                        : "hover:bg-[var(--hover-color)] rounded-lg"
                    }`}
                    onClick={() => {
                      setActiveMenu(dropdown.id);
                      if (dropdown.id === "darkmode") setDarkMode(!darkMode);
                    }}
                  >
                    {React.cloneElement(dropdown.icon, {
                      strokeWidth: activeMenu === dropdown.id ? 3 : 2,
                    })}
                    <span>{dropdown.name}</span>
                  </button>
                </Link>
              ))}
          </div>
        )}
      </nav>
    </div>
  );
};
