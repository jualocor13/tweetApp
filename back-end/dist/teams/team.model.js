"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamSchema = void 0;
const mongoose = require("mongoose");
exports.TeamSchema = new mongoose.Schema({
    title: { type: String, required: true },
    msg: { type: String, required: true },
    owner: { type: mongoose.Types.ObjectId, ref: 'User' },
});
//# sourceMappingURL=team.model.js.map