import { config } from "../config";
import { request, GET } from "./requests";

export function getAllTasksByCourseIdAndStreamId(courseId, streamId, preCallback, callback, failCallback, decisively) {
    request(`${config.origin}${config.api}${config.method_tasks}?stream_id=${streamId}&course_id=${courseId}`, GET, preCallback, callback, failCallback, decisively);
}