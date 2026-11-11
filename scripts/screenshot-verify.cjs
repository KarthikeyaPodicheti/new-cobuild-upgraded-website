const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
      enableExtensions: true,
    });
    const page = await browser.newPage();

    await page.setViewport({ width: 1440, height: 900 });
    await page.goto('http://localhost:4321/new-cobuild-upgraded-website/', {
      waitUntil: 'networkidle0',
    });

    await page.screenshot({ path: 'scripts/screenshots/desktop.png', fullPage: true });

    const desktopStyles = await page.evaluate(() => {
      const getStyle = (selector) => {
        const el = document.querySelector(selector);
        if (!el) return null;
        const cs = window.getComputedStyle(el);
        return {
          fontSize: cs.fontSize,
          fontWeight: cs.fontWeight,
          lineHeight: cs.lineHeight,
          letterSpacing: cs.letterSpacing,
          maxWidth: cs.maxWidth,
        };
      };
      return {
        h1: getStyle('.hero h1'),
        lead: getStyle('.hero .lead'),
        eyebrow: getStyle('.hero__eyebrow'),
        cta: getStyle('.hero__cta'),
      };
    });

    console.log('=== DESKTOP STYLES ===');
    console.log(JSON.stringify(desktopStyles, null, 2));

    await page.setViewport({ width: 375, height: 812 });
    await page.goto('http://localhost:4321/new-cobuild-upgraded-website/', {
      waitUntil: 'networkidle0',
    });

    await page.screenshot({ path: 'scripts/screenshots/mobile.png', fullPage: true });

    const mobileStyles = await page.evaluate(() => {
      const getStyle = (selector) => {
        const el = document.querySelector(selector);
        if (!el) return null;
        const cs = window.getComputedStyle(el);
        return {
          fontSize: cs.fontSize,
          fontWeight: cs.fontWeight,
          lineHeight: cs.lineHeight,
          letterSpacing: cs.letterSpacing,
          maxWidth: cs.maxWidth,
        };
      };
      return {
        h1: getStyle('.hero h1'),
        lead: getStyle('.hero .lead'),
        eyebrow: getStyle('.hero__eyebrow'),
        cta: getStyle('.hero__cta'),
      };
    });

    console.log('\n=== MOBILE STYLES ===');
    console.log(JSON.stringify(mobileStyles, null, 2));

    await browser.close();
  } catch (err) {
    console.error('Error:', err.message);
  }
})();