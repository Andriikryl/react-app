import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Card } from './components/Card';
import { Sidebarcard } from './components/Sidebarcard';
import logo from "./logo.svg"


export class App extends React.Component {
  render(){
    return (
    <div className="App"> 
    <Header />
      <div className="blog__box">
        <div className="blog__content">
              <div className="blog__wrapper">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
              </div>
        </div>
        <div className="blog__sidebar">
            <div className="blog__wrapper">
              <Sidebarcard></Sidebarcard>
              <Sidebarcard></Sidebarcard>
              <Sidebarcard></Sidebarcard>
              <Sidebarcard></Sidebarcard>
              <Sidebarcard></Sidebarcard>
            </div>
        </div>
      </div>

    </div>
    );
  }
}


