import { Response, Request } from "express";
import { container } from "tsyringe";
import { CreateItemUseCase } from "./CreateItemUseCase";

class CreateItemController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, descricao, email, telefone } = request.body;
    const createItemUseCase = container.resolve(CreateItemUseCase);

    await createItemUseCase.execute({ nome, descricao, email, telefone });

    return response.status(201).send();
  }
}

export { CreateItemController };