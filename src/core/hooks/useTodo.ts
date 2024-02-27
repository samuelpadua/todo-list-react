import { useEffect, useState } from 'react';

function getFromStorage(): Item[] {
	if (typeof window === 'undefined') return [];

	const data = localStorage.getItem('items');
	return data ? JSON.parse(data) : [];
}

function saveToStorage(items: Item[]) {
	if (typeof window !== 'undefined') {
		localStorage.setItem('items', JSON.stringify(items));
	}
}

function buildReport(items: Item[]): Reports {
	return {
		total: items.length,
		completed:
			items.length &&
			Number(
				((items.filter(item => item.done).length / items.length) * 100).toFixed(
					0,
				),
			),
		pending:
			items.length &&
			Number(
				((items.filter(item => !item.done).length / items.length) * 100).toFixed(
					0,
				),
			),
	};
}

export default function useTodo() {
	const [items, setItems] = useState<Item[]>(getFromStorage());
	const [report, setReport] = useState<Reports>({
		total: 0,
		completed: 0,
		pending: 0,
	});

	useEffect(() => {
		saveToStorage(items);
		setReport(buildReport(items));
	}, [items]);

	function add(title: string) {
		setItems([{ id: items.length, title, done: false }, ...items]);
	}

	function complete(id: number) {
		setItems(
			items
				.map(item => {
					if (item.id === id) {
						return {
							...item,
							done: true,
						};
					}
					return item;
				})
				.sort((a, b) => Number(a.done) - Number(b.done)),
		);
	}

	return {
		items,
		report,
		add,
		complete,
	};
}
