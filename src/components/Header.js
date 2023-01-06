import React from 'react';


export class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <a className="Header__logo">Logo</a>
        <nav className="Header__navigation">
          <ul className="Header__menu-list">
            <li className="Header__menu-item">
                <a>Home</a>
            </li>
            <li className="Header__menu-item">
                <a>About</a>
            </li>
            <li className="Header__menu-item">
                <a>Blog</a>
            </li>
            <li className="Header__menu-item">
                <a>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}