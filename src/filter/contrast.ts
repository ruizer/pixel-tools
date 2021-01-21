/**
 * @description 对比度
 * @param       {ImageData} imgData     像素数据
 * @param       {Number}    contrast    0无变化，-1时呈灰色
 * @return      {ImageData}
 */

function contrast(imgData: ImageData, contrast: number = 1): ImageData {
    const data = imgData.data;
    const colorDataArrLen = data.length;
    for (let i = 0; i < colorDataArrLen; i += 4) {
        for (let j = 0; j < 3; j++) {
            data[i + j] += (data[i + j] - 127.5) * contrast;
        }
    }
    return imgData;
}

export default contrast;
