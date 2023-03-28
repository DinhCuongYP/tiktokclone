import { httpRequest } from '~/utils';

export const getSuggesVideo = async (page) => {
    const dataReponsive = await httpRequest.get('videos?', {
        params: {
            page,
        },
    });

    if (dataReponsive.status === 0) {
        return [];
    }

    return dataReponsive.data;
};
