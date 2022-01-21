import DropDownMenu, { dropMenu } from '../menu/DropDownMenu/DropDownMenu';

const menu: dropMenu = {
    title: 'Resources',
    items: [
        {
            name: 'Formats',
            link: '/formats',
        },
        {
            name: 'Downloads',
            link: '/downloads',
        },
    ],
};

function Resources() {
    return (
        <>
            <DropDownMenu menu={menu} />
        </>
    );
}

export default Resources;
