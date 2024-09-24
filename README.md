# glance_project
Discover and shop fashion easily with Glance, your AI-powered personal shopper that curates a personalized catalog of clothes and accessories tailored to your unique style and needs.

## Install packages
To install the necessary dependencies, simply run this in your terminal:
```shell
pip install -r requirements.txt
```

## Run scraper
To run the scraper, run this:
```shell
python scraper/scraper.py
```

This will retrieve the URLs of all available items of the Asos store.

Exemple de page d'article:
[New Look Chemise Moulante en Popeline Kaki Clair](https://www.asos.com/fr/new-look/new-look-chemise-moulante-en-popeline-kaki-clair/prd/204740601#colourWayId-204740602)

## Data to retrieve
- Marque
- Couleurs
- Prix
- Tailles
- Matières
- Catégorie d'article (pull, t-shirt, chaussure, pantalon, lunettes, chapeau, etc...)

One analytical DB (MongoDB)
One vectorial DB (Milvus)

Data Schema in analytical DB:

```Javascript
{
  "title": "String",
  "brand": "String",
  "price": "Number",
  "category": "String",
  "materials": "List[String]",
  "description": "String",
  "instructions": "String",
  "variants": [
    {
      "color": "String",
      "sizes": "List[String]",
      "available": "Boolean"
    }
  ]
}
```
