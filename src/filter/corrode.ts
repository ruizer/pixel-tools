/**
 * @description 腐蚀
 * @param       {ImageData} imgData 像素数据
 * @param       {Number}    num
 * @return      {ImageData}
 */
function corrode(imgData: ImageData, num: number): ImageData {
    const R = Math.floor(num) || 3;
    const data = imgData.data;
    const width = imgData.width;
    const height = imgData.height;

    //区块
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const randomI = Math.floor(Math.random() * R * 2) - R; //区块随机代表
            const randomJ = Math.floor(Math.random() * R * 2) - R; //区块随机代表
            const realI = y * width + x;
            const realJ = (y + randomI) * width + x + randomJ;

            for (let j = 0; j < 3; j++) {
                data[realI * 4 + j] = data[realJ * 4 + j];
            }
        }
    }
    return imgData;
}

export default corrode;
