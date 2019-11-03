module.exports = {
    preset: "jest-puppeteer",
    globals: {
        USERNAME: "cwp",
        PASSWORD: "piglet-test",
        URL: "https://test.skoda-connect.com/",
        EMAIL: "mod5.cwp@seznam.cz",
        ACCPASS: "ConnectedcarCWP1"
    },
    testMatch: [
      "**/test/**/*.test.js"
    ],
    verbose: true,

"reporters": [
	"default",
	"./node_modules/jest-html-reporters"
]

}



