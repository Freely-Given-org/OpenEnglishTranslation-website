import DropDownMenu, { dropMenu } from '../menu/DropDownMenu/DropDownMenu';

const menu: dropMenu = {
    title: 'About',
    items: [
        {
            name: 'About OET',
            link: '/About/OET',
        },
        {
            name: 'About Freely-Given',
            link: '/About/Freely-Given',
        },
        {
            name: 'Core values',
            link: '/About/CoreValues',
        },
        {
            name: 'Statement of faith',
            link: '/About/StatementOfFaith',
        },
        {
            name: 'Our partners',
            link: '/About/Partners',
        },
        {
            name: 'Licence',
            link: '/About/Licence',
        },
        {
            name: 'Contact us',
            link: '/About/Contact',
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
