module.exports = {
    launch: {
        headless: false,
        slowMo: process.env.SLOWMO ? process.env.SLOWMO :100,
        devtools: false
    }
}