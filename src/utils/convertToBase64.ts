export function getBase64(file: File) {
  const reader = new FileReader();
  const base64 = Promise.all([
    new Promise((resolve, reject) => {
      reader.readAsDataURL(file);
      reader.onload = function () {
        return resolve(reader.result);
      };
      reader.onerror = function (error) {
        reject(error);
      };
    }),
  ]).then((res) => res[0]);
  return base64;
}
