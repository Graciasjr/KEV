migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("umdooomwx38dzy5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ikuypbk3",
    "name": "randomColor",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("umdooomwx38dzy5")

  // remove
  collection.schema.removeField("ikuypbk3")

  return dao.saveCollection(collection)
})
