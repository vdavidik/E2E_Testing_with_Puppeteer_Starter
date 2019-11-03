module.exports = {
    launch: {
        headless: false,
        slowMo: process.env.SLOWMO ? process.env.SLOWMO :200,
        devtools: true
    }
}