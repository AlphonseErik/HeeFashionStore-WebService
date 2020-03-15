import axios from 'axios';
import { settings } from "../configs/settings";

export const restConnector = axios.create({
    baseURL: settings.domain,
})