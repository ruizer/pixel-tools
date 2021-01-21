/**
 * @description 调整亮度
 * @param       {ImageData} imgData     像素数据
 * @param       {Number}    brightness  值<=0全黑，默认1，大于1更亮
 * @return      {ImageData}
 */

function brightness(imgData: ImageData, brightness: number = 1): ImageData {
    const data = imgData.data;
    const colorDataArrLen = data.length;
    for (let i = 0; i < colorDataArrLen; i += 4) {
        for (let j = 0; j < 3; j++) {
            data[i + j] *= brightness;
        }
    }
    return imgData;
}

export default brightness;
