"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoValidator = void 0;
var rxjs_1 = require("rxjs");
function todoValidator(todoService) {
    return function (control) {
        return todoService.checkTodoByTitle(control.value.trim())
            .pipe((0, rxjs_1.map)(function (result) {
            return result ? { 'duplicate-todo': { value: control.value } } : null;
        }));
    };
}
exports.todoValidator = todoValidator;
