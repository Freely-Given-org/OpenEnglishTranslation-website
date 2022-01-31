import { useEffect, useRef } from 'react';

import './404.scss';

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
        <div className='NF404' ref={parentRef}>
            <div ref={childrenRef} id='floaty-thing' className='floaty-thing'>
                <div className=''>404</div>
                <div className='page404'>Page not found</div>
            </div>
        </div>
    );
}

export default NotFount404;
