import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Dropdown from "./ui/Dropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCampusOpen, setIsCampusOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  const campuses = [
    { name: "Main Campus", path: "/campuses/main" },
    { name: "Law Campus", path: "/campuses/law" },
    { name: "Hala Campus", path: "/campuses/hala" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Admissions", path: "/admissions" },
    { name: "Faculty", path: "/faculty-info" },
    { name: "Gallery", path: "/gallery" },
    { name: "News & Events", path: "/news-events" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <div className="relative overflow-visible rounded-2xl border border-neutral-200/70 bg-white/85 backdrop-blur shadow-[0_10px_40px_rgba(67,56,202,0.08)]">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6">
            {/* Logo */}
            <Link to="/" className="block">
              <p className="text-xs text-neutral-500">Best Group</p>
              <h1 className="text-lg font-semibold text-neutral-900">
                Colleges & LMS
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.path)
                      ? "text-primary-700 bg-primary-50 font-semibold"
                      : "text-neutral-600 hover:text-primary-700 hover:bg-neutral-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Dropdown trigger="Campuses" items={campuses} />

              <Link
                to="/admissions"
                className={`ml-3 inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg transition ${
                  isActive("/admissions")
                    ? "text-white bg-gradient-to-r from-primary-700 to-accent-700 shadow-md"
                    : "text-white bg-gradient-to-r from-primary-600 to-accent-600 shadow hover:shadow-md"
                }`}
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  setIsCampusOpen(false);
                }}
                className="p-2 rounded-lg text-neutral-500 hover:text-primary-700 hover:bg-neutral-100 transition"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden border-t border-neutral-200 bg-white px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition ${
                    isActive(link.path)
                      ? "text-primary-700 bg-primary-50 font-semibold border-l-4 border-primary-700"
                      : "text-neutral-600 hover:text-primary-700 hover:bg-neutral-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Campuses Dropdown */}
              <div>
                <button
                  onClick={() => setIsCampusOpen(!isCampusOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-neutral-600 hover:text-primary-700 hover:bg-neutral-100 transition"
                >
                  Campuses
                  <span className="text-lg">
                    {isCampusOpen ? "−" : "+"}
                  </span>
                </button>

                {isCampusOpen && (
                  <div className="ml-3 mt-1 space-y-1">
                    {campuses.map((campus) => (
                      <Link
                        key={campus.name}
                        to={campus.path}
                        onClick={() => {
                          setIsOpen(false);
                          setIsCampusOpen(false);
                        }}
                        className={`block px-3 py-2 rounded-lg text-sm transition ${
                          isActive(campus.path)
                            ? "text-primary-700 bg-primary-50 font-semibold border-l-4 border-primary-700"
                            : "text-neutral-600 hover:text-primary-700 hover:bg-neutral-100"
                        }`}
                      >
                        {campus.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Apply Button */}
              <Link
                to="/admissions"
                onClick={() => setIsOpen(false)}
                className={`block w-full text-center px-4 py-2 mt-2 rounded-lg text-sm font-semibold transition ${
                  isActive("/admissions")
                    ? "text-white bg-gradient-to-r from-primary-700 to-accent-700 shadow-md"
                    : "text-white bg-gradient-to-r from-primary-600 to-accent-600 shadow hover:shadow-md"
                }`}
              >
                Apply Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
