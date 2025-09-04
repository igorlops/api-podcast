import {IncomingMessage, ServerResponse} from "http"
import {serviceListEpisodes} from '../services/podcast/list-episodes-service'
import { serviceFilterEpisodes } from "../services/podcast/filter-episodes-service";
import { Status } from "../utils/status-code";

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content = await serviceListEpisodes();
    res.writeHead(Status.OK, {'content-type':'application/json'});
    res.end(JSON.stringify(content))
}
export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse, queryString:string) => {

    const content = await serviceFilterEpisodes(queryString);
    res.writeHead(Status.OK, {'content-type':'application/json'});
    res.end(JSON.stringify(content))
}