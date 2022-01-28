import DropDownMenu, { dropMenu } from '../menu/DropDownMenu/DropDownMenu';

const menu: dropMenu = {
    title: 'About',
    items: [
        {
            name: 'About OET',
            link: '/OET',
        },
        {
            name: 'About Freely-Given',
            link: '/freely-given',
        },
        {
            name: 'Core Values',
            link: '/core-values',
        },
        {
            name: 'Statement of Faith',
            link: '/statement-of-faith',
        },
        {
            name: 'Our Partners',
            link: '/partners',
        },
        {
            name: 'Contact Us',
            link: '/contact',
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
