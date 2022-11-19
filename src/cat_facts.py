from requests import get

class CatFacts:
	def __init__(self) -> None:
		self.api = "https://cat-fact.herokuapp.com"
		self.headers = {
			"accept": "application/json",
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36"
		}

	def get_random_fact(
			self,
			animal_type: str = "cat",
			amount: int = 1) -> dict:
		return get(
			f"{self.api}/facts/random?animal_type={animal_type}&amount={amount}",
			headers=self.headers).json()


	def get_fact_by_id(self, fact_id: str) -> dict:
		return get(
			f"{self.api}/facts/{fact_id}",
			headers=self.headers).json()

	def get_queued_facts(self, animal_type: str = "cat") -> dict:
		return get(
			f"{self.api}/facts/me?animal_type={animal_type}",
			headers=self.headers).json()
