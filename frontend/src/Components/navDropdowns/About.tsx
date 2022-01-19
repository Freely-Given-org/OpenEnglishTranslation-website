import DropDownMenu, { dropMenu } from '../menu/DropDownMenu';

const menu: dropMenu = {
    title: 'About',
    items: [
        {
            name: 'About OFR',
            link: '/OFR',
        },
        {
            name: 'About F-G.org',
            link: '/F-G.org',
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
