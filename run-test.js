const { chromium } = require("playwright-chromium");

(async () => {
  // Start Chromium with the '--no-sandbox' argument
  const browser = await chromium.launch({ args: ["--no-sandbox"] });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://whatsmyuseragent.org/');
  await page.screenshot({ path: `chromium.png` });
  await browser.close();
})();