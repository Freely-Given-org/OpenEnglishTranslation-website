import DropDownMenu, { dropMenu } from '../menu/DropDownMenu';

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

function About() {
    return (
        <>
            <DropDownMenu menu={menu} />
        </>
    );
}

export default About;
