const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
async function scrape() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();
  await page.goto("https://leetcode.com/contest/weekly-contest-362/");

  await page.waitForSelector(".contest-question-list");
  // Get page data
  const data = await page.evaluate(() => {
    const problems = document.querySelector(".contest-question-list").innerHTML;
    return problems;
  });
  const $ = cheerio.load(data);
  const problems = $("li a").text();
  console.log(problems);
  await browser.close();
}

scrape();
