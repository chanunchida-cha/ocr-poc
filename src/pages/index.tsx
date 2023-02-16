import FormMed from "@/components/FormMed";
import BoxLayOut from "@/Layouts/BoxLayout";
import React, { ReactElement, useState } from "react";

interface Props {}

function Index({}: Props): ReactElement {
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>();
  const [file, setFile] = useState<File>();
  const [data, setData] = useState<[] | null>();
  const [pending, setPending] = useState<boolean>(false);
  return (
    <div className=" mx-5 sm:mx-auto sm:w-2/3 mt-6  object-none">
      <FormMed
        image={image!}
        preview={preview!}
        setPreview={setPreview}
        setImage={setImage}
      />
    </div>
  );
}

export default Index;
