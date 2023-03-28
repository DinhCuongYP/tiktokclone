import { httpRequest } from '~/utils';

const getSuggesVideo = async (page, type = 'for-you') => {
    const dataReponsive = await httpRequest.get('videos?', {
        params: {
            page,
            type,
        },
    });
};

export default getSuggesVideo;
