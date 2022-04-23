import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faUser } from '@fortawesome/free-solid-svg-icons';

import './SideBar.css';

const SideBar = () => {
    return (
        <div className='side-bar flex flex-col w-fit p-6 text-2xl text-[#CEDBDC]'>
            <div className='side-bar-item mb-6 cursor-pointer'>
                <FontAwesomeIcon icon={faListCheck} />
            </div>
            <div className='side-bar-item cursor-pointer'>
                <FontAwesomeIcon icon={faUser} />
            </div>
        </div>
    );
};

export default SideBar;