module.exports = {
    launch: {
        headless: false,
        defaultViewport: null,
        slowMo: process.env.SLOWMO ? process.env.SLOWMO :100,
        devtools: false
    }
}