import './Experience.css';
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useAnimation,
  MotionValue
} from "framer-motion";

const blockVariant = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0, x: 200 }
};

const TextBlock = ({input}) => {
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
            className="box"
            ref={ref}
            variants={blockVariant}
            initial="hidden"
            animate={control}
        >
            <h2 className='info'>{input}</h2>        
        </motion.div> 
    );
};

const Experience = () => {

    return(
        <>
        <div className='container'>
            <p className='header'>Experience & Projects</p>
            <div className='content'>
                <h1>Experience</h1>
                <TextBlock input={"Technical Intern @ Intel"}></TextBlock>
                <TextBlock input={"Salesforce Software Engineer Intern @ Calix"}></TextBlock>
                <h1>Projects</h1>
                <TextBlock input={"Glyf - Culture Preservation Database Webapp"}></TextBlock>
                <TextBlock input={"BroncoBytes - Dining Hall Food Review Mobile Application"}></TextBlock>
                <TextBlock input={"Tripfol.io - Optimized Routing Mobile Application"}></TextBlock>
            </div>
        </div>
        </>
    );
};

export default Experience;