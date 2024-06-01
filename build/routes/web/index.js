"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const node_path_1 = require("node:path");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.status(200).sendFile((0, node_path_1.join)(__dirname, '..', '..', '..', 'public', 'index.html'));
});
exports.default = router;
