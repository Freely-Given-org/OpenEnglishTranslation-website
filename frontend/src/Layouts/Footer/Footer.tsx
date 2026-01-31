import { FacebookIcon, TwitterXIcon, SubstackIcon } from 'Assets/SVGs';
import { WhiteLogo } from 'Assets/WhiteLogo';
import Link from 'next/link';

import styles from './Footer.module.scss';

function Footer() {
    return (
        <div className={styles['footer']}>
            <div className={styles['inner']}>
                <div className={styles['grid-cols']}>
                    <div className={styles['column']}>
                        <Link href={'/'}>
                            <WhiteLogo className={styles['logo']} />
                        </Link>
                        <p className={styles['description']}>
                            A new, exciting, radical, freely-licensed Bible
                            translation.
                        </p>
                        <div className={styles['social-links']}>
                            <Link href='https://x.com/OETBible' target='blank'>
                                <TwitterXIcon className={styles['icon']} />
                            </Link>
                            <Link
                                href='https://oetbible.substack.com/'
                                target='blank'
                            >
                                <SubstackIcon className={styles['icon']} />
                            </Link>
                            <Link href='/' target='blank'>
                                <FacebookIcon className={styles['icon']} />
                            </Link>
                        </div>
                    </div>
                    <div className={styles['column']}>
                        <span className={styles['section-heading']}>
                            Information
                        </span>
                        <ul>
                            <li>
                                <Link href={'/Intro/WhoFor'}>
                                    Who is it for?
                                </Link>
                            </li>
                            <li>
                                <Link href={'/Intro/Overview'}>Overview</Link>
                            </li>
                            <li>
                                <Link href={'/Intro/Name'}>Name</Link>
                            </li>

                            <li>
                                <Link href={'/Design/SourceTexts'}>
                                    Source texts
                                </Link>
                            </li>
                            <li>
                                <Link href={'/Discussion/FAQ'}>FAQs</Link>
                            </li>
                            <li>
                                <Link href={'/Intro/Stories'}>Stories</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles['column']}>
                        <span className={styles['section-heading']}>About</span>
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
                                <Link href={'/About/CoreValues'}>
                                    Core values
                                </Link>
                            </li>
                            <li>
                                <Link href={'/About/StatementOfFaith'}>
                                    Statement of faith
                                </Link>
                            </li>
                            <li>
                                <Link href={'/About/Partners'}>
                                    Our partners
                                </Link>
                            </li>
                            <li>
                                <Link href={'/About/Contact'}>Contact us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles['column']}>
                        <span className={styles['section-heading']}>
                            Versions
                        </span>
                        <ul>
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
                        </ul>
                    </div>
                </div>
                <div className={styles['bottom']}>
                    <span className={styles['copyright']}>
                        Website copyright &copy; 2022-2026 &nbsp;
                        <a
                            href='https://GitHub.com/Freely-Given-org'
                            target='blank'
                        >
                            Freely-Given.org
                        </a>
                    </span>
                    <span className={styles['buildnote']}>
                        (Site last built: 1 Feb 2026)
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
