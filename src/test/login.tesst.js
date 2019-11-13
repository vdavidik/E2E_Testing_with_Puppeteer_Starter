require ('../selectors.js');
const timeout = process.env.SLOWMO ? 600000 : 600000;
const fs = require('fs');
var newLength = [];

beforeAll(async () => {
    await page.authenticate({username:USERNAME, password:PASSWORD});
    await page.goto(URLTOFETCH,{waitUntil: 'domcontentloaded'});
     try {
                       await page.waitForSelector('.cookie-consent-dialogue');
                        console.log("The element found.")
                    } catch (error) {
                      console.log("The element didn't appear.")
                    }
    let div_selector_to_remove= ".cookie-consent-dialogue";
    await page.evaluate((sel) => {
        var elements = document.querySelector(sel);
                   elements.parentNode.removeChild(elements);
            }, div_selector_to_remove)

        page.on('response', response => {
                if (response.status().toString().match('4[0-9]{2}|5[0-4][0-9]|550')) {
                              console.log(response.status() + ' ' + response.url());
                              newLength.push(response.status() + ' ' + response.url());

                           }
fs.writeFile('LOG.txt', (newLength + '\r\n'));
            });


});

describe('Log IN & Tiles check', () => {
    test('Login', async () => {

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


    }, timeout);

     test('Notification check', async () => {

             await page.waitForSelector('.alerts-tile__alert-present');
             await page.click('.alerts-tile__alert-present');
             const h1Handle = await page.$('.service-detail-layout__content__headline');
                     const html = await page.evaluate(h1Handle => h1Handle.innerHTML, h1Handle);
                     expect(html).toBe("Notifications");
             await page.goBack();

         }, timeout);

       test('Vehicle Status check', async () => {

             await page.waitForSelector('.rvs-tile__overlay');
             await page.click('.rvs-tile__overlay');
             const h1Handle = await page.$('.service-detail-layout__content__headline');
                     const html = await page.evaluate(h1Handle => h1Handle.innerHTML, h1Handle);
                     expect(html).toBe("Vehicle Status");
             await page.goBack();

         }, timeout);

        test('Doors and Lights check', async () => {

                      await page.waitForSelector('.dal-tile');
                      await page.click('.dal-tile');
                      const h1Handle = await page.$('.service-detail-layout__content__headline');
                              const html = await page.evaluate(h1Handle => h1Handle.innerHTML, h1Handle);
                              expect(html).toBe("Doors and Lights");
                      await page.goBack();

         }, timeout);


        test('Vehicle Health Report check', async () => {

                      await page.waitForSelector('.vhr-tile__overlay');
                      await page.click('.vhr-tile__overlay');
                      const h1Handle = await page.$('.service-detail-layout__content__headline');
                              const html = await page.evaluate(h1Handle => h1Handle.innerHTML, h1Handle);
                              expect(html).toBe("Vehicle Health Report");
                      await page.goBack();

                  }, timeout);


        test('Driving Data check', async () => {

                        await page.waitForSelector('.rts-tile__content-overlay');
                        await page.click('.rts-tile__content-overlay');
                        const h1Handle = await page.$('.service-detail-layout__content__headline');
                                const html = await page.evaluate(h1Handle => h1Handle.innerHTML, h1Handle);
                                expect(html).toBe("Driving Data");
                        await page.goBack();

                   }, timeout);

test('Log out', async () => {

                                           await page.waitForSelector('div[class="main-menu__dropdown dropdown nav-item"]');
                                           await page.click('div[class="main-menu__dropdown dropdown nav-item"]');
                                           await page.waitForSelector('div[class="main-menu__dropdown-item dropdown-item"]');
                                           await page.click('div[class="main-menu__dropdown-item dropdown-item"]');
                                           const title = await page.title();
                                                   expect(title).toBe('ŠKODA CONNECT')
                                      }, timeout);

          test('HTML status codes check', async () => {

                      expect(newLength.length!=0).toBe(false)

                  }, timeout);


});

