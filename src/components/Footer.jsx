const year = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <p className="footer-copy">
                    © {year} — Designed & Built by <span>Thanawat Kruangkrai</span> with ❤️
                </p>
                <div className="footer-links">
                    <a href="#hero">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </footer>
    );
}
