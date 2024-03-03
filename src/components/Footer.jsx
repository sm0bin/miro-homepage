import iconFacebook from '../assets/icons/facebook.svg';
import iconTwitter from '../assets/icons/twitter.svg';
import iconYoutube from '../assets/icons/youtube.svg';
import { GoDash } from "react-icons/go";

const Footer = () => {

    const socialLinks = [
        {
            icon: iconFacebook,
            link: 'https://www.facebook.com'
        },
        {
            icon: iconTwitter,
            link: 'https://www.twitter.com'
        },
        {
            icon: iconYoutube,
            link: 'https://www.youtube.com'
        }
    ]

    const footerLinks = [
        {
            title: 'iPhone',
            link: 'https://www.apple.com'
        },
        {
            title: 'Android',
            link: 'https://www.android.com'
        },
        {
            title: 'Help',
            link: 'https://www.help.com'
        },
        {
            title: 'About',
            link: 'https://www.about.com'
        },
        {
            title: 'Insights',
            link: 'https://www.insights.com'
        }
    ]
    return (
        <footer className='bg-[#02033B] py-24 text-white'>
            <div className="max-w-6xl mx-auto">
                <div className="footer gap-16">
                    <nav>
                        <h3 className="font-extrabold text-2xl mb-12">Scan. Detect. Remove.</h3>
                        <div className='flex items-center gap-8 mb-12'>
                            {socialLinks.map((social, index) => (
                                <a key={index} href={social.link}>
                                    <img src={social.icon} alt="social icon" />
                                </a>
                            ))}
                        </div>
                        <div className='space-x-6'>

                            <a className="link underline-offset-4">Privacy Policy</a>
                            <a className="link underline-offset-4">Terms of Service</a>
                        </div>
                        <p className=' mt-12 text-[.75rem]'>
                            Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356
                        </p>
                        <p className=' mt-4 text-[.75rem]'>
                            Designed & developed by Bigger Picture
                        </p>
                    </nav>
                    <nav>
                        <h3 className="font-extrabold text-4xl mb-12">Miro.</h3>
                        <hr className='border-white w-full' />
                        {
                            footerLinks.map((link, index) => (
                                <a key={index} href={link.link} className=" mt-4 text-[#FFC247] font-extrabold text-lg"><GoDash className='inline mr-4' /> {link.title}</a>
                            ))
                        }
                    </nav>

                    <form className="bg-[#FDB235] bg-[url('/newsletter.svg')] p-8 rounded-[42px] text-[#02033B]">
                        <h3 className='font-extrabold text-2xl '>Sign up to our newsletter</h3>
                        <p className='mt-5 mb-8'>Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                        <div className="join w-full">
                            <input className="input input-bordered join-item rounded-l-full w-full" placeholder="Email address" />
                            <button className="btn join-item rounded-r-full btn-neutral">Submit</button>
                        </div>
                    </form>
                </div>
                <p className='w-1/2 mt-20 text-[.75rem]'>
                    Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.
                </p>
            </div>
        </footer >
    );
};

export default Footer;