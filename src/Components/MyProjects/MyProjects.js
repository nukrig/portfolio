import React from "react";
import './MyProjects.css'
import {FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import ProjectCard from "./ProjectCard";
// Images
import strapi from '../../assets/strapi.png'
import giksportfolio from '../../assets/giiks-portfolio.png'
import liveCoding from '../../assets/unilab-livecoding.png'
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
import angularMarkUp from '../../assets/Anguar-markup.png'
import angularTodo from '../../assets/angular-ToDo.png'

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
{/* PROJECT -2*/}       
<ProjectCard 
    img={angularMarkUp} 
    // view='https://angular-mark-up.vercel.app/'
    // source='https://github.com/nukrig/angular-markUp'
    heading='Angular MarkUp - Responsive'
    paragraph="This fully responsive webpage is a complete markup project created during my Angular studies.
     It showcases my ability to craft visually appealing layouts while integrating basic JavaScript for enhanced interactivity. 
     The project helped me solidify my understanding of HTML, SCSS, and foundational JavaScript concepts, serving as a precursor 
     to working with Angular's advanced features. (you can see figma design in README.MD)"
/>
{/* PROJECT -1 */}       
<ProjectCard 
    img={angularTodo} 
    view='https://angular-to-do-app-gamma.vercel.app/'
    source='https://github.com/nukrig/angular-ToDoApp'
    heading='Angular to do app'
    paragraph="This application was my first project while transitioning from React.js to AngularJS
     during my initial days at SOCAR ENERGY GEORGIA. The project served as a foundational learning experience for understanding 
     AngularJS concepts, such as components, directives, and two-way data binding. It allows users to add, edit, and delete tasks 
     while showcasing a minimalistic design and smooth user interactions."
/>
{/* PROJECT 0 */}
<ProjectCard 
        img={strapi} 
        view='https://nukrig.github.io/strapi-demo/'
        source='https://github.com/nukrig/strapi-demo'
        heading='Strapi CMS'
        paragraph="This is my first project with backend systems. Shortly after 
        starting work at socar energy georgia, I got the task to select strapi
         CMS (content management system) and try to integrate it into the frontend.
          It was quite a good experience and I plan to continue working in this direction 
          with the company and take on relevant projects. This is just a prototype, which is enough to show.
          // but its created by test/free version of strapi and it has bugs while fetching the information, it was only  working for 30 trial days."
    />
{/* PROJECT 1 */}
<ProjectCard 
                img={giksportfolio} 
                view='https://nukrig.github.io/giiks-portfolio/'
                source='https://github.com/nukrig/giiks-portfolio'
                heading='Fully responsive Project'
                paragraph="This is my first real project that I made according to a visual made by a UI/UX designer.
                 (You can see figma LINK in my github repository's README file)
                 I think it was quite interesting and I also got some experience how to work as a team and so on. 
                 In addition, I also worked on the responsive design and in the end the project is fully responsive and smooth. "
            />
{/* PROJECT 2 */}
<ProjectCard 
                img={liveCoding} 
                view='https://nukrig.github.io/live-coding-unilab/'
                source='https://github.com/nukrig/live-coding-unilab'
                heading='Live coding task'
                paragraph="This is the live coding challenge from unilab. i had to create page,
                it must be blank, only 2 button is in the top of the screen and task was to detect
                client clicks and show little cyrcle. also the colors must be random and changable.
                for this challenge i used coordints from X and Y to detect place where client clicked last
                and i have an array where i push all locations on click to have full list of clicks, 
                and this way i can set undo and redo button clicks ... "
            />

{/* PROJECT 3 */}
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
{/* PROJECT 4 */}
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
{/* PROJECT 5 */}
            <ProjectCard 
                img={TipCalc}
                view="https://nukrig.github.io/tip-calculator-react/"
                source="https://github.com/nukrig/tip-calculator-react"
                heading="Tip Calculator (React)"
                paragraph="It was one of the Bitcamp challenges, which helped me to understand a 
                lot of things in the direction of React,I used Props, State and other 
                main concepts and in the end it turned out to be a good exercise ."
            />
{/* PROJECT 6 */}
            <ProjectCard 
                img={Rating}
                view="https://nukrig.github.io/interactive-rating-react/"
                source="https://github.com/nukrig/interactive-rating-react"
                heading="Interactive Rating Card (React)"
                paragraph="This was also a small challenge from Bitcamp, which I can now see 
                as a small component, and use it in a relatively large project. This 
                little task uses props to display the appropriate message on the next page."
            />
{/* PROJECT 7 */}
            <ProjectCard 
                img={GithubUsers}
                view="https://nukrig.github.io/react-usestate/"
                source="https://github.com/nukrig/react-usestate"
                heading="Github users FETCH (React)"
                paragraph="In this example, I discussed how I could use fetch in React. 
                I sent a request to the GitHub app and listed the appropriate users"
            />
{/* PROJECT 8 */}
            <ProjectCard 
                img={Clock}
                view="https://nukrig.github.io/react-lifecycle/"
                source="https://github.com/nukrig/react-lifecycle"
                heading="lifecycle (React)"
                paragraph="In this example, I learned what the React lifecycle is, and I also 
                built a clock application using UseEffect Hook."
            />
{/* PROJECT 9 */}
            <ProjectCard 
                img={Products}
                view="https://nukrig.github.io/function-components/"
                source="https://github.com/nukrig/function-components"
                heading="Products List (React)"
                paragraph="This exercise is similar to a shopping cart in an online store,
                you can add or remove specific products to the cart"
            />
{/* PROJECT 10 */}
            <ProjectCard 
                img={Faq}
                view="https://nukrig.github.io/FAQ-accordion/"
                source="https://github.com/nukrig/FAQ-accordion"
                heading="FAQ-Accordeon (JS)"
                paragraph="This exercise is from frontendmentor, I built an accordion
                for Frequently asked questions..."
            />
{/* PROJECT 11 */}
            <ProjectCard 
                img={Calculator}
                view="https://nukrig.github.io/calculatorJs/"
                source="https://github.com/nukrig/calculatorJs"
                heading="Calculator (JS)"
                paragraph="This is a simple calculator that I built on my own inspiration using JavaScript"
            />
{/* PROJECT 12 */}
            <ProjectCard 
                img={CharCalc}
                view="https://nukrig.github.io/numberOfCharacters/"
                source="https://github.com/nukrig/numberOfCharacters"
                heading="Number Of Chars (JS)"
                paragraph="In this example, I created an application that allows you to specify a text as well as a 
                letter and count the number of times the corresponding letter is used in that text."
            />
{/* PROJECT 13 */}
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
  