import React, { useEffect, useState } from 'react';

export const Item: React.FC<ItemProps> = ({ item, complete }) => {
	const [opacity, setOpacity] = useState('1');

	useEffect(() => {
		if (item.done) {
			setOpacity('0.5');
			setTimeout(() => setOpacity('0'), 3000);
		}
	}, [item.done]);

	if (!item) {
		return null;
	}

	return (
		<li
			key={item.id}
			className="hover:bg-gray-100 dark:hover:bg-slate-600 font-bold p-2 my-4 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 h-14"
			style={{
				transition: 'opacity 1s ease-in-out',
				opacity,
			}}>
			<div className="flex justify-between items-center h-full">
				<span className="text-gray-500 dark:text-slate-300">{item.title}</span>
				{!item.done && (
					<button
						className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
						onClick={() => complete(item.id)}>
						Concluir
					</button>
				)}
			</div>
		</li>
	);
};

export const ItemList: React.FC<ItemListProps> = ({ items, complete }) => (
	<ul>
		{items.map(item => (
			<Item key={item.id} item={item} complete={complete} />
		))}
	</ul>
);
