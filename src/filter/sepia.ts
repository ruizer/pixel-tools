import xyToIFun from '../libs/xyToIFun';
/**
 * @description 棕褐色
 * @param       {ImageData} imgData 像素数据
 * @return      {ImageData}
 */
function sepia(imgData: ImageData): ImageData {
    const data = imgData.data;
    const width = imgData.width;
    const height = imgData.height;

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const xyTFun = xyToIFun(width);
            const j = xyTFun(x, y, 0);
            const r = data[j],
                g = data[j + 1],
                b = data[j + 2];
            const newR = r * 0.393 + g * 0.769 + b * 0.189;
            const newG = r * 0.349 + g * 0.686 + b * 0.168;
            const newB = r * 0.272 + g * 0.534 + b * 0.131;
            data[j] = newR;
            data[j + 1] = newG;
            data[j + 2] = newB;
        }
    }
    return imgData;
}

export default sepia;
