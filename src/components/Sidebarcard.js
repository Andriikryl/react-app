import React from 'react';
import logo from "../logo.svg"

export class Sidebarcard extends React.Component {
    render() {
      return (
            <article className="sidebar__card">
                <div className="sibar__box">
                <p className="sidebar__prev">About the author</p>
                </div>
                <div className="sidebar__box-img">
                      <img src={logo} alt="logo"></img>
                </div>
                <h3 className="sidebar__titel">Kate Willems</h3>
                <p className="sidebar__info">Food & cooking bloger</p>
                <p className="sidebar__text">Hi, I'm Sonia. Cooking is the way I express my creative side to the world. Welcome to my Kitchen</p>
                <button className='sidebar__btn'>Continue Reading</button>
            </article>
      );
    }
  }