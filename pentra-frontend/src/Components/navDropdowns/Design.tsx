import DropDownMenu, { dropMenu } from "../menu/DropDownMenu";

const menu: dropMenu = {
  title: "Design",
  items: [
    {
      name: "Litereal Version",
      link: "/litereal-version"
    },
    {
      name: "Readers Version",
      link: "/readers-version"
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
