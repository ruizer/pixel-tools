/**
 * @description 平均灰度处理
 * @param       {ImageData} imgData
 * @return      {ImageData}
 */
function grayaverage(imgData: ImageData): ImageData {
    const data = imgData.data;
    for (let i = 0, n = data.length; i < n; i += 4) {
        const gray = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i + 2] = data[i + 1] = data[i] = gray;
    }
    return imgData;
}
export default grayaverage;
