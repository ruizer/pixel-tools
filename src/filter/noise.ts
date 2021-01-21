/**
 * @description 杂色
 * @param       {ImageData} imgData 像素数据
 * @param       {Number}    num     默认100
 * @return      {ImageData}
 */
function noise(imgData: ImageData, num: number): ImageData {
    const R = Math.floor(num) || 100;
    const data = imgData.data;
    const width = imgData.width;
    const height = imgData.height;

    //区块
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const realI = y * width + x;
            for (let j = 0; j < 3; j++) {
                const rand = Math.floor(Math.random() * R * 2) - R;
                data[realI * 4 + j] += rand;
            }
        }
    }

    return imgData;
}

export default noise;
