/**
 * @description 灰度去饱和
 * @param       {ImageData} imgData 像素数据
 * @return      {ImageData}
 */
function graydesat(imgData: ImageData): ImageData {
    const data = imgData.data;
    for (let i = 0, n = data.length; i < n; i += 4) {
        const gray = (Math.max(data[i], data[i + 1], data[i + 2]), Math.min(data[i], data[i + 1], data[i + 2])) / 2;
        data[i + 2] = data[i + 1] = data[i] = gray;
    }
    return imgData;
}
export default graydesat;
