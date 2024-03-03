import image from '../assets/images/hybridwork.png';
import Headline from '../utils/Headline';
import { FaArrowRight } from "react-icons/fa6";

const Work = () => {
    return (
        <div className='flex justify-between items-center gap-28'>
            <div>
                <Headline text='Work together, wherever you work' />
                <p className='text-lg mb-10 mt-4'>In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>

                <a className="link link-primary underline-offset-2">Learn more <FaArrowRight className='inline ml-2' /></a>
            </div>
            <img className='w-7/12' src={image} alt="work image" />

        </div>
    );
};

export default Work;