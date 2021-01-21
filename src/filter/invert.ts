/**
 * @description 色相旋转，反色
 * @param       {ImageData} imgData 像素数据
 * @param       {Number}    num     0 - 1之间 0默认无反色
 * @return      {ImageData}
 */
function invert(imgData: ImageData, num: number): ImageData {
    num = Math.min(Number(num), 1);
    num = Math.max(Number(num), 0);
    if (num <= 0) return imgData;
    const data = imgData.data;

    for (let i = 0, n = data.length; i < n; i += 4) {
        data[i] = (255 - data[i]) * num;
        data[i + 1] = (255 - data[i + 1]) * num;
        data[i + 2] = (255 - data[i + 2]) * num;
    }

    return imgData;
}

export default invert;
