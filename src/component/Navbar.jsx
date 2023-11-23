/**
 * NavBar Component
 *
 * The navigation bar component displaying a logo, social media icons, and a user icon.
 *
 * @component
 * @example
 * // Example usage in another component or file:
 * import NavBar from './path/to/NavBar';
 * // ...
 * function AnotherComponent() {
 *   return (
 *     <NavBar />
 *   );
 * }
 */
import React from 'react';
import { data as media } from './data'; // Assuming data is imported from a data file
import style from './Navbar.module.css';

/**
 * NavBar functional component
 *
 * @returns {JSX.Element} The rendered NavBar component.
 */
const NavBar = () => {
  return (
    <div className={style.navheader}>
      {/* Logo Section */}
      <div className={style.icon}>
        <p>W</p>
        <p>📊</p>
      </div>

      {/* Social Media Icons Section */}
      <div className={style.socialmedia}>
        {/* rendering data using map i dont have any key that,s why iam not passing the key to the parent tag */}
        {media.map((a, index) => {
          return (
            <div key={index}>
              <p className={style.socialmedias}>{a}</p>
            </div>
          );
        })}
      </div>

      {/* User Icon Section */}
      <div>
        <p className={style.socialmedias1}>🧑‍💻</p>
      </div>
    </div>
  );
};

export default NavBar;
