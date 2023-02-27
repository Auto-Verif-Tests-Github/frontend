import { config } from "../config";
import { request, GET } from "./requests";

export function getAllSolutionsByTaskId(taskId, preCallback, callback, failCallback, decisively) {
    request(`${config.origin}${config.api}${config.method_solutions}?task_id=${taskId}`, GET, preCallback, callback, failCallback, decisively);
}