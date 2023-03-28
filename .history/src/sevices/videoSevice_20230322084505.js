import { httpRequest } from '~/utils';

export const getSuggesVideo = async (type = 'for-you', page) => {
    const dataReponsive = await httpRequest.get('videos', {
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
