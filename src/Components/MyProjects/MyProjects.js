import React from "react";
import './MyProjects.css'
import {FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import ProjectCard from "./ProjectCard";
// Images
import ToDoApp from '../../assets/ToDo App.png'
import TipCalc from '../../assets/TipCalc.png'
import Rating from '../../assets/Rating.png'
import GithubUsers from '../../assets/GithubUsers.png'
import Clock from '../../assets/Clock.png'
import Products from '../../assets/products.png'
import Cv from '../../assets/CV.png'
import Faq from '../../assets/FAQ.png'
import Calculator from '../../assets/calculator.png'
import CharCalc from '../../assets/CharCalc.png'
import Responsive from '../../assets/responsive.png'

function MyProjects() {
    return (
      <div className="container">
        <div className="icons">
        <FaHtml5 size={30} style={{color:'white',marginRight:'1rem'}} />
        <FaCss3 size={30} style={{color:'white',marginRight:'1rem'}} />
        <FaJs size={30} style={{color:'white',marginRight:'1rem'}} />
        <FaReact size={30} style={{color:'white',marginRight:'1rem'}} />
        </div>
        <div className="project-container">

{/* PROJECT 1 */}
            <ProjectCard 
                img={ToDoApp} 
                view='https://nukrig.github.io/todo-app-unilab/'
                source='https://github.com/nukrig/todo-app-unilab'
                heading='ToDo App (React)'
                paragraph="I did this project for Unilab's acceleration program, 
                so I'm involved in internships and I'm improving my skills over time.
                The main tools I used in this project are: React and Styled Components.
                The main challenge was to artificially control the change of routes. To 
                be more precise, if the user manually changes the route, it should first 
                be checked whether he is logged out or not, and then the corresponding command 
                should be executed."
            />
{/* PROJECT 2 */}
            <ProjectCard 
                img={Cv}
                view="https://nukrig.github.io/CV-Generator-1920x1080-/"
                source="https://github.com/nukrig/CV-Generator-1920x1080-"
                heading="CV Generator (JS)"
                paragraph="Redberry company had announced an internship in the direction of React and this project 
                was their request. At that time, I had not yet started learning React, so I tried to
                 implement this project only with JavaScript, and it turned out to be quite difficult, 
                 but I managed to finish it.the didnt wanted the project to be responsive and thats reason why it is only
                 1920x1080px. This project taught me a lot, but I couldn't move to the next 
                 stage of the Redberry internship because I didn't know React."
            />
{/* PROJECT 3 */}
            <ProjectCard 
                img={TipCalc}
                view="https://nukrig.github.io/tip-calculator-react/"
                source="https://github.com/nukrig/tip-calculator-react"
                heading="Tip Calculator (React)"
                paragraph="It was one of the Bitcamp challenges, which helped me to understand a 
                lot of things in the direction of React,I used Props, State and other 
                main concepts and in the end it turned out to be a good exercise ."
            />
{/* PROJECT 4 */}
            <ProjectCard 
                img={Rating}
                view="https://nukrig.github.io/interactive-rating-react/"
                source="https://github.com/nukrig/interactive-rating-react"
                heading="Interactive Rating Card (React)"
                paragraph="This was also a small challenge from Bitcamp, which I can now see 
                as a small component, and use it in a relatively large project. This 
                little task uses props to display the appropriate message on the next page."
            />
{/* PROJECT 5 */}
            <ProjectCard 
                img={GithubUsers}
                view="https://nukrig.github.io/react-usestate/"
                source="https://github.com/nukrig/react-usestate"
                heading="Github users FETCH (React)"
                paragraph="In this example, I discussed how I could use fetch in React. 
                I sent a request to the GitHub app and listed the appropriate users"
            />
{/* PROJECT 6 */}
            <ProjectCard 
                img={Clock}
                view="https://nukrig.github.io/react-lifecycle/"
                source="https://github.com/nukrig/react-lifecycle"
                heading="lifecycle (React)"
                paragraph="In this example, I learned what the React lifecycle is, and I also 
                built a clock application using UseEffect Hook."
            />
{/* PROJECT 7 */}
            <ProjectCard 
                img={Products}
                view="https://nukrig.github.io/function-components/"
                source="https://github.com/nukrig/function-components"
                heading="Products List (React)"
                paragraph="This exercise is similar to a shopping cart in an online store,
                you can add or remove specific products to the cart"
            />
{/* PROJECT 8 */}
            <ProjectCard 
                img={Faq}
                view="https://nukrig.github.io/FAQ-accordion/"
                source="https://github.com/nukrig/FAQ-accordion"
                heading="FAQ-Accordeon (JS)"
                paragraph="This exercise is from frontendmentor, I built an accordion
                for Frequently asked questions..."
            />
{/* PROJECT 9 */}
            <ProjectCard 
                img={Calculator}
                view="https://nukrig.github.io/calculatorJs/"
                source="https://github.com/nukrig/calculatorJs"
                heading="Calculator (JS)"
                paragraph="This is a simple calculator that I built on my own inspiration using JavaScript"
            />
{/* PROJECT 10 */}
            <ProjectCard 
                img={CharCalc}
                view="https://nukrig.github.io/numberOfCharacters/"
                source="https://github.com/nukrig/numberOfCharacters"
                heading="Number Of Chars (JS)"
                paragraph="In this example, I created an application that allows you to specify a text as well as a 
                letter and count the number of times the corresponding letter is used in that text."
            />
{/* PROJECT 11 */}
            <ProjectCard 
                img={Responsive}
                view="https://nukrig.github.io/PROJECT-RESPONSIVE/#"
                source="https://github.com/nukrig/PROJECT-RESPONSIVE"
                heading="Responsive (HTML/CSS)"
                paragraph="This is Just MarkUp exercise with a full responsive web app - only HTML and css..."
            />

        </div>
      </div>
    );
  }
  
  export default MyProjects;
  