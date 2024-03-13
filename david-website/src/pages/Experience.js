import './Experience.css';
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Typewriter from 'typewriter-effect';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useAnimation,
  MotionValue
} from "framer-motion";
import intelLogo from '../images/intelLogo.jpg';
import calixLogo from '../images/calixLogo.png';
import glyfLogo from '../images/glyfLogo.png';
import broncoBytesLogo from '../images/broncoBytesLogo.png';
import tripfolioLogo from '../images/tripfolioLogo.png';
import glyfScreen1 from '../images/glyfScreen1.png';
import glyfScreen2 from '../images/glyfScreen2.png';
import broncoBytesScreen1 from '../images/broncoBytesScreen1.png';
import tripfolioScreen1 from '../images/tripfolioScreen1.png';
import tripfolioScreen2 from '../images/tripfolioScreen2.png';
import tripfolioScreen3 from '../images/tripfolioScreen3.png';
import { Link } from 'react-router-dom';

const SectionTitleVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
    hidden: { opacity: 0, scale: 1 }
};

const SectionTitle = ({input, logoLink, link}) => {
    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
        <motion.div
            className="sectionTitle"
            ref={ref}
            variants={SectionTitleVariant}
            initial="hidden"
            animate={control}
            
        >
            <Link className='sectionTitle' to={link} target='_blank'>
                <p className='title'>{input}</p>
                <img src={logoLink} alt="logo" className='logo'/> 
            </Link>
        </motion.div> 
    );
};

const SectionText = ({input}) => {
    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
        <motion.div
            className="sectionText"
            ref={ref}
            variants={SectionTitleVariant}
            initial="hidden"
            animate={control}
        >
            <p className='text'>{input}</p>
        </motion.div> 
    );
};

const Experience = () => {
    const blockVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
        hidden: { opacity: 0, scale: 1 }
    };

    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);
    

    return(
        <>
        <div className='container'>
            <div className='content'>
                <p className='header'>Experience</p>
                <div classname='sectionContainer'>
                    <div className='section'>
                        <SectionTitle input={"Technical Intern @ Intel"} logoLink={intelLogo} link='https://www.intel.com/content/www/us/en/homepage.html'></SectionTitle>
                        <SectionText input={"Despite being a full time student, I am currently interning at Intel as a part-time Technical Intern."}/>
                        <SectionText input={"During my time here, I will be executing comprehensive audits within Intel's Data Center infrastructure,"}/>
                        <SectionText input={"applying meticulous attention to detail to ensure adherence to industry standards, security protocols,"}/>   
                        <SectionText input={"and internal compliance requirements. I will also be transitioning to a software-orientented role"}/>   
                        <SectionText input={"throughout the course of this internship."}/>
                        <SectionText input={""}/>
                        <SectionText input={"[January 2024 - Present]"}/>
                    </div>
                    <div className='section'>
                        <SectionTitle input={"Salesforce Software Engineer Intern @ Calix"} logoLink={calixLogo} link='https://www.calix.com/'></SectionTitle>
                        <SectionText input={"In Summer 2023, I completed my first internship at Calix as a Salesforce Software Engineer Intern!"}/>
                        <SectionText input={"Salesforce developers typically complete certificates before entering this field due to its niche nature."}/>
                        <SectionText input={"However, without the help of a prior certificate, I was challenged to be an agile learner at my very first internship opportunity."}/>
                        <SectionText input={"While learning a handful of new tools including Apex, Salesforce Web Components, and Triggers,"}/>
                        <SectionText input={"I designed and developed new and existing custom solutions build on the Force.com platform."}/>
                        <SectionText input={"[June 2023 - Sept 2023]"}/>
                    </div>
                </div>
                <motion.div
                    classname="headerAnimateDiv"
                    variants={blockVariant}
                    ref={ref}
                    initial="hidden"
                    animate={control}>
                    <p className='header'>Projects</p>
                </motion.div>
                <div className='sectionContainer'>
                    <div className='section'>
                        <SectionTitle input={"Glyf - Culture Preservation Database Webapp"} logoLink={glyfLogo}></SectionTitle>
                        <div className='projectImageContainer'>
                            <img className='glyfscreen' src={glyfScreen1} alt="glyf screen1"/>
                            <img className='glyfscreen' src={glyfScreen2} alt="glyf screen1"/>
                        </div>
                        <SectionText input={"[February 2024]"}/>
                    </div>
                    <div className='section'>
                        <SectionTitle input={"BroncoBytes - Dining Hall Food Review Mobile Application"} logoLink={broncoBytesLogo}/>
                        <div className='projectImageContainer'>
                            <img className='glyfscreen' src={broncoBytesScreen1} alt="glyf screen1"/>
                        </div>
                        <SectionText input={"[November 2023]"}/>
                    </div>
                    <div className='section'>
                        <SectionTitle input={"Tripfol.io - Optimized Routing Mobile Application"} logoLink={tripfolioLogo}></SectionTitle>
                        <div className='projectImageContainer'>
                            <img className='glyfscreen' src={tripfolioScreen1} alt="glyf screen1"/>
                            <img className='glyfscreen' src={tripfolioScreen2} alt="glyf screen2"/>
                            <img className='glyfscreen' src={tripfolioScreen3} alt="glyf screen3"/>
                        </div>
                        <SectionText input={"[November 2022]"}/>
                    </div> 
                </div>       
                <Typewriter
                    className='introContent'
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 25,
                        strings:["This is all I have done so far but feel free to contact me if you would like to help me add more to this page!"]
                    }}
                    />
            </div>
        </div>
        </>
    );
};

export default Experience;