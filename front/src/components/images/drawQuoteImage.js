const { createCanvas } = require("canvas");
const fs = require("fs");

const temp= "temp";

const width = 600;
const height = 1200;

const canvas = createCanvas(width, height);
const context = canvas.getContext("2d");

context.fillStyle = "#FFF";
context.fillRect(0, 0, width, height);

const buffer = canvas.toBuffer("image/png");
fs.writeFileSync("./test.png", buffer);
