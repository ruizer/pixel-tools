/**
 * @description 灰度处理
 * @param       {ImageData} imgData 像素数据
 * @param       {Number}    gray    0-1之间，值为 1 则完全转为灰度图像，值为 0 图像无变化，默认1
 * @return      {ImageData}
 */

function grayscale(imgData: ImageData, num: number = 1): ImageData {
    if (num <= 0) return imgData;
    num >= 1 && (num = 1);
    const data = imgData.data;
    for (let i = 0, n = data.length; i < n; i += 4) {
        const gray = Math.floor(0.2125 * data[i] + 0.7154 * data[i + 1] + 0.0721 * data[i + 2]);
        data[i] = Math.round(gray + (data[i] - gray) * (1 - num));
        data[i + 1] = Math.round(gray + (data[i + 1] - gray) * (1 - num));
        data[i + 2] = Math.round(gray + (data[i + 2] - gray) * (1 - num));
    }
    return imgData;
}

export default grayscale;
