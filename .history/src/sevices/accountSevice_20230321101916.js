import * as httpRequest from '~/utils/httpRequest';

export const getSuggestedAccount = async (page = 1, perPage) => {
    const dataReponsive = await httpRequest.get('users/suggeste', {
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
