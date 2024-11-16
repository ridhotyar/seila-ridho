const imgExt = ["jpg", "png", "jpeg", "svg", "webp"];
const videoExt = ["mp4"];
const audioExt = ["mp3"];

const preLoadAssets = () => {
  const assets = import.meta.glob(
    `/src/assets/**/*.{jpg,png,jpeg,svg,webp,mp4,mp3}`
  );
  const loadImages = Object.keys(assets).map((pathfile) => {
    const ext = pathfile.substring(pathfile.lastIndexOf(".") + 1);
    if (imgExt.includes(ext)) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = pathfile;
        img.onload = function () {
          resolve(pathfile);
        };
        img.onerror = img.onabort = function () {
          reject(pathfile);
        };
      });
    } else if (videoExt.includes(ext)) {
      return new Promise((resolve, reject) => {
        const video = document.createElement("video");
        video.src = pathfile;
        video.load();
        video.onloadeddata = function () {
          resolve(pathfile);
        };
        video.onerror = video.onabort = function () {
          reject(pathfile);
        };
      });
    } else if (audioExt.includes(ext)) {
      return new Promise((resolve, reject) => {
        const audio = document.createElement("audio");
        audio.src = pathfile;
        audio.load();
        audio.onloadeddata = function () {
          resolve(pathfile);
        };
        audio.onerror = audio.onabort = function () {
          reject(pathfile);
        };
      });
    } else {
      return new Promise((resolve) => {
        resolve(pathfile);
      });
    }
  });

  return Promise.allSettled(loadImages);
};

export default preLoadAssets;
