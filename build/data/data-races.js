"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
const utils_1 = require("../lib/utils");
class RacesData extends data_source_1.F1 {
    constructor() {
        super();
    }
    getYear(year) {
        return __awaiter(this, void 0, void 0, function* () {
            year = utils_1.checkYear(year);
            return yield this.get(`${year}.json`, {
                cacheOptions: { ttl: 60 }
            });
        });
    }
    getYearRound(year, round) {
        return __awaiter(this, void 0, void 0, function* () {
            year = utils_1.checkYear(year);
            round = utils_1.roundCheck(round);
            return yield this.get(`${year}/${round}.json`, {
                cacheOptions: { ttl: 60 }
            });
        });
    }
}
exports.RacesData = RacesData;
