/**
 * @description 单色滤镜
 * @param       {ImageData} imgData 像素数据
 * @param       {String}    color red/green/blue
 * @return      {ImageData}
 */
function singlecolor(imgData: ImageData, color: string): ImageData {
    if (!['red', 'green', 'blue'].includes(color)) {
        // 参数错误
        return imgData;
    }
    const data = imgData.data;
    for (let i = 0, n = data.length; i < n; i += 4) {
        switch (color) {
            case 'red':
                data[i + 1] = data[i + 2] = 0;
                break;
            case 'green':
                data[i] = data[i + 2] = 0;
                break;
            default:
                data[i] = data[i + 1] = 0;
                break;
        }
    }
    return imgData;
}

export default singlecolor;
