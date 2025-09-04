import {getListEpisodes} from '../../repositories/podcast-repository/list-episodes-repository'
export const serviceListEpisodes = async () => {
    const data = await getListEpisodes();
    return data;
}