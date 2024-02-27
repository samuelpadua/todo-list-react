interface ItemProps {
	item: Item;
	complete: (id: number) => void;
}

interface ItemListProps {
	items: Item[];
	complete: (id: number) => void;
}
