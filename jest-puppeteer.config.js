module.exports = {
    launch: {
        headless: false,
        defaultViewport: null,
        slowMo: process.env.SLOWMO ? process.env.SLOWMO :250,
        devtools: false
    }
}