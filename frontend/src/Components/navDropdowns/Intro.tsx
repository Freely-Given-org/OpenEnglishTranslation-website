import DropDownMenu, { dropMenu } from '../menu/DropDownMenu/DropDownMenu';

const menu: dropMenu = {
    title: 'Intro',
    items: [
        {
            name: 'Overview',
            link: '/Intro/Overview',
        },
        {
            name: 'Name',
            link: '/Intro/Name',
        },
        {
            name: 'Who for?',
            link: '/Intro/WhoFor',
        },
        {
            name: 'Stories',
            link: '/Intro/Stories',
        },
    ],
};

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type props = {
    phoneNav?: boolean;
};

function Intro({ phoneNav }: props) {
    return (
        <>
            <DropDownMenu isPhoneNav={phoneNav} menu={menu} />
        </>
    );
}

export default Intro;
