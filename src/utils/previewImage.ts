import { ChangeEvent } from "react";

export function previewImage(
  e: ChangeEvent<HTMLInputElement>,
  setPreview: (objectUrl: string) => void,
  setImage: (file: File) => void,
  image: File
) {
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
}
