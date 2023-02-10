import axios from "axios";
import { routeName } from "@/models/const/routeName";
export async function uploadImage(data: any) {
  const res = await axios.post(`${routeName.path.serviceOcr}`, {
    image: data,
  });
  return res.data;
}
