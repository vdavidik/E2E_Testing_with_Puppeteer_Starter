module.exports = {
    preset: "jest-puppeteer",
    globals: {
        USERNAME: "cwp",
        PASSWORD: "piglet-test",
        URLTOFETCH: "https://test.skoda-connect.com/",
        EMAIL: "mod5.cwp@seznam.cz",
        ACCPASS: "ConnectedcarCWP1",
        acceptCookies:'.btn-sa-primary-extra-small',
        mainPageDropBoxLanguage:'div.footer__legal-row__language-selector-col > div > div > div.scrollable-selectbox__inner > div.scrollable-selectbox__valuebox',
        mainPageDropBoxEnglish:'.scrollable-selectbox__optionbox--opened>.option:nth-child(3)'

    },
    testMatch: [
      "**/test/**/*.test.js"
    ],
    verbose: true,

    reporters: [
              "default",
              ["jest-html-reporters",{
              expand:true}]
            ]
}