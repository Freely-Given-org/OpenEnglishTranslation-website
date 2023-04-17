import CloseIcon from '@mui/icons-material/Close';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

import { BigHomeLogo, SmallHomeLogo } from '../../Assets/SVGs';
import SideMenu from '../../Components/menu/SideMenu/SideMenu';
import About from '../../Components/navDropdowns/About';
import Design from '../../Components/navDropdowns/Design';
import Resources from '../../Components/navDropdowns/Resources';
import styles from './Header.module.scss';

const Header: NextPage = () => {
    const [sideMenu, setsideMenu] = useState(false);

    return (
        <div className={styles['header']}>
            <div className={styles['main-logo']}>
                <Link href={'/'}>
                    <a>
                        <BigHomeLogo className={styles['big-main-logo']} />
                        <SmallHomeLogo className={styles['small-main-logo']} />
                    </a>
                </Link>
            </div>
            <nav className={styles['big-nav']}>
                <Design />
                {/* <Link href={'/Reader'}>Reader</Link> */}
                <Link href='https://Freely-Given.org/OBD/OET/bySec/JHN_S2.htm#Top'>Reader</Link>
                <Resources />
                <Link href={'/Blog'}>Blog</Link>
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
