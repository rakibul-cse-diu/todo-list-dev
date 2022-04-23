import React from 'react';
import Activities from '../Activities/Activities';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Task from '../Task/Task';

import './Home.css';

const Home = () => {
    return (
        <div className='bg-[#2C2F33] pl-[20px] pr-[0px] pt-[20px] min-h-screen overflow-hidden'>
            <Header></Header>
            <div className='work-place'>
                <SideBar></SideBar>
                <Task></Task>
                <Activities></Activities>
            </div>
        </div>
    );
};

export default Home;