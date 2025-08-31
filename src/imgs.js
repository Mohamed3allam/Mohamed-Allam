//IMPORTING IMAGES
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
        images[item.replace("./", "")] = r(item);
    });
    return images;
}
const images = importAll(
    require.context("./assets/imgs", true, /\.(png|jpe?g|svg|gif|mp4|pdf)$/)
);

export default images;
