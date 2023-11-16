// Logo
import logo from "../../svg/logo.svg";

// Importa o React e a função useState de React, que é usada para adicionar estado a componentes funcionais.
import React, { useState } from "react";

const Header = () => {
  // Estado e Funções de Manipulação de Estado:

  // Usa o hook useState para criar uma variável de estado chamada 'active' e uma função para atualizá-la chamada 'setActive'. O estado inicial de 'active' é false.
  const [active, setActive] = useState(false);

  // função handleToggleMenu: Inverte o valor de 'active'.
  const handleToggleMenu = () => {
    setActive(!active);
  };

  return (
    <>
      {/* <!-- =========== MENU DESKTOP =========== --> */}
      <header>
        <nav className="flex-space px-2">
          <div>
            <a href="">
              <img src={logo} className="logo" alt="" />
            </a>
          </div>

          <div className="flex-end-row">
            <div className={`bx ${active ? 'active' : ''}`} onClick={handleToggleMenu}></div>

            <ul className="menu flex">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">New</a>
              </li>
              <li>
                <a href="">Popular</a>
              </li>
              <li>
                <a href="">Trending</a>
              </li>
              <li>
                <a href="">Categories</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* <!--=========== MENU MOBILE ===========--> */}
      <div className="relative">
        <div className={`menu-mobile ${active ? 'showmenu' : ''}`}>
          <ul className="nav-mobile">
            <li>
              <a href="#" className="link-menu-mobile">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="link-menu-mobile">
                New
              </a>
            </li>
            <li>
              <a href="#" className="link-menu-mobile">
                Popular
              </a>
            </li>
            <li>
              <a href="#" className="link-menu-mobile">
                Trending
              </a>
            </li>
            <li>
              <a href="#" className="link-menu-mobile">
                Categories
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
