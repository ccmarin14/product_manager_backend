"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const productosRoutes_1 = __importDefault(require("./routes/productosRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const swagger_1 = __importDefault(require("./config/swagger"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Middlewares
app.use(body_parser_1.default.json());
// Rutas
app.use('/productos', productosRoutes_1.default);
app.use('/usuarios', usuariosRoutes_1.default);
(0, swagger_1.default)(app);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
