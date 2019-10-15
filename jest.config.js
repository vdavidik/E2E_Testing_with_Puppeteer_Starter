module.exports = {
    preset: "jest-puppeteer",
    globals: {
        USERNAME: "cwp",
        PASSWORD: "piglet-dev",
        URL: "https://dev.skoda-connect.com/"
    },
    testMatch: [
      "**/test/**/*.test.js"
    ],
    verbose: true
}