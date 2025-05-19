import { useAsyncData } from "#app";

export const useContent = () => {
	const { data: owner } = useAsyncData("owner-data", () => {
		return queryCollection("owner").first();
	});

	return { owner };
};
