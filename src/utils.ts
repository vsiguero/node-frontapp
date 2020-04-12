class UtilsClass {
  public toUrlParam(paramObj: object | undefined): string {
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
