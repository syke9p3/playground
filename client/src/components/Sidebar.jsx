import React, { useState } from 'react';
import { FaChevronLeft, FaGear } from 'react-icons/fa6';
import ReactSVG from '../assets/react.svg';
import { FaCalendar, FaChartPie, FaEnvelope, FaFile } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [open, setOpen] = useState(true);

    const Menus = [
        {
            title: 'Dashboard',
            link: '/',
            icon: <FaChartPie size={20} />
        },
        {
            title: 'Chat',
            link: '/',
            icon: <FaEnvelope size={20} />
        },
        {
            title: 'Calendar',
            link: '/',
            icon: <FaCalendar size={20} />,
            gap: true
        },
        {
            title: 'File',
            link: '/',
            icon: <FaFile size={20} />
        },
        {
            title: 'Settings',
            link: '/',
            icon: <FaGear size={20} />
        },
    ];

    return (
        <div
            className={`${open ? 'w-72' : 'w-20'
                } transition-width duration-300 bg-blue-900 h-screen overflow-y-auto overflow-x-hidden relative p-5 pt-8`}>
            <button
                onClick={() => setOpen(!open)}
                className={`w-12 h-9 flex justify-center items-center absolute cursor-pointer  z-10 -right-4 pr-3 top-16 shadow-lg border-2 border-blue-900 bg-white rounded-l-full text-gray-400`}>
                <FaChevronLeft className={` ${!open && 'rotate-180'}`}/>
            </button>
            <Link to="/">
                <div className="flex gap-x-4 items-center">
                    <img src={ReactSVG} className={`cursor-pointer duration-500 z-0 ${open && "rotate-[60deg]"}`} alt="React Logo" />
                    <h1 className={`text-white origin-left font-medium text-xl duration-300  ${!open && 'scale-0'}`}>Sourceree</h1>
                </div>
            </Link>
            <ul className='pt-6 overflow-y'>
                {Menus.map((menu, index) => (
                    <li key={index} className={`${menu.gap ? 'mt-9' : 'mt-2'} text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#ffffff26] rounded-md`}>
                        <div>{menu.icon}</div>
                        <span className={`${!open && 'hidden'} origin-left duration-200 `}>{menu.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
