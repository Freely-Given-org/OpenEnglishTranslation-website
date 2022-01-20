import './Header.scss';
import { Link } from 'react-router-dom';

import About from '../../Components/navDropdowns/About';
import Design from '../../Components/navDropdowns/Design';
import Resources from '../../Components/navDropdowns/Resources';

function Header() {
    return (
        <div className="header">
            <Link to={'/'} className="main-logo">
                <svg
                    version="1.2"
                    viewBox="0 0 9500 1400"
                    preserveAspectRatio="xMidYMid"
                    fill-rule="evenodd"
                    stroke-width="28.222"
                    stroke-linejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    xml:space="preserve"
                >
                    <defs class="ClipPathGroup">
                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                            <path d="M0 0h9500v1400H0z" />
                        </clipPath>
                    </defs>
                    <g class="SlideGroup">
                        <g class="Slide" clip-path="url(#a)">
                            <g class="Page">
                                <g class="Graphic">
                                    <path
                                        class="BoundingBox"
                                        fill="none"
                                        d="M0 0h10026v1526H0z"
                                    />
                                    <text class="SVGTextShape">
                                        <tspan
                                            class="TextParagraph"
                                            font-family="Liberation Sans, sans-serif"
                                            font-size="634"
                                            font-weight="400"
                                        >
                                            <tspan
                                                class="TextPosition"
                                                x="263"
                                                y="714"
                                            >
                                                <tspan>
                                                    OET | Open English
                                                    Translation
                                                </tspan>
                                            </tspan>
                                        </tspan>
                                    </text>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>{' '}
            </Link>
            <nav>
                <Design />
                <Link to={'/reader'}>Reader</Link>
                <Resources />
                <Link to={'/blog'}>Blog</Link>
                <About />
            </nav>
        </div>
    );
}

export default Header;
