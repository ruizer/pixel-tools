/**
 * @description 高斯模糊
 * @param       {Number}    radius  取样区域半径, 正数, 可选, 默认为 3.0
 * @param       {Number}    sigma   标准方差, 可选, 默认取值为 radius / 3
 * @return      {ImageData}
 */
function blur(imgData: ImageData, radius: number = 3, sigma: number = radius / 3): ImageData {
    const data = imgData.data;
    const width = imgData.width;
    const height = imgData.height;
    let gaussMatrix = [],
        gaussSum = 0,
        x: number,
        y: number,
        r: number,
        g: number,
        b: number,
        a: number,
        i: number,
        j: number,
        k: number,
        len: number;

    a = 1 / (Math.sqrt(2 * Math.PI) * sigma);
    b = -1 / (2 * sigma * sigma);
    //生成高斯矩阵
    for (i = 0, x = -radius; x <= radius; x++, i++) {
        g = a * Math.exp(b * x * x);
        gaussMatrix[i] = g;
        gaussSum += g;
    }
    //归一化, 保证高斯矩阵的值在[0,1]之间
    for (i = 0, len = gaussMatrix.length; i < len; i++) {
        gaussMatrix[i] /= gaussSum;
    }
    //x 方向一维高斯运算
    for (y = 0; y < height; y++) {
        for (x = 0; x < width; x++) {
            r = g = b = a = 0;
            gaussSum = 0;
            for (j = -radius; j <= radius; j++) {
                k = x + j;
                if (k >= 0 && k < width) {
                    //确保 k 没超出 x 的范围
                    //r,g,b 四个一组
                    i = (y * width + k) * 4;
                    r += data[i] * gaussMatrix[j + radius];
                    g += data[i + 1] * gaussMatrix[j + radius];
                    b += data[i + 2] * gaussMatrix[j + radius];
                    gaussSum += gaussMatrix[j + radius];
                }
            }
            i = (y * width + x) * 4;
            // 除以 gaussSum 是为了消除处于边缘的像素, 高斯运算不足的问题
            data[i] = r / gaussSum;
            data[i + 1] = g / gaussSum;
            data[i + 2] = b / gaussSum;
        }
    }
    //y 方向一维高斯运算
    for (x = 0; x < width; x++) {
        for (y = 0; y < height; y++) {
            r = g = b = a = 0;
            gaussSum = 0;
            for (j = -radius; j <= radius; j++) {
                k = y + j;
                if (k >= 0 && k < height) {
                    //确保 k 没超出 y 的范围
                    i = (k * width + x) * 4;
                    r += data[i] * gaussMatrix[j + radius];
                    g += data[i + 1] * gaussMatrix[j + radius];
                    b += data[i + 2] * gaussMatrix[j + radius];
                    gaussSum += gaussMatrix[j + radius];
                }
            }
            i = (y * width + x) * 4;
            data[i] = r / gaussSum;
            data[i + 1] = g / gaussSum;
            data[i + 2] = b / gaussSum;
        }
    }

    return imgData;
}

export default blur;
