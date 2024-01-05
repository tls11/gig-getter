const puppeteer = require('puppeteer');

const puppet = async url => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  // await browser.close();
};
