export default function getStatusColor(id) {
  switch (id) {
    case 1:
      return "text-primary font-weight-bold";
    case 2:
      return "text-success font-weight-bold";
    case 3:
      return "text-danger font-weight-bold";
    case 4:
      return "text-warning font-weight-bold";
    case 5:
      return "text-dark font-weight-bold";

    default:
      return "text-muted font-weight-bold";
  }
}

export function base64ToArrayBuffer(base64) {
  const binaryString = window.atob(base64);
  const binaryLen = binaryString.length;
  const bytes = new Uint8Array(binaryLen);
  for (let i = 0; i < binaryLen; i += 1) {
    const ascii = binaryString.charCodeAt(i);
    bytes[i] = ascii;
  }
  return bytes;
}

// async function asyncForEach(array, callback) {
//   for (let index = 0; index < array.length; index++) {
//     await callback(array[index], index, array);
//   }
// }

// async function printFiles() {
//   const files = await getFilePaths();

//   for (const file of files) {
//     const contents = await fs.readFile(file, "utf8");
//     console.log(contents);
//   }
// }

// async function printFilesParallel() {
//   const files = await getFilePaths();

//   await Promise.all(
//     files.map(async file => {
//       const contents = await fs.readFile(file, "utf8");
//       console.log(contents);
//     })
// );
// }
