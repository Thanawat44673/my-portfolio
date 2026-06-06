import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
];

export default function Navbar() {
    const { theme, toggle } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <a href="#hero" className="navbar-logo">Thanawat</a>

                <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <a href={link.href} onClick={() => setMenuOpen(false)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="navbar-right">
                    <button
                        className="theme-toggle"
                        onClick={toggle}
                        aria-label="Toggle theme"
                        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        <div className="toggle-track">
                            <div className="toggle-thumb">
                                {theme === 'dark' ? '🌙' : '☀️'}
                            </div>
                        </div>
                    </button>

                    <button
                        className={`hamburger ${menuOpen ? 'active' : ''}`}
                        onClick={() => setMenuOpen(o => !o)}
                        aria-label="Menu"
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </div>
        </nav>
    );
}
