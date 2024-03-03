import Headline from '../utils/Headline';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabContent2 from './Teams/TabContent2';

const Teams = () => {

    const tabs = [
        { id: 1, title: 'UX & Design' },
        { id: 2, title: 'Marketing' },
        { id: 3, title: 'Product Management' },
        { id: 4, title: 'Engineering' },
        { id: 5, title: 'Consultants' },
        { id: 6, title: 'Agile Coaches' },
        { id: 7, title: 'Sales' },
    ];
    return (
        <section className='mt-24 mb-44'>
            <Headline title="Built for the way you work" />

            <Tabs>
                <TabList>
                    {tabs.map(tab => (
                        <Tab key={tab.id}>{tab.title}</Tab>
                    ))}
                </TabList>

                {tabs.map(tab => (
                    <TabPanel key={tab.id}>
                        <TabContent2 title={tab.title} />
                    </TabPanel>
                ))}
            </Tabs>
        </section >
    );
};

export default Teams;