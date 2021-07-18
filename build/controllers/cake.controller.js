"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CakeController = void 0;
var cake_service_1 = require("../services/cake.service");
var CakeController = /** @class */ (function () {
    function CakeController() {
        this.cakeService = new cake_service_1.CakeService();
    }
    /**
     * Controller function to get list of cakes
     * @param req
     * @param res
     */
    CakeController.prototype.getAllCakes = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var cakes, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.cakeService.getAllCakes()];
                    case 1:
                        cakes = _a.sent();
                        res.status(200).send(cakes);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        res.status(500).send("Error while fetching the list of cakes");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Controller function get a cake by id
     * @param req
     * @param res
     */
    CakeController.prototype.getCakeById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var cakeId, cake, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!req.params.id) return [3 /*break*/, 2];
                        cakeId = parseInt(req.params.id);
                        return [4 /*yield*/, this.cakeService.getCakeById(cakeId)];
                    case 1:
                        cake = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        res.status(400).send('Invalid id supplied');
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        res.status(500).send("Error while fetching the cake by id=" + req.params.id);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Controller function to add a new cake
     * @param req
     * @param res
     */
    CakeController.prototype.addNewCake = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var addResult, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!req.body.newCakeDetails) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cakeService.addNewCake(req.body.newCakeDetails)];
                    case 1:
                        addResult = _a.sent();
                        res.status(200).send(addResult);
                        return [3 /*break*/, 3];
                    case 2:
                        res.status(400).send('Invalid input supplied');
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        e_3 = _a.sent();
                        res.status(500).send("Error while updating the cake details");
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Controller function to update cake details
     * @param req
     * @param res
     */
    CakeController.prototype.updateById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var updateResult, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!req.body.newCakeDetails) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cakeService.updateCakeDetails(req.body.newCakeDetails)];
                    case 1:
                        updateResult = _a.sent();
                        if (updateResult) {
                            res.status(200).send('Details updated successfully');
                        }
                        else {
                            res.status(400).send('Supplied cake id is not present to update');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        res.status(400).send('Invalid input supplied');
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        e_4 = _a.sent();
                        res.status(500).send("Error while updating the cake details");
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Controller function to delete a cake
     * @param req
     * @param res
     */
    CakeController.prototype.deleteById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var cakeId, deleteResult, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!req.params.id) return [3 /*break*/, 2];
                        cakeId = parseInt(req.params.id);
                        return [4 /*yield*/, this.cakeService.deleteCake(cakeId)];
                    case 1:
                        deleteResult = _a.sent();
                        if (deleteResult) {
                            res.status(200).send('Deleted successfully');
                        }
                        else {
                            res.status(400).send('Supplied cake id is not present to delete');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        res.status(400).send('Invalid input supplied');
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        e_5 = _a.sent();
                        res.status(500).send("Error while updating the cake details");
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return CakeController;
}());
exports.CakeController = CakeController;
//# sourceMappingURL=cake.controller.js.map