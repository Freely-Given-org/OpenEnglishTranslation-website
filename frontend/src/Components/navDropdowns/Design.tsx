import DropDownMenu, { dropMenu } from '../menu/DropDownMenu/DropDownMenu';

const menu: dropMenu = {
    title: 'Design',
    items: [
        {
            name: 'Overview',
            link: 'design/overview',
        },
        {
            name: 'Literal Version',
            link: 'design/literal-version',
        },
        {
            name: 'Readers’ Version',
            link: 'design/readers-version',
        },
        {
            name: 'Conventional Edition',
            link: 'design/conventional-edition',
        },
        {
            name: 'Explorers’ Edition',
            link: 'design/explorers-edition',
        },
        {
            name: 'Source Texts',
            link: 'design/source-texts',
        },
        {
            name: 'FAQs',
            link: 'design/FAQ',
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
