import DropDownMenu, { dropMenu } from '../menu/DropDownMenu';

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
