/**油画
 * @param       {ImageData} imgData 像素数据
 * @param       {Number}    num     默认16
 * @return      {ImageData}
 */
function oilPainting(imgData: ImageData, num: number): ImageData {
    const R = Math.floor(num) || 16;
    const data = imgData.data;
    const width = imgData.width;
    const height = imgData.height;

    //区块
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const realI = y * width + x;
            let gray = 0;
            for (let j = 0; j < 3; j++) {
                gray += data[realI * 4 + j];
            }
            gray = gray / 3;
            const every = Math.floor(gray / R) * R;
            for (let j = 0; j < 3; j++) {
                data[realI * 4 + j] = every;
            }
        }
    }
    return imgData;
}
