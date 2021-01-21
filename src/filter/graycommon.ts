/**
 * @description 加权平均灰度一般处理
 * @param       {ImageData} imgData
 * @return      {ImageData}
 */
function graycommon(imgData: ImageData): ImageData {
    const data = imgData.data;
    for (let i = 0, n = data.length; i < n; i += 4) {
        const average = 0.299 * data[i] + 0.578 * data[i + 1] + 0.114 * data[i + 2];
        const gray = Math.floor(average);
        data[i + 2] = data[i + 1] = data[i] = gray;
    }
    return imgData;
}

export default graycommon;
