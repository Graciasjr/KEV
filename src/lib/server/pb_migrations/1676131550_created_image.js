migrate((db) => {
  const collection = new Collection({
    "id": "lbouwy34q494pjz",
    "created": "2023-02-11 16:05:49.995Z",
    "updated": "2023-02-11 16:05:49.995Z",
    "name": "image",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4e62gukp",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lbouwy34q494pjz");

  return dao.deleteCollection(collection);
})
