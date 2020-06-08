import sidebarReducer from './SidebarReducer';
import mainPageReducer from './MainPageReducer';

const store = {
    _state: {
        sidebar:{
            items: [
                {text: 'Profile', link: '/'},
                {text: 'Messages', link: '/home'},
                {text: 'News', link: '/'},
                {text: 'Musics', link: '/'},
                {text: 'Settings', link: '/'},
            ]
        },
        mainPage:{
            posts:[
                {text: 'Salam'},
                {text: 'How are you'},
                {text: 'How are you'}
            ],
            text:''
        }
    },
    _render() {},
    subscribe(observer) {
        this._render = observer;
    },
    getState(){
        return this._state;
    },
    dispatch(action){
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);
        this._state.mainPage = mainPageReducer(this._state.mainPage,action);
        this._render(this._state);
    }
}
export default store;
