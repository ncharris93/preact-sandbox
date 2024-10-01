import { useLocation } from "preact-iso";
import { useEffect, useState } from "preact/hooks";

import { PersistedStore } from "../stores/persisted-storage";

export const StoredData = () => {
  const [data, setData] = useState<string | null>(null);
  const { route } = useLocation();

  useEffect(() => {
    setData(PersistedStore.getItem("data"));
  }, []);

  return (
    <div>
      <h1>Stored Data</h1>

      <button onClick={() => route("/")}>Go Home</button>
      <div>
        <p>{data}</p>
        <input
          type="text"
          value={data}
          onInput={(e) => {
            setData(e.currentTarget.value);
            PersistedStore.setItem("data", e.currentTarget.value);
          }}
        />
      </div>
      <div>
        <img
          style={{ width: 50, height: 50 }}
          src={PersistedStore.getItem("image")}
          alt="random"
        />
      </div>
      <div>
        <PhotoUploader
          onUpload={(img: string) => {
            PersistedStore.setItem("image", img);
          }}
        />
      </div>
    </div>
  );
};

const PhotoUploader = ({ onUpload }: { onUpload: (img: string) => void }) => {
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);

  const handleImageChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        onUpload(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <img
          src={selectedImage as string}
          style={{ width: 50, height: 50 }}
          alt="Selected"
        />
      )}
    </div>
  );
};
