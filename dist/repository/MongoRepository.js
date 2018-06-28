"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
// third party imports
var mongodb_1 = require("mongodb");
var MongoRepository = /** @class */ (function () {
    function MongoRepository() {
        var _this = this;
        this.connectAsync = function () { return __awaiter(_this, void 0, void 0, function () {
            var client, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, mongodb_1.MongoClient.connect(
                            // the url
                            process.env.CfmDbUrl, 
                            // options
                            {
                                // auth settings
                                auth: {
                                    user: process.env.DbUser,
                                    password: process.env.DbPass
                                }
                            })];
                    case 1:
                        client = _a.sent();
                        // set this.client = the client we just opened.
                        this.client = client;
                        // return the database
                        return [2 /*return*/, client.db(process.env.CfmDb)];
                    case 2:
                        err_1 = _a.sent();
                        throw err_1;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getCollectionAsync = function (collectionName) { return __awaiter(_this, void 0, void 0, function () {
            var client, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connectAsync()];
                    case 1:
                        client = _a.sent();
                        return [2 /*return*/, client.collection(collectionName)];
                    case 2:
                        err_2 = _a.sent();
                        throw err_2;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.close = function () {
            _this.client.close();
        };
        this.findAsync = function (collectionName, query) { return __awaiter(_this, void 0, void 0, function () {
            var collection, data, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getCollectionAsync(collectionName)];
                    case 1:
                        collection = _a.sent();
                        // if query is undefined, we should set it to a enpty object
                        query = query || {};
                        return [4 /*yield*/, collection.find(query).toArray()];
                    case 2:
                        data = _a.sent();
                        data.forEach(function (item) { return delete item._id; });
                        return [2 /*return*/, data];
                    case 3:
                        err_3 = _a.sent();
                        throw err_3;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.insertAsync = function (collectionName, data) { return __awaiter(_this, void 0, void 0, function () {
            var item, collection, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.findAsync(collectionName, { id: data.id })];
                    case 1:
                        item = _a.sent();
                        if (item || item.length > 0)
                            // the item exists, so throw an exception
                            throw ("\n                There is already an item with the id of " + data.id + "\n                in the collection " + collectionName + ".  It is " + JSON.stringify(item) + ".");
                        return [4 /*yield*/, this.getCollectionAsync(collectionName)];
                    case 2:
                        collection = _a.sent();
                        // insert the new item
                        return [4 /*yield*/, collection.insertOne(data)];
                    case 3:
                        // insert the new item
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_4 = _a.sent();
                        throw err_4;
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.updateAsync = function (collectionName, data) { return __awaiter(_this, void 0, void 0, function () {
            var collection, result, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getCollectionAsync(collectionName)];
                    case 1:
                        collection = _a.sent();
                        return [4 /*yield*/, collection.updateOne({ id: data.id }, data)];
                    case 2:
                        result = _a.sent();
                        // if we couldn't find an item or we didn't modify an item, throw an error
                        if (result.matchedCount === 0 || result.modifiedCount === 0) {
                            // throw the error that we coudln't find an item
                            throw ("\n                An item with the id of " + data.id + " does not exist in the collection\n                " + collectionName + ".  To update an item one must exist in the collection.");
                        }
                        // return the result
                        return [2 /*return*/, result];
                    case 3:
                        err_5 = _a.sent();
                        throw err_5;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.deleteAsync = function (collectionName, id) { return __awaiter(_this, void 0, void 0, function () {
            var collection, result, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getCollectionAsync(collectionName)];
                    case 1:
                        collection = _a.sent();
                        return [4 /*yield*/, collection.deleteOne({ id: id })];
                    case 2:
                        result = _a.sent();
                        // if we couldn't find an item or we didn't modify an item, throw an error
                        if (result.connection === 0) {
                            // throw the error that we coudln't find an item
                            throw ("\n                An item with the id of " + id + " does not exist in the collection\n                " + collectionName + ".  To update an item one must exist in the collection.");
                        }
                        // return the result
                        return [2 /*return*/, result];
                    case 3:
                        err_6 = _a.sent();
                        throw err_6;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
    }
    return MongoRepository;
}());
exports.MongoRepository = MongoRepository;
//# sourceMappingURL=MongoRepository.js.map