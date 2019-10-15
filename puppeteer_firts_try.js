const puppeteer = require('puppeteer');

(async function main(){
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto('https://dev.skoda-connect.com/');
        
        await new Promise(resolve => setTimeout(resolve, 5000));
        console.log('done');
        await browser.close();
    } catch (e) {
        console.log('Err', e);
    }
})();