class UtilsClass {
    toUrlParam(paramObj) {
        if (!paramObj) {
            return '';
        }
        return Object.entries(paramObj)
            .map(([key, val]) => {
            return `${encodeURIComponent(key)}=${encodeURIComponent(val)}`;
        })
            .join('&');
    }
}
const FrontUtils = new UtilsClass();
export default FrontUtils;
