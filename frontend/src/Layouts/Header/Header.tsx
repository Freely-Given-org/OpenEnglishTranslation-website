import './Header.scss';
import CloseIcon from '@mui/icons-material/Close';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { BigHomeLogo, SmallHomeLogo } from '../../Assets/SVGs';
import SideMenu from '../../Components/menu/SideMenu/SideMenu';
import About from '../../Components/navDropdowns/About';
import Design from '../../Components/navDropdowns/Design';
import Resources from '../../Components/navDropdowns/Resources';

function Header() {
    const [sideMenu, setsideMenu] = useState(false);

    return (
        <div className='header'>
            <Link to={'/'} className='main-logo'>
                <BigHomeLogo className='big-main-logo' />
                <SmallHomeLogo className='small-main-logo' />
            </Link>
            <nav className='big-nav'>
                <Design />
                <Link to={'/reader'}>Reader</Link>
                <Resources />
                <Link to={'/blog'}>Blog</Link>
                <About />
            </nav>

            {sideMenu ? (
                <SideMenu>
                    <CloseIcon
                        onClick={() => setsideMenu(false)}
                        className='close-side-menu'
                    />
                    <ul className='phone-nav'>
                        <li>
                            <Design phoneNav={true} />
                        </li>
                        <li>
                            <Link
                                style={{ paddingLeft: '15px' }}
                                to={'/reader'}
                            >
                                Reader
                            </Link>
                        </li>
                        <li>
                            <Resources phoneNav={true} />
                        </li>
                        <li>
                            <Link to={'/blog'}>Blog</Link>
                        </li>
                        <li>
                            <About phoneNav={true} />
                        </li>
                    </ul>
                </SideMenu>
            ) : (
                <MenuRoundedIcon
                    onClick={() => setsideMenu(true)}
                    className='small-nav'
                />
            )}
        </div>
    );
}

export default Header;
