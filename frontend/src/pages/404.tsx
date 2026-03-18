import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';

import Footer from '../Layouts/Footer/Footer';
import Header from '../Layouts/Header/Header';
import Main from '../Layouts/main/main';
// import styles from './404.module.scss';

const speed = 1.2;

function NotFount404() {
    const parentRef = useRef<HTMLDivElement>(null);
    const childrenRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let childrenWidth = 0;
        let childrenHeight = 0;
        let parentWidth = 0;
        let parentHeight = 0;

        let start: number;
        const previousTimeStamp = -1;
        let xSpeed = speed,
            ySpeed = speed;
        let stopAnimation = false;

        const getDimensions = () => {
            if (parentRef.current) {
                parentHeight = parentRef.current.offsetHeight / 2;
                parentWidth = parentRef.current.offsetWidth / 2;
            }

            if (childrenRef.current) {
                childrenHeight = childrenRef.current.offsetHeight / 2;
                childrenWidth = childrenRef.current.offsetWidth / 2;
            }
        };

        getDimensions();
        window.addEventListener('resize', getDimensions);

        const element = document.getElementById('floaty-thing');
        let x = getRandomNumber(
            -(parentWidth - childrenWidth),
            parentWidth - childrenWidth,
        );
        let y = getRandomNumber(
            -(parentHeight - childrenHeight),
            parentHeight - childrenHeight,
        );

        function getRandomNumber(min: number, max: number): number {
            return Math.random() * (max - min) + min;
        }

        function bounceAnimation(timestamp: number) {
            if (start === undefined) {
                start = timestamp;
            }
            if (previousTimeStamp !== timestamp) {
                x = x + xSpeed;
                y = y + ySpeed;

                if (x + childrenWidth >= parentWidth) {
                    xSpeed = -xSpeed;
                    x = parentWidth - childrenWidth;
                } else if (x - childrenWidth <= -parentWidth) {
                    xSpeed = -xSpeed;
                    x = -parentWidth + childrenWidth;
                }
                if (y + childrenHeight >= parentHeight) {
                    ySpeed = -ySpeed;
                    y = parentHeight - childrenHeight;
                } else if (
                    y - childrenHeight + 0.4 * childrenHeight <=
                    -parentHeight
                ) {
                    ySpeed = -ySpeed;
                    y = -parentHeight + childrenHeight - 0.4 * childrenHeight;
                }
                if (element) {
                    element.style.transform = `translateY(${y}px) translateX(${x}px)`;
                }
            }
            if (stopAnimation !== true) {
                window.requestAnimationFrame(bounceAnimation);
            }
        }

        window.requestAnimationFrame(bounceAnimation);

        return () => {
            stopAnimation = true;
            window.removeEventListener('resize', getDimensions);
        };
    }, []);

    return (
        <>
            <Header />
            <Main>
                <NF404 ref={parentRef}>
                    <FLoatingDiv ref={childrenRef} id='floaty-thing'>
                        <div>404</div>
                        <Page404>Page not found</Page404>
                    </FLoatingDiv>
                </NF404>
            </Main>
            <Footer />
        </>
    );
}

export default NotFount404;

const Page404 = styled.div`
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;

const NF404 = styled.div`
    //   height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    // min-height: 90vh;
    font-size: 214px;
`;

const FLoatingDiv = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    //   animation: Floaty 25s linear infinite;
`;
