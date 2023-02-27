import { config } from "../config";
import { request, GET } from "./requests";

export function getAllStreams(preCallback, callback, failCallback, decisively) {
    request(`${config.origin}${config.api}${config.method_streams}`, GET, preCallback, callback, failCallback, decisively);
}
