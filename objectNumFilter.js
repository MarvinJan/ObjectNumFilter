export function objectNumFilter(obj, result = {}, path: string = "") {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      switch (typeof obj[key]) {
        case "number":
          result[!path ? key : path + `.${key}`] = obj[key];
          break;
        case "object":
          objectNumFilter(obj[key], result, !path ? key : path + `.${key}`);
          break;
        default:
          false;
          break;
      }
    }
  }

  return result;
}
