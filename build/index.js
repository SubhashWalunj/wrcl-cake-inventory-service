"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cake_controller_1 = require("./controllers/cake.controller");
var app = express_1.default();
var cakeController = new cake_controller_1.CakeController();
app.get('/cake-list', cakeController.getAllCakes);
app.get('/get-cake-by-id/:id', cakeController.getCakeById);
app.get('/add-cake', cakeController.addNewCake);
app.put('/update-cake', cakeController.updateById);
app.delete('/delete-cake/:id', cakeController.deleteById);
var port = process.env.PORT || 3100;
app.listen(port, function () {
    console.log("App listening on port " + port);
});
//# sourceMappingURL=index.js.map