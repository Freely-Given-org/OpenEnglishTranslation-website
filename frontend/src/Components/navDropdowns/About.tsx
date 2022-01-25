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
            link: '/Freely-Given',
        },
        {
            name: 'Core Values',
            link: '/CoreValues',
        },
        {
            name: 'Statement of Faith',
            link: '/StatementOfFaith',
        },
        {
            name: 'Our Partners',
            link: '/Partners',
        },
        {
            name: 'Contact Us',
            link: '/Contact',
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
