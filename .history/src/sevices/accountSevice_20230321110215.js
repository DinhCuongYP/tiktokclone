import * as httpRequest from '~/utils/httpRequest';

export const getSuggestedAccount = async (perPage, page = 1) => {
    const dataReponsive = await httpRequest.get('users/suggested?', {
        params: {
            per_page: perPage,
            page,
        },
    });

    if (dataReponsive.data === undefined) {
        return [];
    }

    return dataReponsive.data;
};
