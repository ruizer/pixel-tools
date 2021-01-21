import xyToIFun from '../libs/xyToIFun';
/**
 * @description 色调分离
 * @param       {ImageData} imgData 像素数据
 * @param       {Number}    num     灰度阶数 默认20
 * @return      {ImageData}
 */
function posterize(imgData: ImageData, num: number): ImageData {
    const data = imgData.data;
    const width = imgData.width;
    const height = imgData.height;

    //灰度阶数
    //由原来的255阶映射为现在的阶数
    let step = Number(num) || 20;

    step = step < 1 ? 1 : step > 255 ? 255 : step;
    const level = Math.floor(255 / step);

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const xyTFun = xyToIFun(width);
            const j = xyTFun(x, y, 0);
            data[j] = Math.floor(data[j] / level) * level;
            data[j + 1] = Math.floor(data[j + 1] / level) * level;
            data[j + 2] = Math.floor(data[j + 2] / level) * level;
        }
    }
    return imgData;
}
export default posterize;
