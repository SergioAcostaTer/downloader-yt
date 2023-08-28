import axios, { AxiosResponse } from "axios";
import { Item } from "../types";

export default async function videoInfo(id: string): Promise<Item> {
  const response: AxiosResponse<Item> = await axios.get(
    `http://192.168.0.30/video/${id}`
  );
  return response.data;
}
