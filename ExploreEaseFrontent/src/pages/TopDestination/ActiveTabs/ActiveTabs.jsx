import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './style.css'
import TopDestinationDetails from '../TopDestinationDetails/TopDestinationDetails';

const ActiveTabs = () => {

    const menuTabs = [
        "Details",
        "Itinenary",
        "Map",
        "FAQ",
        "Reviews"
    ]

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className='px-4'>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    {
                        menuTabs?.map((tab, index) => 
                            <Tab>
                                <div className="tooltip" data-tip="PHONES & ACCESS">
                                    <button className="font-bold px-5 py-2 rounded-full">
                                        {tab}
                                    </button>
                                </div>
                            </Tab>  
                        )
                    }
                </TabList>
                <TabPanel>
                    <div className='py-5'>
                        <TopDestinationDetails />
                    </div>
                </TabPanel>
                <TabPanel>
                    Comming Soon
                </TabPanel>
                <TabPanel>
                    <div className='py-5'>
                        <img src="https://img.freepik.com/free-vector/colored-political-world-map_23-2148319222.jpg?w=996&t=st=1704306347~exp=1704306947~hmac=49d3962de32f93588493506ac621585a780174fd4936b7704ef305caa5d3bf41" alt="" className='w-full lg:h-screen' />
                    </div>
                </TabPanel>
                <TabPanel>
                    Comming Soon 5
                </TabPanel>
                <TabPanel>
                    Comming Soon 6
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default ActiveTabs