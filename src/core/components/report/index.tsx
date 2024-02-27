import React from 'react';

const Report: React.FC<ReportProps> = ({ report }) => (
	<div className="grid grid-cols-3 gap-4 pb-8">
		<div>
			<p className="text-gray-400 pb-2 font-medium">Total de tarefas</p>
			<p className="text-4xl font-semibold dark:text-slate-300">{report.total}</p>
		</div>
		<div>
			<p className="text-gray-400 pb-2 font-medium">Tarefas completas</p>
			<p
				className={`text-4xl font-semibold ${
					report.completed >= 50 ? 'text-green-500' : 'text-red-500'
				}`}>
				{report.completed}%
			</p>
		</div>
		<div>
			<p className="text-gray-400 pb-2 font-medium">Tarefas pendentes</p>
			<p
				className={`text-4xl font-semibold ${
					report.pending >= 50 ? 'text-red-500' : 'text-green-500'
				}`}>
				{report.pending}%
			</p>
		</div>
	</div>
);

export default Report;
