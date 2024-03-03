import image from '../assets/images/connect.png';
import Headline from '../utils/Headline';
import { FaArrowRight } from "react-icons/fa6";

const Connect = () => {
    return (
        <section className='flex justify-between items-center flex-row-reverse gap-28'>
            <div>
                <Headline text='Connect 
your tools, 
close your tabs' />
                <p className='text-lg mb-10 mt-4'>Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>

                <a className="link link-primary underline-offset-2">Learn more <FaArrowRight className='inline ml-2' /></a>
            </div>
            <img className='w-7/12' src={image} alt="work image" />

        </section>
    );
};

export default Connect;