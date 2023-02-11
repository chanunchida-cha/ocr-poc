import { getBase64 } from "@/utils/convertToBase64";
import { previewImage } from "@/utils/previewImage";
import { uploadImage } from "@/utils/uploadImage";
import React, { ChangeEvent, useEffect, useState } from "react";

function Index() {
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>();
  const [file, setFile] = useState<File>();
  const [data, setData] = useState<[] | null>();
  const [pending, setPending] = useState<boolean>(false);
  const [hidden, sethidden] = useState(false);

  const convertImageToBase64 = async () => {
    setData(null);
    setPending(true);
    const base64 = await getBase64(file!);
    console.log("base64", base64);
    const res = await uploadImage(base64);
    setData(res?.data);
    console.log("res", res?.data);
    setPending(false);
  };

  useEffect(() => {
    setData(null);
  }, [file]);

  return (
    <div className="flex justify-center px-3  ">
      <div className=" grid grid-rows-6 grid-cols-12 gap-2 h-screen w-screen">
        <div className=" col-span-12 row-start-1 row-span-3 sm:row-start-1 sm:row-span-3 sm:col-start-4 sm:col-span-6 mt-5 ">
          <div className=" flex justify-center items-center h-full bg-white shadow-lg rounded-md border border-[#dedede]">
            <div
              className={`text-center  rounded-md ${
                !image
                  ? "px-6 pt-5 pb-6 border-2 border-[#dedede] border-dashed"
                  : null
              }`}
            >
              {image && (
                <div className="w-[10rem] h-[10rem] sm:w-[13rem] sm:h-[13rem] overflow-hidden mb-3">
                  {image && (
                    <img
                      src={preview}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  )}
                </div>
              )}
              {!image && (
                <svg
                  className="mx-auto h-12 w-12 text-[#5523d4d4]"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}

              <div>
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer  px-2 py-1 text-[#8B80F8] hover:text-[#7065d4] text-base rounded-md font-semibold "
                >
                  <span>Browse</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={async (e) => {
                      previewImage(e, setPreview, setImage, image!);
                      setFile(e.target.files?.[0]);
                    }}
                    required
                  />
                </label>
              </div>
              {image && (
                <div className=" text-base text-gray-600 mt-5   ">
                  <button
                    onClick={async () => await convertImageToBase64()}
                    className="bg-[#8B80F8] hover:bg-[#7065d4] text-white px-[2rem] py-[0.5rem] rounded-lg "
                  >
                    Upload
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {data?.length ? (
          <div className="bg-white px-5 py-5 col-span-12 border border-[#dedede] row-start-4 row-span-2 sm:row-start-4 sm:row-span-2 sm:col-start-4 sm:col-span-6 rounded-lg shadow-lg overflow-y-auto overflow-x-hidden">
            <>
              {data?.map((item: any, index: number) => {
                return <div key={index}>{item.description}</div>;
              })}
            </>
          </div>
        ) : null}

        {pending && (
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
                  fill="#7065d4"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
