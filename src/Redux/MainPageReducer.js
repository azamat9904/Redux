const CHANGE_TEXT_ACTION = "CHANGE_TEXT_ACTION";
const ADD_TEXT = "ADD_TEXT";

export const changeTextActionCreator = (text)=>({type:CHANGE_TEXT_ACTION,text:text});
export const addTextActionCreator = ()=>({type:ADD_TEXT});

const mainPageReducer = (state,action)=>{
    switch (action.type) {
        case CHANGE_TEXT_ACTION:
            state.text = action.text;
            break;
        case ADD_TEXT:
            const post = {text:state.text};
            state.posts.push(post);
            state.text = '';
            break;
    }
    return state;
};
export default mainPageReducer;
