module.exports = {
    launch: {
        headless: process.env.HEADLESS !== "false",
        slowMo: process.env.SLOWMO ? process.env.SLOWMO : 100,
        devtools: true
    }
}