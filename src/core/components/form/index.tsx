import React, { useState } from 'react';

export interface Inputs {
	item: string;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
	const [form, setForm] = useState({ item: '' });

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		onSubmit(form.item);
		setForm({ item: '' });
	};

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="grid grid-cols-3 gap-4 pb-8">
				<div className="col-span-2">
					<input
						className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500 dark:bg-slate-800 dark:text-slate-300"
						type="text"
						name="item"
						placeholder="Digite uma tarefa..."
						value={form.item}
						onChange={onChange}
					/>
				</div>

				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					type="submit">
					Adicionar
				</button>
			</div>
		</form>
	);
};

export default Form;
