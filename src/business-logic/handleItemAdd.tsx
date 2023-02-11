import Item from "../components/item";

export const handleItemAdd = (
  itemList: JSX.Element[],
  setItemList: Function,
  text: string | undefined
) => {
  text && setItemList([...itemList, <Item text={text} />]);
};
