import { httpRequest } from '~/utils';

export const getSuggesVideo = async (page, type = 'for-you') => {
    const dataReponsive = await httpRequest.get('videos?', {
        params: {
            type,
            page,
        },
    });

    if (dataReponsive.status === 0) {
        return [];
    }

    return dataReponsive.data;
};
