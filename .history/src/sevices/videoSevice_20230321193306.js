import { httpRequest } from '~/utils';

const getSuggesVideo = async (page, type = 'for-you') => {
    const dataReponsive = await httpRequest.get('videos?', {
        params: {
            page,
            type,
        },
    });

    if (dataReponsive.status === 0) {
        return [];
    }

    return dataReponsive.data;
};

export default getSuggesVideo;
