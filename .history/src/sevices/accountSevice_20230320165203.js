import httpRequest from '~/utils';

export const getSuggestedAccount = async (page = 1, perPage) => {
    const dataReponsive = await httpRequest.get('users/suggested?', {
        params: {
            page,
            per_Page: perPage,
        },
    });

    if (dataReponsive.data === undefined) {
        return [];
    }

    return dataReponsive.data;
};
