import Headline from '../utils/Headline';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabContent from './Brainstorming/TabContent';

const Brainstorming = () => {

    const tabs = [
        { id: 1, title: 'Brainstorming' },
        { id: 2, title: 'Diagramming' },
        { id: 3, title: 'Meetings & Workshops' },
        { id: 4, title: 'Scrum Events' },
        { id: 5, title: 'Mapping' },
        { id: 6, title: 'Research & Design' },
        { id: 7, title: 'Strategic Planning' },
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
                        <TabContent title={tab.title} />
                    </TabPanel>
                ))}
            </Tabs>
        </section >
    );
};

export default Brainstorming;