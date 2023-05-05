import React from "react"
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import HeroImg2 from "../Components/HeroImg2/HeroImg2"
import MyProjects from "../Components/MyProjects/MyProjects"

function ProjectsPage(){
    return (
        <div>
            <Navbar />
            <HeroImg2 heading='PROJECTS.' paragraph='Some of my recent works' />
            <MyProjects />
            <Footer />
        </div>
    )
}

export default ProjectsPage