import axios from "axios";
import { routeName } from "@/models/const/routeName";
export async function uploadImage(data: any) {
  await axios.post(`${routeName.path.serviceOcr}`, {
    image: data,
  });
}
