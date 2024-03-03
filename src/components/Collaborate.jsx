import React from 'react';
import Headline from '../utils/Headline';

const Collaborate = () => {

    const cardContent = [
        {
            title: "Free forever",
            content: (
                <p>
                    Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your email lets you bring on your team faster. See our <a className='text-primary' href="">pricing plans</a> for more features.
                </p>
            )
        },
        {
            title: "Easy integrations",
            content: (
                <p>
                    Miro has 100+ powerful integrations with tools you already use like Google Suite, Slack, and Jira, so your workflow is seamless. View the full list in our <a className='text-primary' href="">Marketplace</a>.
                </p>
            )
        },
        {
            title: "Security first",
            content: (
                <p>
                    We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our <a className='text-primary' href="">Trust Center</a>.
                </p>
            )
        }
    ];


    return (
        <div className='mt-36 mb-8'>
            <div className='w-3/5 text-center relative mx-auto'>
                <div className="badge badge-warning uppercase absolute rotate-12 right-0 -top-4">Your idea starts here</div>

                <Headline text='Collaborate without constraints' />
            </div>

            <div className='grid gap-5 grid-cols-3 mb-16'>
                {
                    cardContent.map((item, index) => (
                        <div key={index} className=" p-6">
                            <h1 className="text-2xl font-bold mb-6">{item.title}</h1>
                            <div className="text-lg opacity-60">
                                {item.content}
                            </div>
                        </div>
                    ))
                }

            </div>

            <button className="btn btn-primary rounded-full block mx-auto">Sign up free →</button>
        </div>
    );
};

export default Collaborate;