import xyToIFun from '../libs/xyToIFun';
/**
 * @description 伽马校正，调整图像的整体亮度
 * @param       {ImageData} imgData 像素数据
 * @param       {Number}    num     -100到100 默认10
 * @return      {ImageData}
 */
function gamma(imgData: ImageData, num: number = 10): ImageData {
    const data = imgData.data;
    const width = imgData.width;
    const height = imgData.height;

    const gamma = Number(num);
    const normalizedArg = ((gamma + 100) / 200) * 2;
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const xyTFun = xyToIFun(width);
            const j = xyTFun(x, y, 0);
            data[j] = Math.pow(data[j], normalizedArg);
            data[j + 1] = Math.pow(data[j + 1], normalizedArg);
            data[j + 2] = Math.pow(data[j + 2], normalizedArg);
        }
    }

    return imgData;
}

export default gamma;
