import client1 from '../assets/company-logos/client-1.svg';
import client2 from '../assets/company-logos/client-2.svg';
import client3 from '../assets/company-logos/client-3.svg';
import client4 from '../assets/company-logos/client-4.svg';
import client5 from '../assets/company-logos/client-5.svg';

const Clients = () => {
    const clients = [client1, client2, client3, client4, client5];

    return (
        <section>
            <p className='text-lg opacity-60 text-center mb-12 mt-32'>Trusted by 45M+ users</p>
            <div className='flex justify-around'>
                {
                    clients.map((client, index) => (
                        <img key={index} src={client} alt={`client ${index + 1}`} />
                    ))
                }

            </div>

        </section>
    );
};

export default Clients;