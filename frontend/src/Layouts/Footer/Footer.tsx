import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';

import { BigHomeLogo } from '../../Assets/SVGs';
import styles from './Footer.module.scss';

function Footer() {
    return (
        <div className={styles['footer']}>
            <div className={styles['footer-container']}>
                <span className={styles['home-logo']}>
                    <Link href={'/'}>
                        <a>
                            <BigHomeLogo className={styles['big-main-logo']} />
                        </a>
                    </Link>
                </span>
                <div className={styles['link-list-left']}>
                    <ul>
                        <li>
                            <Link href={'/overview'}>Overview</Link>
                        </li>
                        <li>
                            <Link href={'/literal-version'}>
                                Literal Version
                            </Link>
                        </li>
                        <li>
                            <Link href={'/readers-version'}>
                                Readers Version
                            </Link>
                        </li>
                        <li>
                            <Link href={'/OET'}>Source Texts</Link>
                        </li>
                        <li>
                            <Link href={'/source-texts'}>FAQs</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles['link-list-right']}>
                    <ul>
                        <li>
                            <Link href={'/OET'}>About OET</Link>
                        </li>
                        <li>
                            <Link href={'/freely-given'}>
                                About Freely-Given
                            </Link>
                        </li>
                        <li>
                            <Link href={'/core-values'}>Core Values</Link>
                        </li>
                        <li>
                            <Link href={'/statement-of-faith'}>
                                Statement of Faith
                            </Link>
                        </li>
                        <li>
                            <Link href={'/partners'}>Our Partners</Link>
                        </li>
                        <li>
                            <Link href={'/contact'}>Contact Us</Link>
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
                    <a href=''>
                        <TwitterIcon className={styles['twitter-icon']} />
                    </a>
                </div>
                <span className={styles['copyright']}>
                    Copyright © 2022 &nbsp;
                    <a
                        href='https://github.com/Freely-Given-org'
                        target='blank'
                    >
                        Freely-Given.org
                    </a>
                </span>
            </div>
        </div>
    );
}

export default Footer;
