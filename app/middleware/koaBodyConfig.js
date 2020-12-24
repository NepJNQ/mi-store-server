// koabody 配置
let { uploadDir } = require("../../config");

const koaBodyConfig = {
  multipart: true, // 开启文件上传
  formidable: {
    uploadDir: uploadDir, // 上传目录
    keepExtensions: true, // 保持文件的后缀
    maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小限制
    onFileBegin: (name, file) => {
      // 文件上传前的设置
      console.log(`name: ${name}`);
      console.log(file);
    },
  },
};

module.exports = koaBodyConfig;
