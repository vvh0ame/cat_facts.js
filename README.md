# cat_facts.py
Web-API for [alexwohlbruck.github.io/cat-facts](https://alexwohlbruck.github.io/cat-facts) website to retrieve cat facts

## Example
```python
import cat_facts
cat_facts = cat_facts.CatFacts()
random_fact = cat_facts.get_random_fact()
print(random_fact)
```
