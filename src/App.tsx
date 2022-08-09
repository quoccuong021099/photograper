import {
  getDownloadURL,
  getStorage,
  listAll,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import ListImage from "./components/ListImage";
import UploadImage from "./components/UploadImage";
import { storage_bucket } from "./firebase/firebase";

const storage = getStorage();
const listRef = ref(storage);

function App() {
  const [listImages, setListImages] = useState<string[]>([""]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files as FileList;
      if (file[0].type.split("/")[0] === "image") {
        // create a reference to the file to be uploaded
        let fileRef = ref(storage_bucket, file[0].name);
        // upload the file
        const uploadTask = uploadBytesResumable(fileRef, file[0]);

        // track progress
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% done`);
          },
          (err) => console.log(err),
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) =>
              setListImages([...listImages, url])
            );
          }
        );
      } else {
        alert("Hãy tải ảnh lên bạn nhé!! 😘");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) =>
          getDownloadURL(ref(storage, `${itemRef}`)).then((downloadURL) => {
            setListImages((prev) => [...prev, downloadURL]);
          })
        );
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  useEffect(() => {
    if (listImages.length > 1) setIsLoading(false);
  }, [listImages]);

  return (
    <div className="App">
      <header>
        <p>Cùng đăng những bức ảnh bạn cho là ý nghĩa nhất vào đây nhé 😍</p>
      </header>
      <div className="upload-img">
        <UploadImage uploadFile={uploadFile} />
      </div>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <ListImage listImages={listImages} />
      )}
    </div>
  );
}

export default App;
