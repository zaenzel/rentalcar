import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { db, storage } from "../../firebase";
import { useEffect } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const ModalUpImg = ({
  setOpenModal,
  setImages,
  setData,
  data,
  setPerc,
  setUpImage,
}) => {
  const [files, setFiles] = useState([]);
  console.log(files)
  const [url, setUrl] = useState("");

  // dropzone
  const { acceptedFiles, fileRejections, getRootProps, getInputProps, open } =
    useDropzone({
      // maxFiles: 4,
      noClick: true,
      noKeyboard: true,
      onDrop: (acceptedFiles) => {
        setFiles((prevFiles) =>
          prevFiles.concat(
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          )
        );
      },
    });

  const fileAccItems = files.map((file) => (
    <li className="text-sm text-neutral-5" key={file.path}>
      {file.path}
      <span className="ml-5 text-xs text-neutral-3">
        "{Math.round(file.size / 1000000)} Mb"
      </span>
    </li>
  ));

  useEffect(() => {
    const uploadFile = () => {
      const name = files.map((e) => {
        return e.name;
      });
      const newName = new Date().getTime() + name;
      const storageRef = ref(storage, newName);
      const uploadTask = uploadBytesResumable(storageRef, files);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("upload is " + progress + "% done");

          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              setUpImage("paused");
              console.log("upload is paused");
              break;
            case "running":
              setUpImage("running");
              console.log("upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // setData((prev) => ({ ...prev, img: downloadURL }));
            setUrl(downloadURL);
            setUpImage("success");
            
            console.log("berhasil");
          });
        }
      );
    };
    files && uploadFile();
  }, [files]);

  const upload = () => {
    setData({ ...data, img: url });
    setImages((prevImg) => prevImg.concat(files));
    setOpenModal(false);
  };

  return (
    <div
      className="w-64 sm:w-96 p-5 bg-white border-solid border-2 border-gray-200 space-y-5 shadow-2xl"
      data-testid="modal-upImg"
    >
      <div className="absolute top-2 right-2">
        <AiOutlineCloseCircle
          className="text-xl cursor-pointer"
          onClick={(e) => setOpenModal(false)}
        />
      </div>
      <div
        {...getRootProps()}
        className="py-10 space-y-3 flex flex-col items-center"
      >
        <input {...getInputProps()} />
        <p className="text-md text-neutral-3">Taro foto disini</p>
        <p className=" text-neutral-3">-atau-</p>
        <button
          className="py-2 w-56 bg-indigo-400 hover:bg-indigo-700 text-white text-sm"
          onClick={open}
        >
          Pilih file dari perangkat anda
        </button>
      </div>
      <div>
        {/* <p>maks 4 foto</p> */}
        <p>{fileAccItems}</p>
      </div>
      <div className="space-x-2 flex justify-end mt-5">
        <button
          className="px-2 py-1 bg-white border-2 border-gray-400 text-neutral-5 rounded-md hover:bg-gray-300 text-sm"
          onClick={(e) => setOpenModal(false)}
        >
          Batal
        </button>
        <button
          className={
            "px-2 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-800 text-sm"
          }
          onClick={upload}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default ModalUpImg;
