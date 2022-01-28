import DropDownMenu, { dropMenu } from '../menu/DropDownMenu/DropDownMenu';

const menu: dropMenu = {
    title: 'Design',
    items: [
        {
            name: 'Overview',
            link: '/overview',
        },
        {
            name: 'Literal Version',
            link: '/literal-version',
        },
        {
            name: 'Reader’s Version',
            link: '/readers-version',
        },
        {
            name: 'Source Texts',
            link: '/source-texts',
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
