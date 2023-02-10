import { getBase64 } from "@/utils/convertToBase64";
import { previewImage } from "@/utils/previewImage";
import React, { ChangeEvent, useEffect, useState } from "react";

function Index() {
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>();
  const [file, setFile] = useState<File>();
  const [base64, setBase64] = useState();

  useEffect(() => {
    const convertImageToBase64 = async () => {
      const base64 = await getBase64(file!);
    };
    convertImageToBase64();
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
                  <button className="bg-[#8B80F8] hover:bg-[#7065d4] text-white px-[2rem] py-[0.5rem] rounded-lg ">
                    Upload
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-white px-5 py-5 col-span-12 border border-[#dedede] row-start-4 row-span-2 sm:row-start-4 sm:row-span-2 sm:col-start-4 sm:col-span-6 rounded-lg shadow-lg overflow-y-auto"></div>
      </div>
    </div>
  );
}

export default Index;
