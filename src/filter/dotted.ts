import xyToIFun from '../libs/xyToIFun';
/**
 * @description 喷点
 * @param       {ImageData} imgData 像素数据
 * @param       {Number}    R       矩形半径
 * @param       {Number}    r       内小圆半径
 * @return      {ImageData}
 */
function dotted(imgData: ImageData, R: number = 1, r: number = 1): ImageData {
    //矩形半径
    R = Number(R);

    //内小圆半径
    r = Number(r);

    const data = imgData.data;
    const width = imgData.width;
    const height = imgData.height;
    const xLength = R * 2 + 1;

    //构造距离模板
    const disTmlMatrix = [];

    const r2 = r * r;
    for (let x = -R; x < R; x++) {
        for (let y = -R; y < R; y++) {
            if (x * x + y * y > r2) {
                disTmlMatrix.push([x, y]);
            }
        }
    }

    const xyTFun = xyToIFun(width);

    //将大于距离外面的透明度置为0
    for (let x = 0, n = Math.floor(width / xLength); x < n; x++) {
        for (let y = 0, m = Math.floor(height / xLength); y < m; y++) {
            const middleX = Math.floor((x + 0.5) * xLength);
            const middleY = Math.floor((y + 0.5) * xLength);

            for (let i = 0; i < disTmlMatrix.length; i++) {
                let dotX = middleX + disTmlMatrix[i][0];
                let dotY = middleY + disTmlMatrix[i][1];

                data[xyTFun(dotX, dotY, 3)] = 225;
                data[xyTFun(dotX, dotY, 2)] = 225;
                data[xyTFun(dotX, dotY, 0)] = 225;
                data[xyTFun(dotX, dotY, 1)] = 225;
            }
        }
    }
    return imgData;
}

export default dotted;
