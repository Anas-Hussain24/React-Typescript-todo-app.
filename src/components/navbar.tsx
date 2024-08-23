import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const getLinkClasses = (path: string) =>
    `px-4 py-2 rounded-lg transition-colors duration-200 ${
      location.search === path
        ? "bg-secondary text-white"
        : "text-primary hover:bg-secondary hover:text-white"
    }`;

  return (
    <nav className="flex justify-around mb-6">
      <Link to="/" className={getLinkClasses("")}>
        All
      </Link>
      <Link to="/?todos=active" className={getLinkClasses("?todos=active")}>
        Active
      </Link>
      <Link to="/?todos=completed" className={getLinkClasses("?todos=completed")}>
        Completed
      </Link>
    </nav>
  );
};

export default Navbar;
