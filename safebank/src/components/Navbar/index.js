import React from 'react';
import './navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className='navbar__lista'>
        <li className='navbar__links'><a href="#home">
                <img 
                    src='/imagens/home_icon.png' 
                    alt='icone Home'
                />
            </a>
        </li>
        <li className='navbar__links'><a href="#about" className='navbar__link'>
                <img 
                    src='/imagens/carteira_icon.png' 
                    alt='icone de carteira'
                />
            </a>
        </li>
        <li className='navbar__links'><a href="#services">
                <img 
                    src='/imagens/notificacao_icon.png' 
                    alt='icone de notificação'
                />
            </a>
        </li>
        <li className='navbar__links'><a href="#contact">
                <img s
                    src='/imagens/config_icon.png' 
                    alt='icone de configuração'
                />
            </a>
        </li>
      </ul>
    </nav>
  );
};
