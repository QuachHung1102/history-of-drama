import Link from "next/link";
import '../styles/header.css'

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <h1 className="header-title">History of Drama</h1>
      </Link>
      <nav className="header-nav">
        <ul>
          <li>
            <Link href="/timeline">Timeline</Link>
          </li>
          <li>
            <Link href="/musical-series">Musical series</Link>
          </li>
          <li>
            <Link href="/composer">Composer</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}