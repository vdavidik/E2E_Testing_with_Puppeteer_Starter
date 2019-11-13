

//*******utilities

async function logout(){


        await page.waitForSelector('div[class="main-menu__dropdown dropdown nav-item"]');
        await page.click('div[class="main-menu__dropdown dropdown nav-item"]');
        await page.waitForSelector('div[class="main-menu__dropdown-item dropdown-item"]');
        await page.click('div[class="main-menu__dropdown-item dropdown-item"]');
}

async function login() {

        await page.waitForSelector('.culture-selector-container .scrollable-selectbox__valuebox-icon');
        await page.click('.culture-selector-container .scrollable-selectbox__valuebox-icon');
        await page.click(mainPageDropBoxEnglish);
        await page.waitForSelector('.login button');
        await page.click('.login button');
        await page.waitForSelector('input[name="email"]');
        await page.keyboard.type(EMAIL);
        await page.click('button[id="next-btn"]');
        await page.waitForSelector('input[name="password"]');
        await page.keyboard.type(ACCPASS);
        await page.click('button[id="next-btn"]');
        await page.waitForNavigation({
          waitUntil: 'networkidle0',
        });
}

 async function removeFrameCookie() {
 /*
try {
                       await page.waitForSelector('.cookie-consent-dialogue');
                        console.log("The element found.")
                    } catch (error) {
                      console.log("The element didn't appear.")
                    }
                    */
                    await page.waitForSelector('.cookie-consent-dialogue');
                         let div_selector_to_remove= ".cookie-consent-dialogue";
                                await page.evaluate((sel) => {
                                    var elements = document.querySelector(sel);
                                               elements.parentNode.removeChild(elements);
                                        }, div_selector_to_remove);
}


 async function connection() {
        await page.authenticate({username:USERNAME, password:PASSWORD});
        await page.goto(URLTOFETCH,{waitUntil: 'domcontentloaded'});

}


 async function listenerWrongHTMLStatus() {
 var newLength = [];
 page.on('response', response => {
                    if (response.status().toString().match('4[0-9]{2}|5[0-4][0-9]|550')) {
                                  console.log(response.status() + ' ' + response.url());
                                  newLength.push(response.status() + ' ' + response.url());

                               }
                        fs.writeFile('LOG.txt', (newLength + '\r\n'));
                });
}


 async function listenerVehicleByUser() {
 page.on('response', async (response) => {
                    if (response.url().endsWith('/vehicles')) {
                    const data = response.buffer()
                                  console.log(response.status() + ' ' + response.url() + ' ' + data);
                               }

                });
}


//*******utilities


const timeout = process.env.SLOWMO ? 100000 : 100000;
const fse = require('fs-extra');
const { URL } = require('url');
const path = require('path');



beforeAll(async () => {
   connection();
   removeFrameCookie();
   //listenerWrongHTMLStatus();

}, timeout);


describe('Log IN & Tiles check', () => {
    test('Login', async () => {
    page.on('response', async (response) => {
     if (response.url().endsWith('/vehicles')) {
        const url = new URL(response.url());
        let filePath = path.resolve(`./output${url.pathname}`);
        if (path.extname(url.pathname).trim() === '') {
          filePath = `${filePath}/index.html`;
        }
        console.log(filePath)
        await fse.outputJson(filePath, await response.buffer());
      }});
       await login()

    }, timeout);


});

