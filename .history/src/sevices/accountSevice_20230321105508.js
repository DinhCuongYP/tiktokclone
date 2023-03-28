import * as httpRequest from '~/utils/httpRequest';

export const getSuggestedAccount = async (page, per_page = 20) => {
    const dataReponsive = await httpRequest.get('users/suggested?', {
        params: {
            page,
            per_page,
        },
    });

    if (dataReponsive.data === undefined) {
        return [];
    }

    return dataReponsive.data;
};
