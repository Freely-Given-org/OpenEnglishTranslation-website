import DropDownMenu, { dropMenu } from '../menu/DropDownMenu/DropDownMenu';

const menu: dropMenu = {
    title: 'Design',
    items: [
        {
            name: 'Overview',
            link: '/Overview',
        },
        {
            name: 'Literal Version',
            link: '/LiteralVersion',
        },
        {
            name: 'Reader’s Version',
            link: '/ReadersVersion',
        },
        {
            name: 'Source Texts',
            link: '/SourceTexts',
        },
        {
            name: 'FAQs',
            link: '/FAQ',
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
