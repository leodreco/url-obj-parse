/**
 *
 * @param {*} data
 * @param {*} name
 * @returns
 */
function UrlObjParse(data, name = undefined) {
  let query = [];

  if (typeof data === "object") {
    for (let key in data) {
      let value = data[key];
      if (name != undefined) {
        key = `${name}[${key}]`;
      }

      if (typeof value === "string" || typeof value === "number") {
        query.push(`${key}=${value}`);
      } else if (typeof value === "object") {
        for (let valueKey in value) {
          query.push(UrlObjParse(value[valueKey], `${key}[${valueKey}]`));
        }
      }
    }
  } else {
    query.push(`${name}=${data}`);
  }

  return query.join("&");
}

module.exports = UrlObjParse;
