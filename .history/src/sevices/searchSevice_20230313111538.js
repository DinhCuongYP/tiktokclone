import * as httpRequest from '~/utils';
const path = 'users/search?';

export const search = async (q, type = 'less') => {
    const res = await httpRequest.get(path, {
        params: {
            q,
            type,
        },
    });

    return res.data;
};
