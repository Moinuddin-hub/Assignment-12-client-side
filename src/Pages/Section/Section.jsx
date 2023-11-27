
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OverView from '../../TabSection/OverView';
import Package from '../../TabSection/Package';
const Section = () => {
    return (
        <div>
            <h2 className="text-4xl text-center font-bold mt-8">Travel Guide Section</h2> 
            <Tabs>
    <TabList>
      <Tab>Overview</Tab>
      <Tab>Our Packages</Tab>
      <Tab>Meet Our Tour Guides</Tab>
    </TabList>

    <TabPanel>
       <OverView></OverView>
    </TabPanel>
    <TabPanel>
      <Package></Package>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Section;