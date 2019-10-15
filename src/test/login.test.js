const timeout = process.env.SLOWMO ? 30000 : 10000;


beforeAll(async () => {


    await page.authenticate({username:USERNAME, password:PASSWORD});
    await page.goto(URL,{waitUntil: 'domcontentloaded'});

});

describe('Log IN & OUT', () => {
    test('The user can log into app', async () => {

       await page.waitForSelector('.login button');
        await page.click('[type="button"]');
/*
           await page.click('input[name=email]')
           await page.type('input[name=email]', 'yomi@mail.com')
           await page.click('input[name=password]')
           await page.type('input[name=password]', 'password')
           await page.click('button[type=submit]')
           await page.waitForSelector('[data-testid="homepage"]')
*/
    }, timeout);
/*
    test('Header of the page', async () => {
            const h1Handle = await page.$('.learn_header');
            const html = await page.evaluate(h1Handle => h1Handle.innerHTML, h1Handle);

            expect(html).toBe("What will you learn");
        }, timeout);
        */
});

