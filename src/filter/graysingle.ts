/**
 * @description 灰度单一通道
 * @param       {ImageData} imgData
 * @param       {String}    color red/green/blue
 * @return      {ImageData}
 */
function graysingle(imgData: ImageData, color: string): ImageData {
    if (!['red', 'green', 'blue'].includes(color)) {
        // 参数错误
        return imgData;
    }
    const data = imgData.data;
    for (let i = 0, n = data.length; i < n; i += 4) {
        const gray = color === 'red' ? data[i] : color === 'green' ? data[i + 1] : data[i + 2];
        data[i + 2] = data[i + 1] = data[i] = gray;
    }
    return imgData;
}

export default graysingle;
