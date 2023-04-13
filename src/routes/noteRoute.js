const express = require("express");
const { getNote, createNote, deleteNote, updateNote } = require("../controllers/notesController");
const auth = require("../middlewares/auth");
const noteRouter = express.Router();



noteRouter.get("/get/",auth,getNote);

noteRouter.post("/create/",auth,createNote); 

noteRouter.delete("/delete/:id",auth,deleteNote);

noteRouter.put("/update/:id",auth,updateNote);

module.exports = noteRouter;