import { Router } from "express";

import { itensRoutes } from "./item.routes";

const routes = Router();

routes.use("/itens", itensRoutes);

export { routes };