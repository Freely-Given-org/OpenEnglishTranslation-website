import { MenuIcon, XIcon } from 'Assets/SVGs';
import { SecondaryButton } from 'Components/buttons/SecondaryButton/SecondaryButton';
import { NextPage } from 'next';
import NextLink from 'next/link';
import { useState } from 'react';

import styles from './Header.module.scss';
import { ColorLogo } from '../../Assets/ColorLogo';
import SideMenu from '../../Components/menu/SideMenu/SideMenu';
import About from '../../Components/navDropdowns/About';
import Design from '../../Components/navDropdowns/Design';
import Discussion from '../../Components/navDropdowns/Discussion';
import Intro from '../../Components/navDropdowns/Intro';
import Resources from '../../Components/navDropdowns/Resources';


const Header: NextPage = () => {
    const [sideMenu, setsideMenu] = useState(false);

    return (
        <div className={styles['header']}>
            <div className={styles['inner']}>
                <div className={styles['main-logo']}>
                    <NextLink href={'/'}>
                        <ColorLogo className={styles['main-logo']} />
                    </NextLink>
                </div>
                <nav className={styles['big-nav']}>
                    <Intro />
                    <Design />
                    <Resources />
                    <Discussion />
                    <About />
                </nav>

                {sideMenu ? (
                    <SideMenu>
                        <span onClick={() => setsideMenu(false)}>
                            <XIcon className={styles['close-btn']} />
                        </span>
                        
                        <ul className={styles['phone-nav']}>
                            <li>
                                <Intro phoneNav={true} />
                            </li>
                            <li>
                                <Design phoneNav={true} />
                            </li>
                            <li>
                                <NextLink href={'/Reader'}>Reader</NextLink>
                            </li>
                            <li>
                                <Resources phoneNav={true} />
                            </li>
                            <li>
                                <Discussion phoneNav={true} />
                            </li>
                            <li>
                                <About phoneNav={true} />
                            </li>
                        </ul>
                    </SideMenu>
                ) : (
                    <div>
                        <span  className={styles['cta-btn']} >
                            <SecondaryButton href='/Reader'>
                                Read the OET
                            </SecondaryButton>
                        </span>
                        
                        <span onClick={() => setsideMenu(true)}>
                            <MenuIcon className={styles['small-nav']} />
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
