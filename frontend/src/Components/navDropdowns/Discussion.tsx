import DropDownMenu, { dropMenu } from '../menu/DropDownMenu/DropDownMenu';

const menu: dropMenu = {
    title: 'Discussion',
    items: [
        {
            name: 'Biblical names',
            link: '/Discussion/BiblicalNames',
        },
        {
            name: 'Word essays',
            link: '/Discussion/WordEssays',
        },
        {
            name: 'Theological essays',
            link: '/Discussion/KTEssays',
        },
        {
            name: 'Style essays',
            link: '/Discussion/StyleEssays',
        },
        {
            name: 'Blog',
            link: '/Discussion/Blog',
        },
        {
            name: 'FAQs',
            link: '/Discussion/FAQ',
        },
        {
            name: 'New topic',
            link: '/Discussion/New',
        },
        {
            name: 'Challenge / Errors',
            link: '/Discussion/Challenge',
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
