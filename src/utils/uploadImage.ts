import axios from "axios";
import { routeName } from "@/models/const/routeName";
export async function uploadImage(data: any) {
  try {
    const res = await axios.post(`${routeName.path.serviceOcr}`, {
      image: data,
    });
    return res.data;
  } catch (err: any) {
    console.error("err", err);
    alert(err.message);
  }
}
