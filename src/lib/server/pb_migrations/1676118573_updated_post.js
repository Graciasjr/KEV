migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("umdooomwx38dzy5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tcuu2hq5",
    "name": "postcategorie",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "santé",
        "chrétienneté",
        "cuisine"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("umdooomwx38dzy5")

  // remove
  collection.schema.removeField("tcuu2hq5")

  return dao.saveCollection(collection)
})
