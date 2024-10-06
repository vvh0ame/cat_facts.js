class CatFacts {
	constructor() {
		this.api = "https://cat-fact.herokuapp.com"
		this.headers = {
			"Accept": "application/json",
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36"
		}
	}

	async getRandomFact(animalType = "cat", amount = 1) {
		const response = await fetch(
			`${this.api}/facts/random?animal_type=${animalType}&amount=${amount}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getQueuedFacts(animalType = "cat") {
		const response = await fetch(
			`${this.api}/facts/me?animal_type=${animalType}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getFact(factId) {
		const response = await fetch(
			`${this.api}/facts/${factId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {CatFacts}
