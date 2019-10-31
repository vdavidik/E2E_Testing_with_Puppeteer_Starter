const timeout = process.env.SLOWMO ? 5 : 5;

beforeAll(async () => {
    await page.authenticate({username:USERNAME, password:PASSWORD});
    await page.goto(URL,{waitUntil: 'domcontentloaded'});
});

describe('Log IN & OUT', () => {
    test('The user can log into app', async () => {

        await page.waitForSelector('.login button');
        await page.click('.login button');
        await page.waitForSelector('input[name="email"]');
        await page.click('input[id="input_email"]');
        await page.keyboard.type(EMAIL);
        await page.click('button[id="next-btn"]');
        await page.waitForSelector('input[name="password"]');
        await page.click('input[id=input_password_for_login]');
        await page.keyboard.type(ACCPASS);
        await page.click('button[id="next-btn"]');
        await page.waitForNavigation();
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

