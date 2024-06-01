"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminService_1 = require("../../http/services/adminService");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send([
        {
            name: "abdullah"
        }
    ]);
});
router.post('/', adminService_1.createAdmin);
exports.default = router;
