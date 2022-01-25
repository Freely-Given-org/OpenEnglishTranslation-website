import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Triangle } from '../../../Assets/SVGs';
import './DropDownMenu.scss';

interface item {
    name: string;
    link: string;
}

export interface dropMenu {
    title: string;
    items: item[];
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Props = {
    menu: dropMenu;
    isPhoneNav?: boolean;
};

function DropDownMenu({ menu, isPhoneNav }: Props) {
    const [MenuState, setMenuState] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const listItems = menu.items.map((item) => {
        return (
            <li>
                <Link to={item.link}>{item.name}</Link>
            </li>
        );
    });

    const clicked = () => {
        if (!isClicked) {
            setIsClicked(true);
            if (!MenuState) {
                setMenuState(true);
            }
            setTimeout(() => {
                window.addEventListener('click', close);
            }, 0);
        }
    };

    const mouseLeave = () => {
        if (!isClicked) {
            close();
        }
    };

    const close = () => {
        setIsClicked(false);
        setMenuState(false);
        setTimeout(() => {
            window.removeEventListener('click', close);
        }, 0);
    };
    const mouseHover = () => {
        setMenuState(true);
    };

    return (
        <>
            {isPhoneNav ? (
                <div className='phone-menu' onClick={clicked}>
                    <button className='phone-menu-name'>
                        <Triangle
                            className={`triangle ${MenuState ? 'turn' : null}`}
                        />
                        {menu.title}
                    </button>
                    {MenuState ? (
                        <ul className='phone-menu-items'>{listItems}</ul>
                    ) : null}
                </div>
            ) : (
                <div
                    className='drop-menu'
                    onClick={clicked}
                    onMouseEnter={mouseHover}
                    onMouseLeave={mouseLeave}
                >
                    <button
                        className={`menu-name menu-title ${
                            MenuState ? 'drop-menu-title' : ''
                        }`}
                    >
                        {menu.title}
                    </button>

                    {MenuState ? (
                        <ul className='menu-items'>{listItems}</ul>
                    ) : null}
                </div>
            )}
        </>
    );
}

export default DropDownMenu;
