import React from 'react';
import '../styles/Footer.css';

const socials = [
  { icon: 'ti-brand-github',   href: 'https://github.com/Mrunal-Raundale',                title: 'GitHub'   },
  { icon: 'ti-brand-linkedin', href: 'https://www.linkedin.com/in/mrunal-raundale/',       title: 'LinkedIn' },
  { icon: 'ti-mail',           href: 'mailto:mrunal0.com@gmail.com',                        title: 'Email'    },
];

function Footer() {
  return (
    <footer className="footer">
      <a className="footer-logo" href="#">
        MR<span>.</span>
      </a>

      <p>© 2026 Mrunal Raundale — Built with the MERN stack</p>

      <div className="footer-socials">
        {socials.map((s) => (
          <a
            key={s.title}
            className="footer-social"
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            title={s.title}
          >
            <i className={`ti ${s.icon}`}></i>
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
