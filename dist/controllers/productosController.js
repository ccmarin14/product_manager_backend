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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarProducto = exports.actualizarProducto = exports.crearProducto = exports.obtenerProductos = void 0;
const Producto_1 = __importDefault(require("../models/Producto"));
const obtenerProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productos = yield Producto_1.default.findAll();
        res.json(productos);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
});
exports.obtenerProductos = obtenerProductos;
const crearProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const producto = yield Producto_1.default.create(req.body);
        res.status(201).json(producto);
    }
    catch (error) {
        res.status(400).json({ error: 'Error al crear el producto' });
    }
});
exports.crearProducto = crearProducto;
const actualizarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const handle = req.params.handle;
        const producto = yield Producto_1.default.findByPk(handle);
        if (producto) {
            yield producto.update(req.body);
            res.json(producto);
        }
        else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    }
    catch (error) {
        res.status(400).json({ error: 'Error al actualizar el producto' });
    }
});
exports.actualizarProducto = actualizarProducto;
const eliminarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const handle = req.params.handle;
        const producto = yield Producto_1.default.findByPk(handle);
        if (producto) {
            yield producto.destroy();
            res.status(204).send();
        }
        else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
});
exports.eliminarProducto = eliminarProducto;
