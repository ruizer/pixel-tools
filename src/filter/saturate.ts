import hslToRgb from '../libs/hslToRgb';

/**
 * @description 饱和度
 * @param       {ImageData} imgData 像素数据
 * @param       {Number}    num     值为 0 则是完全不饱和，默认值为 1 则图像无变化。其他值是效果的线性乘数。超过 1 则有更高的饱和度
 * @return      {ImageData}
 */
function saturate(imgData: ImageData, num: number = 1): ImageData {
    num = Number(num);
    const data = imgData.data;
    for (let i = 0, len = data.length; i < len; i += 4) {
        const hslarr = rgbToHsl(data[i], data[i + 1], data[i + 2]); //将canvas图像一个像素转成hsl
        // const h = Math.round(hslarr[0]) / 100; //色调，处理成0-1之前数据
        // let s = Math.round(hslarr[1]) / 100; //饱和度
        // const l = Math.round(hslarr[2]) / 100; //亮度
        const h = hslarr[0] / 100;
        let s = hslarr[1] / 100;
        const l = hslarr[2] / 100;
        // if (s <= 0.95) {
        //   //处理饱和度，色调，亮度类似
        //   s = s + 0.05;
        // }
        s += s * (num - 1);
        const rgbarr = hslToRgb(h, s, l); //把处理后的hsl转成rgb
        data[i] = rgbarr[0];
        data[i + 1] = rgbarr[1];
        data[i + 2] = rgbarr[2];
    }
    return imgData;
}

export default saturate;
