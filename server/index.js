const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
async function scrape() {
  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();
  await page.goto("https://leetcode.com/contest/weekly-contest-362/");

  await page.waitForSelector(".contest-question-list");
  // Get page data
  const data = await page.evaluate(() => {
    const problems = document.querySelectorAll(".contest-question-list li a");
    return Array.from(problems, (problem) => ({
      title: problem.textContent,
      link: "https://leetcode.com" + problem.getAttribute("href"),
    }));
  });
  console.log(data);
  await browser.close();
}

scrape();
