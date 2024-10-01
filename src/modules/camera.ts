import { Camera, CameraResultType, Photo } from "@capacitor/camera";
import { AppConstants } from "../constants";

type CameraModule = {
  takePicture?: () => Promise<Photo>;
};

const CameraModuleNative: CameraModule = {
  takePicture: async () => {
    return await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
  },
};

const CameraModuleWeb: CameraModule = {};

export const CameraModule = AppConstants.isNativeMobile
  ? CameraModuleNative
  : CameraModuleWeb;
