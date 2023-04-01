"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUpdate = exports.handleDel = exports.handleGet = exports.handlePost = void 0;
var todos_1 = require("../../models/todos");
var todos = [];
//post request
var handlePost = function (req, res, next) {
    // type casting in two ways
    var text = req.body.text;
    var id = req.body.id;
    var newTodo = new todos_1.Todo(id, text);
    todos.push(newTodo);
    res.send({ message: "created todo", todo: newTodo });
    next();
};
exports.handlePost = handlePost;
//get request
var handleGet = function (req, res, next) {
    res.send({ message: "all todos", todos: todos });
    next();
};
exports.handleGet = handleGet;
// delete request 
var handleDel = function (req, res, next) {
    var id = req.params.id;
    var data = todos.filter(function (items) {
        return items.id !== id;
    });
    res.send({ message: "deleted todo", data: data });
    next();
};
exports.handleDel = handleDel;
//update req
var handleUpdate = function (req, res, next) {
    var idParams = req.params.id;
    var id = req.body.id;
    var text = req.body.text;
    var data = todos.filter(function (items) {
        return items.id === idParams ? items.text = text : "";
    });
    res.send({ message: "updated todo", data: data });
    next();
};
exports.handleUpdate = handleUpdate;
