import React from 'react';
import s from './AddField.module.scss';

const AddField = ({inputText,changeText,addText})=>{
    const onChange = (e)=>{
        changeText(e.target.value);
    };
    const onAddText = ()=>{
        addText();
    };
    return (
        <div className={s.addField}>
            <textarea className={s.addField__textarea} placeholder="Добавить пост" value = {inputText} onInput={onChange}></textarea>
            <button className={s.addField__btn} onClick={onAddText}>Добавить</button>
        </div>
    );
}
export default AddField;
