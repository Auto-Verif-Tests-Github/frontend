import { config } from "../config";
import { request, GET } from "./requests";

export function getAllCoursesByStreamId(streamId, preCallback, callback, failCallback, decisively) {
    request(`${config.origin}${config.api}${config.method_courses}?stream_id=${streamId}`, GET, preCallback, callback, failCallback, decisively);
}