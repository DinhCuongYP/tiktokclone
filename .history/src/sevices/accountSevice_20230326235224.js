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
    try {
        const response = await httpRequest.get(`users/@${username}`);
        if (response && response.status === 200) {
            // Do something with the response
        }

        if (response.status === 404) {
            return null;
        }

        const { data } = response;

        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
