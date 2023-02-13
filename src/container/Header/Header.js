import './Header.scss';

import { useContext } from 'react';
import { StateContext } from '../../state/context/context';
import Actions from '../../state/Actions/Actions';

export default function Header(props) {
    const {state, dispatch} = useContext(StateContext);

    // function handleToggle() {
    //     const newTheme = props.theme === 'light' ? 'dark' : 'light';
    //     props.setTheme(newTheme);
    // }

    return (
        <header className={'Header' + ' Header' + (state.theme === 'light' ? '--light' : '--dark')}>
            <div className="header__item header__item--logo">Anna's Blog</div>
            <div className="header__item header__item--navigation">
                <ul>
                    <li className='nav__item' key={"Home"}>Home</li>
                    <li className='nav__item'key={"About Me"}>About Me</li>
                    <li className='nav__item' key={"Posts"}>Posts</li>
                    <li className='nav__item' key={"Contact"}>Contact</li>
                </ul>
            </div>
            <div className="header__item header__item--theme">
                <button onClick={() => dispatch({type: Actions.toggleTheme})}>{state.theme === 'light' ? <span>Dark Theme</span> : <span>Light Theme</span>}</button>
            </div>
        </header>
    )
}