import React from "react";
import s from "../Sidebar.module.scss";
import {NavLink} from "react-router-dom";

const Sidebaritem = ({item})=>{
    return (
        <NavLink to = {item.link} className={s.sidebar__item}>
            <a href="#" className={s.sidebar__link}>{item.text}</a>
        </NavLink>
    );
}
export default Sidebaritem;
