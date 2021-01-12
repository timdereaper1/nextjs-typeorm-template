import { useEffect } from 'react';

function Index() {
	useEffect(() => {
		async function fetchUsers() {
			const response = await fetch('/api/users');
			const data = await response.json();
			console.log(data);
		}
		fetchUsers();
	}, []);

	return <div>Hello world by Timothy Kofi Amo</div>;
}

export default Index;
