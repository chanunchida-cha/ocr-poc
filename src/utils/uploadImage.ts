import axios from "axios";
import { routeName } from "@/models/const/routeName";
import { phamacies } from "@/models/const/phamacies";
export async function uploadImage(data: any) {
  try {
    let result;
    const res = await axios.post(`${routeName.path.serviceOcr}`, {
      image: data,
    });

    for (const phamacy of phamacies) {
      for (const item of res.data.data) {
        if (item.description.toLowerCase() === phamacy.drugName.toLowerCase()) {
          return (result = item.description);
        }
      }
    }

    console.log(result);

    return result;
  } catch (err: any) {
    console.error("err", err);
    alert(err.message);
  }
}
