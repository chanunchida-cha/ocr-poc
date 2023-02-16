import ButtonAmount from "@/ui/ButtonAmount";
import { previewImage } from "@/utils/previewImage";
import { getBase64 } from "@/utils/convertToBase64";
import React, {
  ChangeEvent,
  FormEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { uploadImage } from "@/utils/uploadImage";
import axios from "axios";

type Props = {
  image: File;
  preview: string;
  icon: React.ReactNode;

  setPreview: (objectUrl: string) => void;
  setImage: (file: File) => void;
  // upload:()=>{}
};

const BoxLayout = ({ preview, image, icon, setPreview, setImage }: Props) => {
  console.log("imageimage", image);
  const [result, setResult] = useState<string>("");
  const [pending, setPending] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0);

  const upload = async (e: FormEvent<HTMLFormElement>) => {
    setPending(true);
    const base64 = await getBase64(image!);
    console.log("base64", base64);
    const res = await uploadImage(base64);
    setResult(res);

    setPending(false);
  };

  useEffect(() => {
    setResult("");
  }, [image]);

  return (
    <div className="flex flex-col justify-around ">
      <div className="shrink w-full  bg-box mb-2 px-[1rem] py-[2.3rem] h-fit sm:h-[40rem] sm:px-[6rem] sm:py-[3rem] rounded-xl shadow-xl text-[1rem] sm:text-[1.3rem] border border-border-box ">
        <div className="mb-2">
          <div className="flex justify-center text-title-text ">
            Upload image of medicine label
          </div>
        </div>
        <div className=" flex  justify-center  ">
          <div className="flex p-5 flex-col justify-center items-center mx-auto border-dashed border-2 rounded-xl border-border-box w-[10rem] h-[9rem] sm:w-[20rem] sm:h-[13rem]">
            {image ? (
              <div className="w-full h-full">
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={preview}
                />
              </div>
            ) : (
              <div>
                <div className="flex justify-center">{icon}</div>
              </div>
            )}
            <div className="flex justify-center">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer  px-2 py-1 text-text-upload  rounded-md  text-sm"
              >
                <span>Browse</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={async (e) => {
                    previewImage(e, setPreview, setImage, image!);
                  }}
                  required
                />
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <button
            className={
              "bg-button  w-[8rem] rounded-2xl text-sm text-white py-1 "
            }
            type="submit"
            onClick={(e: any) => {
              upload(e);
            }}
          >
            Upload
          </button>
        </div>
        {pending ? (
          <div className=" col-span-12 row-start-4 row-span-2 sm:row-start-4 sm:row-span-2 sm:col-start-4 sm:col-span-6">
            <div className="flex justify-center">
              <svg
                role="status"
                className="inline w-16 m-5 text-gray-200 animate-spin dark:text-gray-600 fill-primary"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#c5c5c5"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#4E98DC"
                />
              </svg>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-title-text mt-6">Medicine name.</div>
            <div className="flex flex-row">
              <div className="w-[15rem] sm:w-[20rem] ">
                <input
                  placeholder="Input your medicine name. "
                  className="w-full text-sm sm:text-[1rem]  border border-border-box rounded-3xl py-1 sm:py-2 px-2"
                  value={
                    result !== undefined
                      ? result
                      : "ไม่พบข้อมูลกรุณาลองใหม่อีกครั้ง"
                  }
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setResult(e.target.value);
                  }}
                />
              </div>
              <div className="w-[6rem] sm:w-[10rem] ml-2 sm:ml-2">
                <ButtonAmount
                  amount={amount}
                  setAmount={setAmount}
                  result={result}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoxLayout;
