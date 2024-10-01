import { useState } from "preact/hooks";
import { AppConstants } from "../constants";
import { CameraModule } from "../modules/camera";
import { useLocation } from "preact-iso";

export const CameraScreen = () => {
  const { isNativeMobile } = AppConstants;
  const { route } = useLocation();
  const [image, setImage] = useState<string>();

  const onTakePhoto = async () => {
    CameraModule.takePicture().then((photo) => {
      setImage(photo.webPath);
    });
  };

  if (!isNativeMobile) {
    return <div>Camera is not supported on this platform</div>;
  }

  return (
    <div>
      <button
        onClick={() => {
          route("/");
        }}
      >
        Home
      </button>
      <button onClick={onTakePhoto}>Take Picture</button>
      {image && <img src={image} height="300" width="300" />}
    </div>
  );
};
