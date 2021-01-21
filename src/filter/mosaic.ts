/**
 * @description 马赛克
 * @param       {ImageData} imgData 像素数据
 * @param       {Number}    num     马赛克方块大小，默认3
 * @return      {ImageData}
 */
function mosaic(imgData: ImageData, num: number = 3): ImageData {
    const R = Math.floor(num) || 3;
    const data = imgData.data;
    const width = imgData.width;
    const height = imgData.height;
    const xLength = R * 2 + 1;

    for (let x = 0, n = Math.floor(width / xLength); x < n; x++) {
        for (let y = 0, m = Math.floor(height / xLength); y < m; y++) {
            const average = [],
                sum = [0, 0, 0];
            for (let i = 0; i < xLength; i++) {
                for (let j = 0; j < xLength; j++) {
                    const realI = (y * xLength + i) * width + x * xLength + j;
                    sum[0] += data[realI * 4];
                    sum[1] += data[realI * 4 + 1];
                    sum[2] += data[realI * 4 + 2];
                }
            }
            average[0] = sum[0] / (xLength * xLength);
            average[1] = sum[1] / (xLength * xLength);
            average[2] = sum[2] / (xLength * xLength);

            for (let i = 0; i < xLength; i++) {
                for (let j = 0; j < xLength; j++) {
                    const realI = (y * xLength + i) * width + x * xLength + j;
                    data[realI * 4] = average[0];
                    data[realI * 4 + 1] = average[1];
                    data[realI * 4 + 2] = average[2];
                }
            }
        }
    }
    return imgData;
}

export default mosaic;
