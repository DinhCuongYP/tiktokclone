import * as httpRequest from '~/utils/httpRequest';

export const getSuggestedAccount = async (per_page) => {
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
