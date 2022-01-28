import './Footer.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

import { BigHomeLogo } from '../../Assets/SVGs';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <span className='home-logo'>
                    <Link to={'/'}>
                        <BigHomeLogo className='big-main-logo' />
                    </Link>
                </span>
                <div className='link-list-left'>
                    <ul>
                        <li>
                            <Link to={'/overview'}>Overview</Link>
                        </li>
                        <li>
                            <Link to={'/LV'}>Literal Version</Link>
                        </li>
                        <li>
                            <Link to={'/RV'}>Readers Version</Link>
                        </li>
                        <li>
                            <Link to={'/OET'}>Source Texts</Link>
                        </li>
                        <li>
                            <Link to={'/source-texts'}>FAQs</Link>
                        </li>
                    </ul>
                </div>
                <div className='link-list-right'>
                    <ul>
                        <li>
                            <Link to={'/OET'}>About OET</Link>
                        </li>
                        <li>
                            <Link to={'/freely-given'}>About Freely-Given</Link>
                        </li>
                        <li>
                            <Link to={'/core-values'}>Core Values</Link>
                        </li>
                        <li>
                            <Link to={'/statement-of-faith'}>Statement of Faith</Link>
                        </li>
                        <li>
                            <Link to={'/partners'}>Our Partners</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className='nav-social'>
                    <a
                        href='https://www.facebook.com/'
                        className='social-icon'
                        target='blank'
                    >
                        <FacebookIcon className='facebook-icon' />
                    </a>
                    <a href=''>
                        <TwitterIcon className='twitter-icon' />
                    </a>
                </div>
                <span className='copyright'>
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
