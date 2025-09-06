import DropDownMenu, { dropMenu } from '../menu/DropDownMenu/DropDownMenu';

const menu: dropMenu = {
    title: 'Design',
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
            name: 'Readers’ Version',
            link: '/Design/ReadersVersion',
        },
        {
            name: 'Literal Version',
            link: '/Design/LiteralVersion',
        },
        {
            name: 'Explorers’ Edition',
            link: '/Design/ExplorersEdition',
        },
        {
            name: 'Conventional Edition',
            link: '/Design/ConventionalEdition',
        },
        {
            name: 'Source texts',
            link: '/Design/SourceTexts',
        },
    ],
};

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type props = {
    phoneNav?: boolean;
};

function Design({ phoneNav }: props) {
    return (
        <>
            <DropDownMenu isPhoneNav={phoneNav} menu={menu} />
        </>
    );
}

export default Design;
