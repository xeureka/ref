"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var v4_1 = require("zod/v4");
var Player = v4_1.z.object({
    username: v4_1.z.string(),
    xp: v4_1.z.number()
});
var player = { username: 'billie', xp: 123 };
console.log(player);
