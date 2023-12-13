import Link from "next/link";
import styles from './navBar.module.css'

export default function Navigation() {
  return (
    <>
    <header className={styles.header}>

      <Link className={styles.headerLogo} href="/">MCP STUDIOS</Link>
      <input className={styles.headerInput} type="checkbox" id="checkbox"></input> 
      
      <label className={styles.headerLabel}for="checkbox">
      <svg className={styles.headerMenuIcon}class="menu-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M4 18h16M4 12h16M4 6h16" stroke="#000000" stroke-width="2" stroke-linecap="round"/></g></svg> 
      <svg className={styles.headerMenuClose}class="close-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M20.746 3.329a1 1 0 0 0-1.415 0l-7.294 7.294-7.294-7.294a1 1 0 1 0-1.414 1.414l7.294 7.294-7.294 7.294a1 1 0 0 0 1.414 1.415l7.294-7.295 7.294 7.295a1 1 0 0 0 1.415-1.415l-7.295-7.294 7.295-7.294a1 1 0 0 0 0-1.414Z" fill="#0F0F0F"/></g></svg>
      </label>

      <nav className={styles.headerNav}>
            <Link className={styles.headerNavLink} href="/blog">Blog</Link>
            <Link className={styles.headerNavLink} href="/about">About</Link>
            <Link className={styles.headerNavLink} href="/test">Test</Link>
      </nav>

      </header>
    </>
  );
}
