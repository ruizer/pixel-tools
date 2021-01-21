/**
 * @description 计算两点之间的距离
 * @param       {Array}  p1/p2 两点坐标
 * @return      {Number}
 */
function distance(p1: number[], p2: number[]): number {
    p2 = p2 || [0, 0];
    const r = p1[0] - p2[0],
        i = p1[1] - p2[1];
    return Math.sqrt(r * r + i * i);
}

export default distance;
