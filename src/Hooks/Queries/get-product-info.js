import { useQuery } from '@tanstack/react-query';

import ProductApi from 'Apis/productApi';

import { queryConfig } from './@config';

export const getMainList = () => {
	const {
		isLoading,
		error,
		data: mainList,
	} = useQuery(['mainList'], ProductApi.mainList, queryConfig);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return { mainList };
};
