import { useAsyncData } from "#app";

export const useContent = () => {
	const {
		data: owner,
		pending,
		error,
	} = useAsyncData("owner-data", () => {
		return queryCollection("owner").first();
	});

	return { owner, pending, error };
};
