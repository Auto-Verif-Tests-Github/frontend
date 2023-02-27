import { config } from "../config";
import { request, GET } from "./requests";

export function getAllPeopleByStreamId(streamId, preCallback, callback, failCallback, decisively) {
    request(`${config.origin}${config.api}${config.method_people}?stream_id=${streamId}`, GET, preCallback, callback, failCallback, decisively);
}