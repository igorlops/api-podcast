import fs from "fs"
import path from "path"
import { Podcast } from "../../models/podcast-model";

const pathData = path.join(__dirname, '../podcast-repository/podcast.json')

export const getListEpisodes = async (podcastName: string | null = null): Promise<Podcast[]> => {
    const rawData = fs.readFileSync(pathData,"utf-8");
    const jsonFile = JSON.parse(rawData);
    
    if(podcastName) {
        const dataFiltered = jsonFile.filter((item: Podcast) => {
            return item.podcastName === podcastName;
        })
        console.log(dataFiltered)
        return dataFiltered
    }
    return jsonFile;
}