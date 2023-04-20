import { useEffect, useRef } from 'react';

import Footer from '../Layouts/Footer/Footer';
import Header from '../Layouts/Header/Header';
import Main from '../Layouts/main/main';
import styles from './404.module.scss';
import styled from '@emotion/styled';

const speed = 1.2;

function NotFount404() {
    let childrenWidth: number;
    let childrenHeight: number;

    let parentWidth: number;
    let parentHeight: number;
    let element: any;
    let x: number, y: number;

    let start: number, previousTimeStamp: number;
    let xSpeed = speed,
        ySpeed = speed;
    let stopAnimation: boolean;

    const parentRef = useRef<HTMLDivElement>(null);
    const childrenRef = useRef<HTMLDivElement>(null);

    const getDymentions = () => {
        if (parentRef.current) {
            parentHeight = parentRef.current.offsetHeight / 2;
            parentWidth = parentRef.current.offsetWidth / 2;
        }

        if (childrenRef.current) {
            childrenHeight = childrenRef.current.offsetHeight / 2;
            childrenWidth = childrenRef.current.offsetWidth / 2;
        }
    };

    useEffect(() => {
        getDymentions();
        window.addEventListener('resize', getDymentions);

        element = document.getElementById('floaty-thing');
        x = getRandomNumber(
            -(parentWidth - childrenWidth),
            parentWidth - childrenWidth,
        );
        y = getRandomNumber(
            -(parentHeight - childrenHeight),
            parentHeight - childrenHeight,
        );
        window.requestAnimationFrame(bounceAnimation);

        return () => {
            stopAnimation = true;
            const id = window.requestAnimationFrame(bounceAnimation);
            window.cancelAnimationFrame(id);
        };
    }, []);

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
            element.style.transform = `translateY(${y}px) translateX(${x}px)`;
        }
        if (stopAnimation !== true) {
            window.requestAnimationFrame(bounceAnimation);
        }
    }

    return (
        <>
            <Header />
            <Main>
                <NF404 ref={parentRef}>
                    <FLoatingDiv
                        ref={childrenRef}
                        id='floaty-thing'
                      
                    >
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
