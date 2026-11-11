const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://karthikeyapodicheti.github.io/new-cobuild-upgraded-website/', {
    waitUntil: 'networkidle0',
  });

  // Get all stylesheets content
  const styles = await page.evaluate(() => {
    const sheets = [];
    for (const sheet of document.styleSheets) {
      try {
        if (sheet.cssRules) {
          const rules = Array.from(sheet.cssRules)
            .map(r => r.cssText)
            .join('\n');
          sheets.push(rules);
        }
      } catch (e) {
        // Cross-origin sheet, skip
      }
    }
    return sheets.join('\n');
  });

  // Extract hero h1 related rules
  console.log('=== ORIGINAL hero h1 STYLES ===');
  const h1Matches = styles.match(/\.hero h1\s*\{[^}]+\}/g) || [];
  h1Matches.forEach((m, i) => console.log(`Rule ${i + 1}: ${m.substring(0, 300)}`));

  // Extract lead/p styles
  console.log('\n=== ORIGINAL .hero .lead STYLES ===');
  const leadMatches = styles.match(/\.hero .lead\s*\{[^}]+\}/g) || [];
  leadMatches.forEach((m, i) => console.log(`Rule ${i + 1}: ${m.substring(0, 300)}`));

  // Extract eyebrow styles
  console.log('\n=== ORIGINAL .hero__eyebrow STYLES ===');
  const eyebrowMatches = styles.match(/\.hero__eyebrow\s*\{[^}]+\}/g) || [];
  eyebrowMatches.forEach((m, i) => console.log(`Rule ${i + 1}: ${m.substring(0, 300)}`));

  // Extract CTA button styles
  console.log('\n=== ORIGINAL .hero__cta STYLES ===');
  const ctaMatches = styles.match(/\.hero__cta\s*\{[^}]+\}/g) || [];
  ctaMatches.forEach((m, i) => console.log(`Rule ${i + 1}: ${m.substring(0, 300)}`));

  await browser.close();
})();