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

const boxVariant = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0, x: 200 }
};

const Block = ({input}) => {
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
            variants={boxVariant}
            initial="hidden"
            animate={control}
        >
            <h1 className='info'>{input}</h1>        
        </motion.div> 
    );
};

const Experience = () => {

    return(
        <>
        <div className='container'>
            <p className='header'>Experience & Projects</p>
            <div className='content'>
                <Block input={"experience1"}></Block>
                <Block input={"experience2"}></Block>
                <Block input={"experience3"}></Block>
                <Block input={"experience4"}></Block>
            </div>
        </div>
        </>
    );
};

export default Experience;