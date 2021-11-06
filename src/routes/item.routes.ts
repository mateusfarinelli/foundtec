import { Router } from "express";
import { CreateItemController } from "../modules/item/useCases/createItem/CreateItemController";
import { ListItensController } from "../modules/item/useCases/listItens/ListItensController";

const itensRoutes = Router();

const createItemController = new CreateItemController();
itensRoutes.post("/", createItemController.handle);

const listItensController = new ListItensController();
itensRoutes.get("/", listItensController.handle);

export { itensRoutes };