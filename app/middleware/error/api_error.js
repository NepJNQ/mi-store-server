// 自定义Api异常

const ApiErrorMap = require("./api_error_map");

class ApiError extends Error {
  constructor(errorName, errorMsg) {
    super();

    let errorInfo = {};
    if (errorMsg) {
      errorInfo = {
        code: errorName,
        message: errorMsg,
      };
    }
    // 如果没有显式传入errorMsg，则从默认ErrorMap中寻找
    else {
      errorInfo = ApiErrorMap.get(errorName);
    }

    this.name = errorName;
    this.code = errorInfo.code;
    this.message = errorInfo.message;
  }
}

module.exports = ApiError;
