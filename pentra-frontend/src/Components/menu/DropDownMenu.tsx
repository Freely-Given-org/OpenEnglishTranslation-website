import { useState } from "react";
import { Link } from "react-router-dom";
import "./DropDownMenu.scss";

interface item {
  name: string;
  link: string;
}

export interface dropMenu {
  title: string;
  items: item[];
}

function DropDownMenu(props: any) {
  const [MenuState, setMenuState] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const menu: dropMenu = props.menu;
  const listItems = menu.items.map((item) => {
    return (
      <li>
        <Link to={item.link}>{item.name}</Link>
      </li>
    );
  });

  const clicked = async () => {
    if (!isClicked) {
      setIsClicked(true);
      if (!MenuState) {
        setMenuState(true);
      }
      setTimeout(() => {
        window.addEventListener("click", close);
      }, 0);
    }
  };

  const mouseLeave = () => {
    if (!isClicked) {
      close();
    }
  };

  const close = () => {
    setIsClicked(false);
    setMenuState(false);
    setTimeout(() => {
      window.removeEventListener("click", close);
    }, 0);
  };
  const mouseHover = () => {
    setMenuState(true);
  };

  return (
    <div
      className="menu"
      onClick={clicked}
      onMouseEnter={mouseHover}
      onMouseLeave={mouseLeave}
    >
      <button
        className={`menuName menu-title ${MenuState ? "drop-menu-title" : ""}`}
      >
        {menu.title}
      </button>

      {MenuState ? <ul className="menuItems">{listItems}</ul> : null}
    </div>
  );
}

export default DropDownMenu;
