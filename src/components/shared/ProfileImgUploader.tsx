import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Button } from "../ui/button";

type FileUploaderProps = {
  fieldChange: (FILES: File[]) => void;
  mediaUrl: string;
};

const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {
  const [file, setFile] = useState<File[]>([]);
  const [fileUrl, setFileUrl] = useState(mediaUrl);
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      // Do something with the files
      setFile(acceptedFiles);
      fieldChange(acceptedFiles);
      setFileUrl(URL.createObjectURL(acceptedFiles[0]));
    },
    [file]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".svg"],
    },
  });

  return (
    <div {...getRootProps()} className=" cursor-pointer">
      <input {...getInputProps()} className="cursor-pointer" />
      {fileUrl ? (
        <>
          <div className="flex w-full gap-4 p-5 lg:p-10 items-center">
            <div className="">
              <img
                src={fileUrl}
                alt="image"
                className="rounded-full fixed-size"
                width={100}
                height={100}
              />
            </div>
            <p className="link-text">Change Profile Photo</p>
          </div>
        </>
      ) : (
        <div className="flex w-full gap-4 p-5 lg:p-10 items-center">
          <img
            className="border border-dark-4/80 rounded-full fixed-size"
            src="/assets/icons/file-upload.svg"
            width={100}
            height={100}
            alt="file-upload"
          />
          <Button className="link-text">Change Profile Photo</Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
