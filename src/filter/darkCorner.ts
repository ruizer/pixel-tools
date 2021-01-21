import distance from '../libs/distance';
/**
 * @description 暗角
 * @param       {ImageData} imgData     像素数据
 * @param       {Number}    R           暗角级别，1-10，默认3
 * @param       {Number}    lastLevel   暗角最终的级别 0-255
 * @return      {ImageData}
 */
function darkCorner(imgData: ImageData, R: number = 3, lastLevel: number = 30): ImageData {
    const data = imgData.data;
    const width = imgData.width;
    const height = imgData.height;

    // 中心点，这里的中心点是像素中心
    const middleX = (width * 2) / 3;
    const middleY = (height * 1) / 2;
    // 距离中心点最长距离
    const maxDistance = distance([middleX, middleY]);
    // 开始产生暗角的距离
    const startDistance = maxDistance * (1 - R / 10);

    const f = function (x: number, p0: number, p1: number, p2: number, p3: number) {
        // 基于三次贝塞尔曲线
        return p0 * Math.pow(1 - x, 3) + 3 * p1 * x * Math.pow(1 - x, 2) + 3 * p2 * x * x * (1 - x) + p3 * Math.pow(x, 3);
    };
    // 计算当前点应增加的暗度
    function calDark(x: number, y: number, p: number) {
        //计算距中心点距离
        const thedistance = distance([x, y], [middleX, middleY]);
        let currBilv = (thedistance - startDistance) / (maxDistance - startDistance);
        if (currBilv < 0) currBilv = 0;

        //应该增加暗度
        return (f(currBilv, 0, 0.02, 0.3, 1) * p * lastLevel) / 255;
    }

    // 区块
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const realI = y * width + x;
            for (let j = 0; j < 3; j++) {
                const dDarkness = calDark(x, y, data[realI * 4 + j]);
                data[realI * 4 + j] -= dDarkness;
            }
        }
    }

    return imgData;
}

export default darkCorner;
