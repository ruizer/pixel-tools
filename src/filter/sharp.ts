/**
 * @description 锐化
 * @param       {ImageData} imgData 像素数据
 * @param       {Number}    num     锐化程度
 * @return      {ImageData}
 */
function sharp(imgData: ImageData, num: number = 1): ImageData {
    const lamta = Number(num) || 1;
    const data = imgData.data;
    const width = imgData.width;

    for (let i = 0, n = data.length; i < n; i += 4) {
        const ii = i / 4;
        const row = Math.floor(ii / width);
        const col = ii % width;
        if (row == 0 || col == 0) continue;

        const A = ((row - 1) * width + (col - 1)) * 4;
        const B = ((row - 1) * width + col) * 4;
        const E = (ii - 1) * 4;

        for (let j = 0; j < 3; j++) {
            const delta = data[i + j] - (data[B + j] + data[E + j] + data[A + j]) / 3;
            data[i + j] += delta * lamta;
        }
    }
    return imgData;
}

export default sharp;
