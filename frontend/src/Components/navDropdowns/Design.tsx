import DropDownMenu, { dropMenu } from '../menu/DropDownMenu/DropDownMenu';

const menu: dropMenu = {
    title: 'Design',
    items: [
        {
            name: 'Overview',
            link: '/Design/Overview',
        },
        {
            name: 'Name',
            link: '/Design/Name',
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
            name: 'Conventional Edition',
            link: '/Design/ConventionalEdition',
        },
        {
            name: 'Explorers’ Edition',
            link: '/Design/ExplorersEdition',
        },
        {
            name: 'Source Texts',
            link: '/Design/SourceTexts',
        },
        {
            name: 'FAQs',
            link: '/Design/FAQ',
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
