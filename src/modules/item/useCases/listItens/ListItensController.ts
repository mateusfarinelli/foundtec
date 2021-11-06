import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListItensUseCase } from "./ListItensUseCase";

class ListItensController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listItensUseCase = container.resolve(ListItensUseCase);
    const itens = await listItensUseCase.execute();

    return response.json(itens);

  }

}

export { ListItensController };