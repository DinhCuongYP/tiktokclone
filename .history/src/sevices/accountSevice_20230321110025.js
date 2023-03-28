import * as httpRequest from '~/utils/httpRequest';

export const getSuggestedAccount = async (perPage, page) => {
    const dataReponsive = await httpRequest.get('users/suggested?', {
        params: {
            page,
            per_page: perPage,
        },
    });

    if (dataReponsive.data === undefined) {
        return [];
    }

    return dataReponsive.data;
};
