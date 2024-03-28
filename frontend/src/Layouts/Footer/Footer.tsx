import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from '@mui/material';
import NextLink from 'next/link';

import styles from './Footer.module.scss';
import { BigHomeLogo } from '../../Assets/SVGs';

function Footer() {
    return (
        <div className={styles['footer']}>
            <div className={styles['footer-container']}>
                <span className={styles['home-logo']}>
                    <Link component={NextLink} href={'/'}>
                        <BigHomeLogo className={styles['big-main-logo']} />
                    </Link>
                </span>
                <div className={styles['link-list-left']}>
                    <ul>
                        <li>
                            <Link href={'/Design/Overview'}>Overview</Link>
                        </li>
                        <li>
                            <Link href={'/Design/Name'}>Name</Link>
                        </li>
                        <li>
                            <Link href={'/Design/LiteralVersion'}>
                                Literal Version
                            </Link>
                        </li>
                        <li>
                            <Link href={'/Design/ReadersVersion'}>
                                Readers’ Version
                            </Link>
                        </li>
                        <li>
                            <Link href={'/Design/ExplorersEdition'}>
                                Explorers’ Edition
                            </Link>
                        </li>
                        <li>
                            <Link href={'/Design/ConventionalEdition'}>
                                Conventional Edition
                            </Link>
                        </li>
                        <li>
                            <Link href={'/Design/SourceTexts'}>
                                Source Texts
                            </Link>
                        </li>
                        <li>
                            <Link href={'/Design/FAQ'}>FAQs</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles['link-list-right']}>
                    <ul>
                        <li>
                            <Link href={'/About/OET'}>About OET</Link>
                        </li>
                        <li>
                            <Link href={'/About/Freely-Given'}>
                                About Freely-Given
                            </Link>
                        </li>
                        <li>
                            <Link href={'/About/CoreValues'}>Core Values</Link>
                        </li>
                        <li>
                            <Link href={'/About/StatementOfFaith'}>
                                Statement of Faith
                            </Link>
                        </li>
                        <li>
                            <Link href={'/About/Partners'}>Our Partners</Link>
                        </li>
                        <li>
                            <Link href={'/About/Licence'}>Licence</Link>
                        </li>
                        <li>
                            <Link href={'/About/Contact'}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles['nav-social']}>
                    <a
                        href='https://www.facebook.com/'
                        className='social-icon'
                        target='blank'
                    >
                        <FacebookIcon className={styles['facebook-icon']} />
                    </a>
                    <a href='https://twitter.com/OETBible'>
                        <TwitterIcon className={styles['twitter-icon']} />
                    </a>
                </div>
                <span className={styles['copyright']}>
                    Copyright © 2022-2024 &nbsp;
                    <a
                        href='https://GitHub.com/Freely-Given-org'
                        target='blank'
                    >
                        Freely-Given.org
                    </a>
                </span>
                <span className={styles['copyright']}>
                    <small>(Site last built: 2024-Mar-27)</small>
                </span>
            </div>
        </div>
    );
}

export default Footer;
