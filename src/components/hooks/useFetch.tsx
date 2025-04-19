import { useState, useEffect } from 'react';

export function useFetch <T>(url: string, options: RequestInit): { loading: boolean, error: unknown | null, data: T | null } {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<unknown | null>(null);
	
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await fetch(url, options);
				const data = await response.json();	

				if (data.statusCode) {
					throw new Error(`Was an error posting data. ${JSON.stringify(data)}`)
				}

				setData(data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [url, options]);

	return { data, loading, error };
};