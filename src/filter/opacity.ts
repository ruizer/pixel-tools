/**
 * @description 透明度
 * @param       {ImageData} imgData 像素数据
 * @param       {Number}    num     0 - 1之间 默认值为1
 * @return      {ImageData}
 */
function opacity(imgData: ImageData, num: number): ImageData {
    num = Math.min(Number(num), 1);
    num = Math.max(Number(num), 0);
    if (num >= 1) return imgData;
    const data = imgData.data;

    for (let i = 0, n = data.length; i < n; i += 4) {
        data[i + 3] *= num;
    }
    return imgData;
}

export default opacity;
