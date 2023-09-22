export default class Utility {
  static isItEmpty = (value: any) => {
    if (null === value || undefined === value || 0 === value.length) {
      return true;
    } else if (
      (Array.isArray(value) && value.length > 0) ||
      typeof value === "string" ||
      Object.keys(value).length === 0
    ) {
      return false;
    }
  };
}
