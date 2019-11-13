
 async function connection() {
   await page.authenticate({username:USERNAME, password:PASSWORD});
        await page.goto(URL,{waitUntil: 'domcontentloaded'});
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
}




