import React, { useState } from 'react';
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsChevronDown, BsChevronUp } from 'react-icons/bs';
import './App.css';  // Make sure this file is correctly linked to your project

const Sidebar = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [dropdowns, setDropdowns] = useState({
        dashboard: false,
        products: false,
        categories: false,
        customers: false,
        inventory: false,
        reports: false,
        setting: false
    });

    const toggleDropdown = (menu) => {
        setDropdowns(prevState => ({
            ...prevState,
            [menu]: !prevState[menu]
        }));
    };

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    SHAFIQUL ALAM
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="#" onClick={() => toggleDropdown('dashboard')}>
                        <BsGrid1X2Fill className='icon' /> Dashboard
                        {dropdowns.dashboard ? <BsChevronUp className='icon' /> : <BsChevronDown className='icon' />}
                    </a>
                    {dropdowns.dashboard && (
                        <ul className='dropdown-list'>
                            <li>Overview</li>
                            <li>Stats</li>
                        </ul>
                    )}
                </li>
                <li className='sidebar-list-item'>
                    <a href="#" onClick={() => toggleDropdown('products')}>
                        <BsFillArchiveFill className='icon' /> Products
                        {dropdowns.products ? <BsChevronUp className='icon' /> : <BsChevronDown className='icon' />}
                    </a>
                    {dropdowns.products && (
                        <ul className='dropdown-list padding'>
                            <li className='padding'>All Products</li>
                            <li className='padding'>Add Product</li>
                        </ul>
                    )}
                </li>
                <li className='sidebar-list-item'>
                    <a href="#" onClick={() => toggleDropdown('categories')}>
                        <BsFillGrid3X3GapFill className='icon' /> Categories
                        {dropdowns.categories ? <BsChevronUp className='icon' /> : <BsChevronDown className='icon' />}
                    </a>
                    {dropdowns.categories && (
                        <ul className='dropdown-list'>
                            <li>All Categories</li>
                            <li>Add Category</li>
                        </ul>
                    )}
                </li>
                <li className='sidebar-list-item'>
                    <a href="#" onClick={() => toggleDropdown('customers')}>
                        <BsPeopleFill className='icon' /> Customers
                        {dropdowns.customers ? <BsChevronUp className='icon' /> : <BsChevronDown className='icon' />}
                    </a>
                    {dropdowns.customers && (
                        <ul className='dropdown-list'>
                            <li>All Customers</li>
                            <li>Add Customer</li>
                        </ul>
                    )}
                </li>
                <li className='sidebar-list-item'>
                    <a href="#" onClick={() => toggleDropdown('inventory')}>
                        <BsListCheck className='icon' /> Inventory
                        {dropdowns.inventory ? <BsChevronUp className='icon' /> : <BsChevronDown className='icon' />}
                    </a>
                    {dropdowns.inventory && (
                        <ul className='dropdown-list'>
                            <li>Stock</li>
                            <li>Orders</li>
                        </ul>
                    )}
                </li>
                <li className='sidebar-list-item'>
                    <a href="#" onClick={() => toggleDropdown('reports')}>
                        <BsMenuButtonWideFill className='icon' /> Reports
                        {dropdowns.reports ? <BsChevronUp className='icon' /> : <BsChevronDown className='icon' />}
                    </a>
                    {dropdowns.reports && (
                        <ul className='dropdown-list'>
                            <li>Sales Report</li>
                            <li>Customer Report</li>
                        </ul>
                    )}
                </li>
                <li className='sidebar-list-item'>
                    <a href="#" onClick={() => toggleDropdown('setting')}>
                        <BsFillGearFill className='icon' /> Setting
                        {dropdowns.setting ? <BsChevronUp className='icon' /> : <BsChevronDown className='icon' />}
                    </a>
                    {dropdowns.setting && (
                        <ul className='dropdown-list'>
                            <li>Profile</li>
                            <li>Account</li>
                        </ul>
                    )}
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
