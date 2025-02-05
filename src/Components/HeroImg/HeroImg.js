import './HeroImgStyles.css';
import introImg from '../../assets/intro.jpg'
import { Link } from 'react-router-dom';

function HeroImg(){
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='intro-img' src={introImg} alt='intro Image' />
            </div>
            <div className='content'>
                <p> HI, I'M NUKRI GEGELASHVILI</p>
                <h1>Front-End Developer</h1>
                <p style={{color:'yellowgreen',fontWeight:'bold'}}>
                    Currently I am Junior Web Developer at SOCAR ENERGY GEORGIA.
                </p>
                <div style={{marginTop:'35px'}}>
                    <Link to='/projects'
                    className='btn'>Projects
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg