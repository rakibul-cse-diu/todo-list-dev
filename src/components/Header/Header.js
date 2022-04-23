import React from 'react';
import userAv from '../../images/user.png';
import CustomLink from '../CustomLink/CustomLink';

import './Header.css';

const Header = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='rounded-[24px] bg-[#144884] logo-rec flex justify-center items-center px-3 cursor-pointer'>
                <h1 className='text-[36px] leading-[57px] font-[700] text-[#EBDBDB]'>ToDo.</h1>
            </div>
            <div className='flex justify-between items-center text-[#CEDBDC] pt-[15px] pb-[15px] pl-[30px] pr-[30px]'>
                <nav className='flex justify-center items-center mr-[300px]'>
                    <CustomLink to="/dashboard" >Dashboard</CustomLink>
                    <CustomLink to="/about" >About</CustomLink>
                    <CustomLink to="/help" >Help</CustomLink>
                </nav>
                <div className='flex justify-center items-center cursor-pointer'>
                    <img className='rounded-full mr-[30px]' src={userAv} alt="" height={50} width={50} />
                    <small className='name-bar'>Simrah Shah</small>
                </div>
            </div>
        </div>
    );
};

export default Header;