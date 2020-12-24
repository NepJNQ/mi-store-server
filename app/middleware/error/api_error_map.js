/*
 * @Description: 常见errorName与errorMsg映射
 * @Author: Nep
 * @Date: 2020-12-17 21:11:16
 * @LastEditTime: 2020-12-24 19:33:13
 */

const ApiErrorNames = require("./api_error_name");
const ApiErrorMap = new Map();

ApiErrorMap.set(ApiErrorNames.NOT_FOUND, {
  code: ApiErrorNames.NOT_FOUND,
  message: "未找到该接口",
});
ApiErrorMap.set(ApiErrorNames.ILLEGAL_FORMAT, {
  code: ApiErrorNames.ILLEGAL_FORMAT,
  message: "格式错误",
});
ApiErrorMap.set(ApiErrorNames.UNEXIST, {
  code: ApiErrorNames.UNEXIST,
  message: "结果不存在",
});
ApiErrorMap.set(ApiErrorNames.ALREADY_EXIST, {
  code: ApiErrorNames.ALREADY_EXIST,
  message: "字段已存在",
});
ApiErrorMap.set(ApiErrorNames.LEGAL_ID, {
  code: ApiErrorNames.LEGAL_ID,
  message: "id 不合法",
});

ApiErrorMap.set(ApiErrorNames.NO_AUTH, {
  code: ApiErrorNames.NO_AUTH,
  message: "没有操作权限",
});

module.exports = ApiErrorMap;
