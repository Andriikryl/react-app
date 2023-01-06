import React from 'react';
import logo from "../logo.svg"

export class Card extends React.Component {
    render() {
      return (
            <article className="blog__card | blog-shadow">
                <div className="blog__card-img">
                    <img src={logo} alt="logo"></img>
                </div>
                <h3 className="card-titel">Tourism</h3>
                <p className="card__text">One of Saturn’s largest rings may be newer than anyone</p>
                <p className="card__text-date">June 6, 2019    By Rickie Baroch</p>
            </article>
      );
    }
  }