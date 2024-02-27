'use client';

import Form from '@/core/components/form';
import { ItemList } from '@/core/components/item';
import Report from '@/core/components/report';
import useTheme from '@/core/hooks/useTheme';
import useTodo from '@/core/hooks/useTodo';
import React from 'react';

export default function Home() {
	const { items, report, add, complete } = useTodo();
	const { theme, isDarkMode, toggleTheme } = useTheme();

	const onSubmit = (item: string) => {
		add(item);
	};

	return (
		<main className={`${theme} h-screen`}>
			<div className="h-full bg-white dark:bg-slate-800">
				<button
					onClick={toggleTheme}
					className="fixed right-4 top-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-500 transition duration-300">
					{isDarkMode ? (
						<span className="h-6 w-6 text-yellow-500">Dark ☾</span>
					) : (
						<span className="h-6 w-6 text-gray-500">Light ☼</span>
					)}
				</button>
				<div className="bg-white dark:bg-slate-800">
					<div className="container mx-auto max-w-xl">
						<div className="py-8">
							<h1 className="text-center text-2xl dark:text-slate-300">
								Lista de Tarefas
							</h1>
						</div>
						<Report report={report} />
						<Form onSubmit={onSubmit} />
						<ItemList items={items} complete={complete} />
					</div>
				</div>
			</div>
		</main>
	);
}
