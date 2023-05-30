import { useState } from 'react';
import orderImg from '../../../assets//shop/banner2.jpg'
import useMenu from '../../../hooks/useMenu';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    const categorys = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categorys.indexOf(category)
    const [menu] = useMenu();
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderImg} title={"Order Food"}></Cover>
            <div className='max-w-7xl mx-auto my-10'>
                <Tabs className='text-center' defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel><OrderTab items={salad}></OrderTab></TabPanel>
                    <TabPanel><OrderTab items={pizza}></OrderTab></TabPanel>
                    <TabPanel><OrderTab items={soup}></OrderTab></TabPanel>
                    <TabPanel><OrderTab items={dessert}></OrderTab></TabPanel>
                    <TabPanel><OrderTab items={drinks}></OrderTab></TabPanel>
                </Tabs>
            </div>
        </div >
    );
};

export default Order;