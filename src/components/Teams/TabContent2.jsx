import { FaArrowRight, FaCheck } from "react-icons/fa6";
import image from '../../assets/images/Brainstormwithoutshadow.png';

import icon1 from '../../assets/icons/sketch.svg';
import icon2 from '../../assets/icons/xd.svg';
import icon3 from '../../assets/icons/figma.svg';
import icon4 from '../../assets/icons/notion.svg';

const TabContent2 = ({ title }) => {
    const list = [
        "Build Low-fi wireframes",
        "Involve stakeholders in the design process",
        "Run engaging design workshops"
    ];
    const icons = [icon1, icon2, icon3, icon4];
    return (
        <div>
            <section className='flex justify-between items-center gap-28'>
                <div>
                    <h5 className='text-lg'>{title}</h5>
                    <ul className='text-lg opacity-60 mb-10 mt-4'>
                        {list.map((item, index) => (
                            <li key={index} className="mb-4"> <FaCheck className="inline mr-1" /> {item}</li>
                        ))}
                    </ul>

                    <a className="link link-primary underline-offset-2">Learn more <FaArrowRight className='inline ml-2' /></a>

                    <p className='text-lg opacity-60 mb-5 mt-16'>Integrate your favorite tools</p>
                    <div className='flex gap-8'>
                        {icons.map((icon, index) => (
                            <img key={index} src={icon} alt="icon" />
                        ))}
                    </div>
                </div>
                <img className='w-7/12' src={image} alt="work image" />

            </section>
        </div>
    );
};

export default TabContent2;