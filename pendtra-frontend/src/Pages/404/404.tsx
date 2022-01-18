/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import Header from "../../Layouts/Header/Header";
import "./404.scss";

const widthLogo = 306 / 2;
const heightLogo = 266 / 2;
const speed = 1.2;

function NotFount404() {
  const vars = useRef<HTMLDivElement>(null);
  let width: number;
  let height: number;
  let element: any;
  let x: number, y: number;

  let start: number, previousTimeStamp: number;
  let xSpeed = speed,
    ySpeed = speed;
  let stopAnimation: boolean;

  const getDymentions = () => {
    if (vars.current !== null) {
      const newWidth = vars.current.clientWidth;
      width = newWidth / 2;

      const newHeight = vars.current.clientHeight;
      height = newHeight / 2;
    }
  };
  useEffect(() => {
    getDymentions();
    window.addEventListener("resize", getDymentions);

    element = document.getElementById("floaty-thing");
    x = getRandomNumber(-(width - widthLogo), width - widthLogo);
    y = getRandomNumber(-(height - heightLogo), height - heightLogo);
    window.requestAnimationFrame(bounceAnimation);

    return () => {
      stopAnimation = true;
      const id = window.requestAnimationFrame(bounceAnimation);
      window.cancelAnimationFrame(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      if (x + widthLogo >= width) {
        xSpeed = -xSpeed;
        x = width - widthLogo;
      } else if (x - widthLogo <= -width) {
        xSpeed = -xSpeed;
        x = -width + widthLogo;
      }
      if (y + heightLogo + 20 >= height) {
        ySpeed = -ySpeed;
        y = height - heightLogo - 20;
      } else if (y - heightLogo + 45 <= -height) {
        ySpeed = -ySpeed;
        y = -height + heightLogo - 45;
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
      <div className="NF404" ref={vars}>
        <div ref={element} id="floaty-thing" className="floaty-thing">
          <div className="">404</div>
          <div className="page404">page not Found</div>
        </div>
      </div>
    </>
  );
}

export default NotFount404;
