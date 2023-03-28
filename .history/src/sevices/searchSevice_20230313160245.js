import * as httpRequest from '~/utils/httpRequest';
const type = 'less';

export const search = async (q, type = 'less') => {
    const res = await httpRequest.get('users/search?', {
        params: {
            q,
            type,
        },
    });

    return res.data;
};
