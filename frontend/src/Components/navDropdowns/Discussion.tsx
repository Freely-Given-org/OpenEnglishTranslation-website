import DropDownMenu, { dropMenu } from '../menu/DropDownMenu/DropDownMenu';

const menu: dropMenu = {
    title: 'Discussion',
    items: [
        {
            name: 'Word Essays',
            link: '/Discussion/WordEssays',
        },
        {
            name: 'Blog',
            link: '/Discussion/Blog',
        },
        {
            name: 'New',
            link: '/Discussion/New',
        },
    ],
};

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type props = {
    phoneNav?: boolean;
};

function Discussion({ phoneNav }: props) {
    return (
        <>
            <DropDownMenu isPhoneNav={phoneNav} menu={menu} />
        </>
    );
}

export default Discussion;
