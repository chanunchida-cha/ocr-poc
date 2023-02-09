import React, { useEffect, useRef, useState } from "react";

function TakePicture() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, sethasPhoto] = useState<boolean>(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 500, height: 400 } })
      .then((stream) => {
        let video: any = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const takePhoto = () => {
    const width = 400;
    const height = width / (16 / 9);
    let ctx;
    let video: any = videoRef.current;
    let photo: any = photoRef.current;
    if (photo !== null || undefined) {
      photo.width = width!;
      photo.height = height!;
      ctx = photo.getContext("2d");
      ctx.drawImage(video, 0, 0, width, height);
      sethasPhoto(true);
    }
  };
  console.log("photoRef", photoRef);
  useEffect(() => {
    getVideo();
  }, [videoRef]);
  return (
    <div className="fixed z-20 inset-0 overflow-y-hidden bg-white  transition-opacity  my-auto">
      <div className="flex justify-center mx-2 my-5">
        <video ref={videoRef}></video>
      </div>

      <div className="flex justify-center">
        {" "}
        <button
          className="bg-blue-600  py-2 w-[8rem] rounded-md text-white  "
          onClick={takePhoto}
        >
          ถ่ายภาพ
        </button>
      </div>
      <div className="flex justify-center">
        <canvas ref={photoRef}></canvas>
      </div>
    </div>
  );
}

{
  /* <div className="h-3/5  my-auto flex justify-center"><video ref={videoRef}></video></div>
      <button className=" ">ถ่ายภาพ</button> */
}

export default TakePicture;
