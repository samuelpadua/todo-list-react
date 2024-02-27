import { useEffect, useState } from 'react';

function getThemeFromStorage() {
	if (typeof window === 'undefined') return 'light';

	const theme = localStorage.getItem('theme');
	return theme || 'light';
}

function saveThemeToStorage(theme: string) {
	if (typeof window !== 'undefined') {
		localStorage.setItem('theme', theme);
	}
}

export default function useTheme() {
	const [theme, setTheme] = useState('');

	useEffect(() => {
		setTheme(getThemeFromStorage());
	}, []);

	useEffect(() => {
		saveThemeToStorage(theme);
	}, [theme]);

	function toggleTheme() {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}

	return { theme, toggleTheme, isDarkMode: theme === 'dark' };
}
