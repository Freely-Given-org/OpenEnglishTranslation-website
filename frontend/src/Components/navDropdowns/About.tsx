import DropDownMenu, { dropMenu } from '../menu/DropDownMenu/DropDownMenu';

const menu: dropMenu = {
    title: 'About',
    items: [
        {
            name: 'About OET',
            link: 'about/OET',
        },
        {
            name: 'About Freely-Given',
            link: 'about/freely-given',
        },
        {
            name: 'Core Values',
            link: 'about/core-values',
        },
        {
            name: 'Statement of Faith',
            link: 'about/statement-of-faith',
        },
        {
            name: 'Our Partners',
            link: 'about/partners',
        },
        {
            name: 'Contact Us',
            link: 'about/contact',
        },
    ],
};

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type props = {
    phoneNav?: boolean;
};

function About({ phoneNav }: props) {
    return (
        <>
            <DropDownMenu isPhoneNav={phoneNav} menu={menu} />
        </>
    );
}

export default About;
