import React from 'react';
import s from './Sidebar.module.scss';
import SidebarItem from './SidebarItem/SidebarItem';
const Sidebar = ({items})=>{
    const lists = items.map((item,index)=> <SidebarItem item = {item} key = {index}/>)
    return (
        <div className={s.sidebar}>
            <nav className={s.sidebar__nav}>
                <ul className={s.sidebar__list}>
                    {lists}
                </ul>
            </nav>
        </div>
    );
}
export default Sidebar;
