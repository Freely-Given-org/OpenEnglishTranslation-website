import DropDownMenu, { dropMenu } from '../menu/DropDownMenu/DropDownMenu';

const menu: dropMenu = {
    title: 'Resources',
    items: [
        {
            name: 'Formats',
            link: '/resources/formats',
        },
        {
            name: 'Downloads',
            link: '/resources/downloads',
        },
    ],
};

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type props = {
    phoneNav?: boolean;
};

function Resources({ phoneNav }: props) {
    return (
        <>
            <DropDownMenu isPhoneNav={phoneNav} menu={menu} />
        </>
    );
}

export default Resources;
