"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productosController_1 = require("../controllers/productosController");
const jwtMiddleware_1 = require("../middlewares/jwtMiddleware");
const router = express_1.default.Router();
router.get('/productos', jwtMiddleware_1.verificarJWT, productosController_1.obtenerProductos);
router.post('/productos', jwtMiddleware_1.verificarJWT, productosController_1.crearProducto);
router.put('/productos/:handle', jwtMiddleware_1.verificarJWT, productosController_1.actualizarProducto);
router.delete('/productos/:handle', jwtMiddleware_1.verificarJWT, productosController_1.eliminarProducto);
exports.default = router;
