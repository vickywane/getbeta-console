module.exports = {
  modulePaths: ["/src/tests/"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
}
