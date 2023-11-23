

/**
 * App Component
 *
 * The main component representing the structure of the application.
 * It includes a navigation bar (Navbar) and the main content area (Main).
 *
 * @component
 * @example
 * // Example usage in another component or file:
 * import App from './path/to/App';
 * // ...
 * function AnotherComponent() {
 *   return (
 *     <App />
 *   );
 * }
 */
import React from 'react';
import Navbar from './component/Navbar.jsx';
import Main from './component/Main.jsx';
import style from './component/app.module.css';

/**
 * App function component
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <section className={style.main}>
      {/* Navigation Bar component */}
      <Navbar />

      {/* Main Content Area component */}
      <Main />
    </section>
  );
}

export default App;
