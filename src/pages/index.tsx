import React, { ChangeEvent, useState } from "react";

function Index() {
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>();
  const showPreview = (e: ChangeEvent<HTMLInputElement>) => {
    let file;
    if (e.target.files && e.target.files[0]) {
      file = e.target.files[0];
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      console.log(objectUrl);
      setImage(file);
    } else {
      setImage(image);
    }
  };
  return (
    <div className="flex justify-center px-3 py-3">
      <div className=" grid grid-rows-6 grid-cols-12 gap-4 h-screen w-screen">
        <div className=" col-span-12 row-start-2 row-span-2 sm:row-start-2 sm:row-span-2 sm:col-start-4 sm:col-span-6 ">
          <div className=" flex justify-center items-center h-full bg-white shadow-lg rounded-md border border-[#dedede]">
            <div className="space-y-1 text-center">
              {image && (
                <div className="w-[10rem] h-[10rem] sm:w-[20rem] sm:h-[20rem] overflow-hidden mb-3">
                  {image && (
                    <img src={preview} className="w-full h-full object-cover rounded-lg shadow-lg" />
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

              <div className=" text-sm text-gray-600 ">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-[#531DE3] px-2 py-1 text-white text-lg rounded-md font-medium text-blue-700 hover:text-blue-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>อัพโหลดรูปภาพ</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={showPreview}
                    required
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white px-5 py-5 col-span-12 row-start-4 row-span-2 sm:row-start-4 sm:row-span-2 sm:col-start-4 sm:col-span-6 rounded-lg shadow-lg overflow-y-auto"></div>
      </div>
    </div>
  );
}

export default Index;
