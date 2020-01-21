function disclaimer(filename, extraText = '') {
  return `/* This file is automated via "./scripts/${filename}". Do not manually edit. */\n${extraText}`
}
exports = disclaimer

module.exports = disclaimer
