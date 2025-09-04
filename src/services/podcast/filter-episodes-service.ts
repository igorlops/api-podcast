import { getListEpisodes } from "../../repositories/podcast-repository/list-episodes-repository"


export const serviceFilterEpisodes = async (param: string) => {
    const podcastName =  param.split("=")[1] ?? "";
    const data = await getListEpisodes(podcastName);
    return data;
}