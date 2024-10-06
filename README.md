# cat_facts.js
Web-API for [alexwohlbruck.github.io/cat-facts](https://alexwohlbruck.github.io/cat-facts) website to retrieve cat facts

## Example
```JavaScript
async function main() {
	const { CatFacts } = require("./cat_facts.js")
	const catFacts = new CatFacts()
	const randomFact = await catFacts.getRandomFact()
	console.log(randomFact)
}

main()
```

