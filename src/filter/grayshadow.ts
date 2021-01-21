/**
 * @description 灰度阴影
 * @param       {ImageData} imgData 像素数据
 * @param       {Number}    num     默认10
 * @return      {ImageData}
 */
function grayshadow(imgData: ImageData, num: number = 10): ImageData {
    const data = imgData.data;
    const ConversionFactor = 255 / (num - 1);
    for (let i = 0, n = data.length; i < n; i += 4) {
        const AverageValue = (data[i] + data[i + 1] + data[i + 2]) / 3;
        const gray = Math.round(AverageValue / ConversionFactor + 0.5) * ConversionFactor;
        data[i + 2] = data[i + 1] = data[i] = gray;
    }
    return imgData;
}

export default grayshadow;
