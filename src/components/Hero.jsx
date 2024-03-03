import React from 'react';
import image from '../assets/images/headerimage-without-text.png';
import { BiSolidStar } from "react-icons/bi";
import { BiSolidStarHalf } from "react-icons/bi";
import company1 from '../assets/company-logos/company-1.svg';
import company2 from '../assets/company-logos/company-2.svg';
import company3 from '../assets/company-logos/company-3.svg';

const Hero = () => {
    return (
        <div className='flex gap-20 mt-16'>
            <div className=''>

                <h1 className='font-bold text-5xl mb-4'>Take ideas from better to best</h1>
                <p className='text-lg mb-8'>Miro is your team's visual platform to connect, collaborate, and create — together.</p>
                <form className="card-body p-0">
                    <div className="form-control">
                        <input type="email" placeholder="Enter your work email" className="input input-bordered rounded-full" required />
                    </div>
                    <div className="form-control mt-2.5">
                        <button className="btn btn-primary rounded-full">Sign up free →</button>
                    </div>
                </form>
                <small className='opacity-50 mt-2'>Collaborate with your team within minutes</small>

                <div className='bg-base-200 flex justify-between p-3.5 rounded-lg mt-10'>
                    <div>
                        <div className='flex text-[#FF9D48] text-xl'>
                            <BiSolidStar />
                            <BiSolidStar />
                            <BiSolidStar />
                            <BiSolidStar />
                            <BiSolidStarHalf />
                        </div>

                        <small className='text-sm'>Based on 5149+ reviews:</small>
                    </div>
                    <div className='flex gap-3.5 pr-3'>
                        <img src={company1} alt="company 1" />
                        <img src={company2} alt="company 2" />
                        <img src={company3} alt="company 3" />

                    </div>

                </div>
            </div>
            <img className='w-7/12' src={image} alt="hero image" />


        </div>
    );
};

export default Hero;