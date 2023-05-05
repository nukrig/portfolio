import React from "react";
import './MyProjects.css'
import {FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { NavLink } from "react-router-dom";
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
            <div className='project-card'>
                <img src={ToDoApp} alt="image"/>
                    <div className="project-btns">
                        <NavLink to='https://nukrig.github.io/todo-app-unilab/' target="blank"
                        className='btn'
                        >VIEW</NavLink>
                        <NavLink to='https://github.com/nukrig/todo-app-unilab' target="blank"
                        className='btn'
                        >SOURCE</NavLink>
                    </div>
                <h2 className="project-title"> ToDo App (React)</h2>
                <p className="project-details">I did this project for Unilab's acceleration program, 
                    so I'm involved in internships and I'm improving my skills over time.
                    The main tools I used in this project are: React and Styled Components.
                    The main challenge was to artificially control the change of routes. To 
                    be more precise, if the user manually changes the route, it should first 
                    be checked whether he is logged out or not, and then the corresponding command 
                    should be executed.
                </p>
            </div>
{/* PROJECT 2 */}
            <div className='project-card'>
                <img src={Cv} alt="image"/>
                <div className="project-btns">
                    <NavLink to='https://nukrig.github.io/CV-Generator-1920x1080-/' target="blank"
                    className='btn'
                    >VIEW</NavLink>
                    <NavLink to='https://github.com/nukrig/CV-Generator-1920x1080-' target="blank"
                    className='btn'
                    >SOURCE</NavLink>
                </div>
                <h2 className="project-title"> CV Generator (JS)</h2>
                <p className="project-details">
                Redberry company had announced an internship in the direction of React and this project 
                was their request. At that time, I had not yet started learning React, so I tried to
                 implement this project only with JavaScript, and it turned out to be quite difficult, 
                 but I managed to finish it. This project taught me a lot, but I couldn't move to the next 
                 stage of the Redberry internship because I didn't know React.
                </p>
            </div>
{/* PROJECT 3 */}
            <div className='project-card'>
                <img src={TipCalc} alt="image"/>
                <div className="project-btns">
                    <NavLink to='https://nukrig.github.io/tip-calculator-react/' target="blank"
                    className='btn'
                    >VIEW</NavLink>
                    <NavLink to='https://github.com/nukrig/tip-calculator-react' target="blank"
                    className='btn'
                    >SOURCE</NavLink>
                </div>
                <h2 className="project-title"> Tip Calculator (React)</h2>
                <p className="project-details">It was one of the Bitcamp challenges, which helped me to understand a 
                    lot of things in the direction of React,I used Props, State and other 
                    main concepts and in the end it turned out to be a good exercise .
                </p>
            </div>
{/* PROJECT 4 */}
            <div className='project-card'>
                <img src={Rating} alt="image"/>
                <div className="project-btns">
                    <NavLink to='https://nukrig.github.io/interactive-rating-react/' target="blank"
                    className='btn'
                    >VIEW</NavLink>
                    <NavLink to='https://github.com/nukrig/interactive-rating-react' target="blank"
                    className='btn'
                    >SOURCE</NavLink>
                </div>
                <h2 className="project-title"> Interactive Rating Card (React)</h2>
                <p className="project-details">
                This was also a small challenge from Bitcamp, which I can now see 
                as a small component, and use it in a relatively large project. This 
                little task uses props to display the appropriate message on the next page.
                </p>
            </div>
{/* PROJECT 5 */}
            <div className='project-card'>
                <img src={GithubUsers} alt="image"/>
                <div className="project-btns">
                    <NavLink to='https://nukrig.github.io/react-usestate/' target="blank"
                    className='btn'
                    >VIEW</NavLink>
                    <NavLink to='https://github.com/nukrig/react-usestate' target="blank"
                    className='btn'
                    >SOURCE</NavLink>
                </div>
                <h2 className="project-title"> Github users FETCH (React)</h2>
                <p className="project-details">
                In this example, I discussed how I could use fetch in React. 
                I sent a request to the GitHub app and listed the appropriate users
                </p>
            </div>
{/* PROJECT 6 */}
            <div className='project-card'>
                <img src={Clock} alt="image"/>
                <div className="project-btns">
                    <NavLink to='https://nukrig.github.io/react-lifecycle/' target="blank"
                    className='btn'
                    >VIEW</NavLink>
                    <NavLink to='https://github.com/nukrig/react-lifecycle' target="blank"
                    className='btn'
                    >SOURCE</NavLink>
                </div>
                <h2 className="project-title"> lifecycle (React)</h2>
                <p className="project-details">
                In this example, I learned what the React lifecycle is, and I also 
                built a clock application using UseEffect Hook.
                </p>
            </div>
{/* PROJECT 7 */}
            <div className='project-card'>
                <img src={Products} alt="image"/>
                <div className="project-btns">
                    <NavLink to='https://nukrig.github.io/function-components/' target="blank"
                    className='btn'
                    >VIEW</NavLink>
                    <NavLink to='https://github.com/nukrig/function-components' target="blank"
                    className='btn'
                    >SOURCE</NavLink>
                </div>
                <h2 className="project-title"> Products List (React)</h2>
                <p className="project-details">
                This exercise is similar to a shopping cart in an online store,
                 you can add or remove specific products to the cart
                </p>
            </div>

{/* PROJECT 8 */}
            <div className='project-card'>
                <img src={Faq} alt="image"/>
                <div className="project-btns">
                    <NavLink to='https://nukrig.github.io/FAQ-accordion/' target="blank"
                    className='btn'
                    >VIEW</NavLink>
                    <NavLink to='https://github.com/nukrig/FAQ-accordion' target="blank"
                    className='btn'
                    >SOURCE</NavLink>
                </div>
                <h2 className="project-title"> FAQ-Accordeon (JS)</h2>
                <p className="project-details">
                This exercise is from frontendmentor, I built an accordion
                for Frequently asked questions...
                </p>
            </div>
{/* PROJECT 9 */}
            <div className='project-card'>
                <img src={Calculator} alt="image"/>
                <div className="project-btns">
                    <NavLink to='https://nukrig.github.io/calculatorJs/' target="blank"
                    className='btn'
                    >VIEW</NavLink>
                    <NavLink to='https://github.com/nukrig/calculatorJs' target="blank"
                    className='btn'
                    >SOURCE</NavLink>
                </div>
                <h2 className="project-title"> Calculator (JS)</h2>
                <p className="project-details">
                This is a simple calculator that I built on my own inspiration using JavaScript
                </p>
            </div>
{/* PROJECT 10 */}
            <div className='project-card'>
                <img src={CharCalc} alt="image"/>
                <div className="project-btns">
                    <NavLink to='https://nukrig.github.io/numberOfCharacters/' target="blank"
                    className='btn'
                    >VIEW</NavLink>
                    <NavLink to='https://github.com/nukrig/numberOfCharacters' target="blank"
                    className='btn'
                    >SOURCE</NavLink>
                </div>
                <h2 className="project-title"> Number Of Chars (JS)</h2>
                <p className="project-details">
                In this example, I created an application that allows you to specify a text as well as a letter and 
                count the number of times the corresponding letter is used in that text.
                </p>
            </div>
{/* PROJECT 11 */}
            <div className='project-card'>
                <img src={Responsive} alt="image"/>
                <div className="project-btns">
                    <NavLink to='https://nukrig.github.io/PROJECT-RESPONSIVE/#' target="blank"
                    className='btn'
                    >VIEW</NavLink>
                    <NavLink to='https://github.com/nukrig/PROJECT-RESPONSIVE' target="blank"
                    className='btn'
                    >SOURCE</NavLink>
                </div>
                <h2 className="project-title"> Responsive (HTML/CSS)</h2>
                <p className="project-details">
                This is Just a full responsive web app with only HTML and css...
                </p>
            </div>

        </div>
      </div>
    );
  }
  
  export default MyProjects;
  