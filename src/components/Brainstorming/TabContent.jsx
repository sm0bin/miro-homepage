import { FaArrowRight } from "react-icons/fa6";
import image from '../../assets/images/Brainstormwithoutshadow.png';

const TabContent = ({ title }) => {
    return (
        <div>
            <section className='flex justify-between items-center gap-28'>
                <div>
                    <h5 className='text-lg'>{title}</h5>
                    <p className='text-lg opacity-70 mb-10 mt-4'>In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>

                    <a className="link link-primary underline-offset-2">Learn more <FaArrowRight className='inline ml-2' /></a>
                </div>
                <img className='w-7/12' src={image} alt="work image" />

            </section>
        </div>
    );
};

export default TabContent;