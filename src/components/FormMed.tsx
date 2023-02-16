import BoxLayout from "@/Layouts/BoxLayout";

import { uploadImage } from "@/utils/uploadImage";
import React, { ChangeEvent, ReactElement } from "react";

type Props = {
  image: File;
  preview: string;

  setPreview: (objectUrl: string) => void;
  setImage: (file: File) => void;
};

function FormMed({
  preview,
  image,
  setPreview,
  setImage,
}: Props): ReactElement {
  return (
    <BoxLayout
      image={image!}
      preview={preview!}
      setPreview={setPreview}
      setImage={setImage}
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M2.437 27.958C1.77033 27.958 1.201 27.715 0.728996 27.229C0.256996 26.743 0.0209961 26.1807 0.0209961 25.542V3.708C0.0209961 3.06933 0.256996 2.507 0.728996 2.021C1.201 1.535 1.77033 1.292 2.437 1.292H17.062V2.708H2.437C2.13166 2.708 1.88166 2.80533 1.687 3C1.493 3.19467 1.396 3.43067 1.396 3.708V25.542C1.396 25.8193 1.493 26.0553 1.687 26.25C1.88166 26.4447 2.13166 26.542 2.437 26.542H24.229C24.5343 26.542 24.7843 26.4447 24.979 26.25C25.1737 26.0553 25.271 25.8193 25.271 25.542V10.958H26.687V25.542C26.687 26.1807 26.444 26.743 25.958 27.229C25.472 27.715 24.8957 27.958 24.229 27.958H2.437ZM23.229 8.125V4.75H19.854V3.333H23.229V0H24.604V3.333H27.979V4.75H24.604V8.125H23.229ZM5.854 22.083H21.104L16.479 15.917L12.021 21.542L9.062 17.958L5.854 22.083Z"
            fill="#4E98DC"
          />
        </svg>
      }
    />
  );
}

export default FormMed;
