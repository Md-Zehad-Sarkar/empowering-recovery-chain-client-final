import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <div className="h-full">
      <h2 className="flex items-center justify-center gap-2 text-xl font-bold truncate">
        <LayoutDashboard /> Dashboard
      </h2>
      <ul className="flex items-center justify-center px-2 mt-4 space-y-3 text-xl md:flex-col md:justify-start text-start">
        <motion.li whileTap={{ scale: 0.9 }}>
          <Button variant="secondary" className="hover:bg-slate-200 w-28">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </Button>
        </motion.li>
        <motion.li whileTap={{ scale: 0.90 }}>
          <Button variant="secondary" className="hover:bg-slate-200 w-28">
            <NavLink to="/dashboard/supplies">All-Supply</NavLink>
          </Button>
        </motion.li>
        <motion.li whileTap={{ scale: 0.90 }}>
          <Button variant="secondary" className="hover:bg-slate-200 w-28">
            <NavLink to="/dashboard/create-supply">Add-Supply</NavLink>
          </Button>
        </motion.li>
        <motion.li whileTap={{ scale: 0.90 }}>
          <Button variant="secondary" className="hover:bg-slate-200 w-28">
            <NavLink to="/">Go to Home</NavLink>
          </Button>
        </motion.li>
      </ul>
    </div>
  );
};

export default Sidebar;
