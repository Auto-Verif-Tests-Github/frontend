import { config } from "../config";
import { request, GET } from "./requests";

export function getAllSolutionsByTaskId(taskId, preCallback, callback, failCallback, decisively) {
    request(`${config.origin}${config.api}${config.method_solutions}?task_id=${taskId}`, GET, preCallback, callback, failCallback, decisively);
}

export function getAllSolutionsByCourseId(courseId, preCallback, callback, failCallback, decisively) {
    request(`${config.origin}${config.api}${config.method_solutions_by_course}${courseId}`, GET, preCallback, callback, failCallback, decisively);
}