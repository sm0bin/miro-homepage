import React from 'react';
import Headline from '../utils/Headline';
import testimonial1 from '../assets/company-logos/testimonial-1.svg';
import testimonial2 from '../assets/company-logos/testimonial-2.svg';
import testimonial3 from '../assets/company-logos/testimonial-3.svg';

const Testimonials = () => {
    const testimonialData = [
        {
            companyLogo: testimonial1,
            quote: "When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.",
            client: {
                image: "https://source.unsplash.com/bqe0J0b26RQ",
                name: "Roxanne Mustafa",
                position: "Design Team Lead at VMware"
            }
        },
        {
            companyLogo: testimonial2,
            quote: "Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.",
            client: {
                image: "https://source.unsplash.com/IF9TK5Uy-KI",
                name: "Jane Ashley",
                position: "Head of Design at DocuSign"
            }
        },
        {
            companyLogo: testimonial3,
            quote: "As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that's at the core of what we do and will continue to extend into the future.",
            client: {
                image: "https://source.unsplash.com/xOjzehJ49Hk",
                name: "Laura Baird",
                position: "Associate Design Director at frog"
            }
        }
    ];


    return (
        <section>
            <div className="text-center">
                <Headline text="Loved by the world's best teams" />
                <button className="btn btn-primary btn-outline rounded-full mt-6">See all customer stories →</button>
            </div>
            <div className="grid grid-cols-3 gap-20 mt-20 mb-24">
                {testimonialData.map((testimonial, index) => (
                    <div key={index} className="flex flex-col">
                        <img src={testimonial.companyLogo} alt="Company Logo" className="mx-auto" />
                        <div className='grow'>
                            <p className="text-gray-600 mt-8">{testimonial.quote}</p>

                        </div>
                        <div className="flex items-center mt-8">
                            <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src={testimonial.client.image} alt="Client" />
                                </div>
                            </div>
                            <div className="ml-4 text-sm">
                                <h3 className="font-bold">{testimonial.client.name}</h3>
                                <p className="text-gray-600">{testimonial.client.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Testimonials;