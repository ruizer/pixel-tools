/**
 * @description 灰度处理0-1
 * @param       {Number}    gray 0-1
 * @return      {ImageData}
 */

function grayscale(imgData: ImageData, num: number): ImageData {
    if (num <= 0) {
        return imgData;
    }
    const data = imgData.data;
    for (let i = 0, n = data.length; i < n; i += 4) {
        const gray = Math.floor(num * data[i] + num * data[i + 1] + num * data[i + 2]);
        data[i + 2] = data[i + 1] = data[i] = gray;
    }
    return imgData;
}

export default grayscale;
