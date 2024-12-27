import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav aria-label="Main Navigation" className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/" aria-label="Home Page"></NavLink>
        </li>
        <li>
          <NavLink to="/pricing" aria-label="Pricing Page">
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" aria-label="Product Page">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={styles.ctaLink}
            aria-label="Product Page"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
