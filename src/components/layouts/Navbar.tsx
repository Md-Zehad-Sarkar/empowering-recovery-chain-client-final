import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Link, NavLink } from "react-router-dom";
import { logoutUser } from "@/redux/features/auth/authSlice";
import logo from "@/assets/logo.png";
import { motion } from "framer-motion";
import { darkMode } from "@/redux/features/theme/themeSlice";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { themeMode } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const handleChangeTheme = () => {
    dispatch(darkMode());
  };

  const navmenu = (
    <>
      {user && user ? (
        <>
          <motion.li whileTap={{ scale: 0.9 }}>
            <NavLink to="/" className="px-2 py-1 rounded-md hover:bg-slate-200">
              Home
            </NavLink>
          </motion.li>
          <motion.li whileTap={{ scale: 0.9 }}>
            <NavLink
              to="/all-supplies"
              className="px-2 py-1 rounded-md hover:bg-slate-200"
            >
              All-Supplies
            </NavLink>
          </motion.li>
          <motion.li whileTap={{ scale: 0.9 }}>
            <NavLink
              to="/dashboard"
              className="px-2 py-1 rounded-md hover:bg-slate-200"
            >
              Dashboard
            </NavLink>
          </motion.li>
          <motion.li whileTap={{ scale: 0.9 }}>
            <button
              onClick={() => dispatch(logoutUser())}
              className="px-2 py-1 rounded-md hover:bg-slate-200"
            >
              Logout
            </button>
          </motion.li>
        </>
      ) : (
        <>
          <motion.li whileTap={{ scale: 0.9 }}>
            <NavLink to="/" className="px-2 py-1 rounded-md hover:bg-slate-200">
              Home
            </NavLink>
          </motion.li>
          <motion.li whileTap={{ scale: 0.9 }}>
            <NavLink
              to="/all-supplies"
              className="px-2 py-1 rounded-md hover:bg-slate-200"
            >
              All-Supplies
            </NavLink>
          </motion.li>
          <motion.li whileTap={{ scale: 0.9 }}>
            <NavLink
              to="/login"
              className="px-2 py-1 rounded-md hover:bg-slate-200"
            >
              Login
            </NavLink>
          </motion.li>
        </>
      )}
    </>
  );

  return (
    <header className="flex items-center gap-4 px-6 py-4 rounded-sm lg:justify-between md:flex bg-slate-50">
      <div className="items-center gap-2 text-3xl font-bold md:flex text-violet-500">
        <Link to="/">
          <img src={logo} alt="" className="w-12 h-12" />
        </Link>
        Empower <span className="text-orange-400">Recovery</span> Chain
      </div>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 120 }}
      >
        <ul className="flex flex-wrap items-center justify-between space-x-4 text-xl font-medium">
          {navmenu}
          <div>
            <button onClick={handleChangeTheme}>
              {themeMode ? <Moon /> : <Sun />}
            </button>
          </div>
        </ul>
      </motion.nav>
    </header>
  );
};

export default Navbar;
