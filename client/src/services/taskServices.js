import axios from "axios";
import { baseUrl } from '../constants/constants';

export function getTasks() {
    return axios.get(baseUrl);
}

export function addTask(task) {
    return axios.post(baseUrl, task);
}

export function updateTask(id, task) {
    return axios.put(baseUrl+ "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(baseUrl + "/" + id);
}

