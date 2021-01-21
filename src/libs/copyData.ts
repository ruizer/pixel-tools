/**
 * @description 拷贝像素数据ImageData，防止污染
 * @param       {ImageData} imgData canvas画布的像素数据
 * @returns     {ImageData}
 * */

function copyData(imgData: ImageData): ImageData {
    const imageData = new ImageData(imgData.width, imgData.height);
    imageData.data.set(imgData.data);
    return imageData;
}

export default copyData;
