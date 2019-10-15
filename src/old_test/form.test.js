const timeout = process.env.SLOWMO ? 30000 : 10000;

beforeAll(async () => {
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
});

describe('Test header and title of the page', () => {
    test('Submit form with valid data', async () => {
            await page.click('[href="/login"]');

            await page.waitForSelector('form');
            await page.type('#name', 'Rick');

            await page.type('#password','szechuanSauce');
            await page.type('#repeat_password','szechuanSauce');

            await page.click('[type="submit"]');
            await page.waitForSelector('.success');
            const html = await page.$eval('.success', el => el.innerHTML);

            expect(html).toBe('Successfully signed up!');
        }, timeout);
});