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
            name: 'FAQs',
            link: '/FAQ',
        },
    ],
};

function Design() {
    return (
        <>
            <DropDownMenu menu={menu} />
        </>
    );
}

export default Design;
