import { LoremIpsum } from "../components/Loremlpsum";
import './Experience.css';

const Experience = () => {
    return(
        <div className='container'>
            <p className='header'>Experience & Projects</p>
            <div className='content'>
                <div className='letterContent'>
                    <p className='experienceContent'>
                        experience content
                    </p>
                </div>
                <div className='pictureContent'>
                    <p>picture content</p>
                </div>
                <LoremIpsum />
            </div>
        </div>
    );
};

export default Experience;