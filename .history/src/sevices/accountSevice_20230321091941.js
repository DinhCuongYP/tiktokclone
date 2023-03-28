import * as httpRequest from '~/utils/httpRequest';

export const getSuggestedAccount = async (page = 2, perPage) => {
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
