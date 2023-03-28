import * as httpRequest from '~/utils/httpRequest';

export const getSuggestedAccount = async (per_page, page = 1) => {
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

export const getUserAccount = async (username) => {
    const dataResponse = await httpRequest.get('users/' + username);

    if (dataResponse.status === 404) {
        return;
    }

    return dataResponse.data;
};
