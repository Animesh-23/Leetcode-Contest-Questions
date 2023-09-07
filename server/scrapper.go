package main

import "fmt"
import "github.com/gocolly/colly"

func main() {
    // Create a new collector
    c := colly.NewCollector()

    // Visit the target website
    c.Visit("https://leetcode.com/contest/weekly-contest-361/")
	fmt.Println(c)
    // Find the product names
    c.OnHTML(".list-group-item", func(e *colly.HTMLElement) {
        fmt.Println(e.Text + "\n")
    })

    // Run the collector
    c.Wait()
}