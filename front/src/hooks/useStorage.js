import { useEffect, useState } from "react";
import { projectStorage, ref, uploadBytesResumable, getDownloadURL } from "../firebase/config";

// https://firebase.google.com/docs/storage/web/upload-files

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = ref(projectStorage, "book-covers/" + file.name);

    const metadata = {
      contentType: file.type,
    };

    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // upload file to this ref
    uploadTask.on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        console.log("fiel available at", url);
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
