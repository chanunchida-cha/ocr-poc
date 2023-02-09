// import TakePicture from "@/components/TakePicture";
import React, { ChangeEvent, useState } from "react";

function index() {
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>("");
  // const [takePicture, setTakePicture] = useState<boolean>(false);

  console.log("image", image);

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
    <div className=" grid grid-cols-6 grid-rows-6 sm:grid-rows-6 sm:grid sm:grid-cols-6  gap-4 h-screen">
      <div className="col-start-2 col-span-4 sm:col-start-3 sm:col-span-2 row-start-2 row-span-2 border-dashed border-2 border-blue-600">
        <div className="flex w-full h-full justify-center items-center  overflow-hidden">
          {image ? (
            <div className="flex justify-center">
              <img className="h-60 object-cover rounded-md  " src={preview} />
            </div>
          ) : (
            "อัพโหลดรูปภาพ"
          )}
        </div>
      </div>
      {/* <div className=" col-start-2 col-span-2 row-start-4   sm:col-start-3 sm:col-span-1 sm:row-start-4 ">
        <div className="flex justify-center ">
          <button
            className="bg-blue-600  py-2 w-[8rem] rounded-md text-white "
            onClick={() => {
              setTakePicture(true);
            }}
          >
            ถ่ายรูป
          </button>
        </div>
      </div> */}

      <div className="col-span-6 row-start-4   sm:col-span-6 sm:row-start-4">
        <div className="flex justify-center  ">
          <div className="bg-blue-600 py-2 w-[8rem] rounded-md   flex justify-center">
            <label htmlFor="file-upload" className="text-white">
              <span>อัพโหลดรูปภาพ</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={showPreview}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="col-start-2 col-span-4 row-start-5  sm:col-start-3 sm:col-span-2 sm:row-start-5 border-dashed border-2 border-blue-600 px-2 py-2">
        response
      </div>
      {/* {takePicture && <TakePicture />} */}
    </div>
  );
}

export default index;
