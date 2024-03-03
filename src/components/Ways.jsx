import image from '../assets/images/section.png';

const Ways = () => {
    return (
        <div class="relative mt-16">
            <img className='w-full' src={image} alt="" />
            <div className='absolute inset-y-0 right-4 flex items-center'>
                <div className='text-center space-y-2 '>
                    <h4 className='font-bold text-2xl'>The Ways We Work</h4>
                    <p className='text-xl'>How has our relationship with work changed?</p>
                    <button className="btn btn-primary rounded-full">View the report →</button>
                </div>
            </div>
        </div>
    );
};

export default Ways;