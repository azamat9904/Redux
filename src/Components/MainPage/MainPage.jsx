import React from 'react';
import s from './MainPage.module.scss';
import AddField from './AddField/AddField';
import Posts from './Posts/Posts';

import {changeTextActionCreator} from "../../Redux/MainPageReducer";
import {addTextActionCreator} from "../../Redux/MainPageReducer";

const MainPage = ({state,dispatch})=>{
    const addText = ()=>{
        const action = addTextActionCreator();
        dispatch(action);
    };
    const changeText = (text)=>{
        const action = changeTextActionCreator(text);
        dispatch(action);
    };

    return (
        <div className={s.homePage}>
            <AddField inputText = {state.mainPage.text} changeText = {changeText} addText = {addText}/>
            <Posts posts = {state.mainPage.posts} />
        </div>
    );
}
export default MainPage;
