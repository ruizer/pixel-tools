/**
 * @description 将(x,y)的坐标转为单维的i
 * @param       {Number}    width
 * @return      {Function}
 */
function xyToIFun(width: number): (x: number, y: number, z: number) => number {
    return function (x: number, y: number, z: number): number {
        z = z || 0;
        return (y * width + x) * 4 + z;
    };
}

export default xyToIFun;
