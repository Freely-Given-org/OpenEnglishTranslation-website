import CloseIcon from '@mui/icons-material/Close';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { NextPage } from 'next';
import { useState } from 'react';
import NextLink from 'next/link';

import { BigHomeLogo, SmallHomeLogo } from '../../Assets/SVGs';
import SideMenu from '../../Components/menu/SideMenu/SideMenu';
import About from '../../Components/navDropdowns/About';
import Design from '../../Components/navDropdowns/Design';
import Resources from '../../Components/navDropdowns/Resources';
import styles from './Header.module.scss';
import { Link } from '@mui/material';

const Header: NextPage = () => {
    const [sideMenu, setsideMenu] = useState(false);

    return (
        <div className={styles['header']}>
            <div className={styles['main-logo']}>
                <Link component={NextLink} href={'/'}>
                    <BigHomeLogo className={styles['big-main-logo']} />
                    <SmallHomeLogo className={styles['small-main-logo']} />
                </Link>
            </div>
            <nav className={styles['big-nav']}>
                <Design />
                <Link component={NextLink}  href='/Reader'>Reader</Link>
                <Resources />
                <Link component={NextLink}  href={'/Blog'}>Blog</Link>
                <About />
            </nav>

            {sideMenu ? (
                <SideMenu>
                    <CloseIcon
                        onClick={() => setsideMenu(false)}
                        className={styles.close_side_menu}
                    />
                    <ul className={styles['phone-nav']}>
                        <li>
                            <Design phoneNav={true} />
                        </li>
                        <li>
                            <Link href={'/Reader'}>Reader</Link>
                        </li>
                        <li>
                            <Resources phoneNav={true} />
                        </li>
                        <li>
                            <Link href={'/Blog'}>Blog</Link>
                        </li>
                        <li>
                            <About phoneNav={true} />
                        </li>
                    </ul>
                </SideMenu>
            ) : (
                <MenuRoundedIcon
                    onClick={() => setsideMenu(true)}
                    className={styles['small-nav']}
                />
            )}
        </div>
    );
};

export default Header;
