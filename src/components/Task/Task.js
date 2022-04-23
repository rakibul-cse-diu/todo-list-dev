import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import './Task.css';

const Task = () => {
    return (
        <div className='flex flex-col items-center mt-[30px] text-xl text-[#CEDBDC] relative'>
            <div>
                <h2>TO DO LIST</h2>
                <div>

                </div>
            </div>
            <div className='text-4xl plus absolute bottom-7 right-16 flex justify-center items-center font-extrabold'>
                <button className=' text-[#1A91FA]'><FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </div>
    );
};

export default Task;