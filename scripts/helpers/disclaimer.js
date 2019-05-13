function disclaimer(filename) {
  return `/* This file is automated via "./scripts/${filename}". Do not manually edit. */\n`
}
exports = disclaimer

module.exports = disclaimer
