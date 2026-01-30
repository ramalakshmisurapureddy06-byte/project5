import React, { Component } from 'react'
import CourseCard from './CourseCard';
import './App.css';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: [
        { name: "Data structures and algorithm", duration: "60hrs", price: "Rs.10000", img:  "image.png",height:"250px" ,width:"200px"},
        { name: "Java programming", duration: "40hrs", price: "Rs.11000", img: "image copy.png",height:"250px" ,width:"200px"},
        { name: "React js", duration: "40hrs", price: "Rs.12000", img: "image copy 2.png",height:"250px" ,width:"200px"},
        { name: "Machine learning", duration: "10hrs", price: "Rs.15000", img: "image copy 3.png" ,height:"250px" ,width:"200px"},
      ]
    };
  }

   render() {
    return (
      <div className='app'>
        <div className='header'>
          CourseCatalog-2500031384 - G.Bhagyasai
        </div>

        <div className='section'>
          {this.state.courses.map((data, index) => (
            <CourseCard key={index} data={data} />
          ))}
        </div>

        <div className='footer'>
          Copyright ©️ 2026. All rights reserved.
        </div>
      </div>
    )
  }
}