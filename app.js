const puppeteer = require('puppeteer');

const PPS_URL = 'https://www.ppshk.com/pps/pps2/revamp2/template/pc/login_c.jsp';

puppeteer.launch({
  headless: false,
  executablePath: '.\\bin\\GoogleChromePortable64\\App\\Chrome-bin\\chrome.exe'
}).then(async browser => {
  const page = await browser.newPage();
  await page.goto(PPS_URL);
  // other actions...
  await browser.close();
});
