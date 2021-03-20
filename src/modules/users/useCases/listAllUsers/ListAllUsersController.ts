import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    try {
      const users = this.listAllUsersUseCase.execute({
        user_id: user_id.toString(),
      });

      return response.json(users);
    } catch (error) {
      return response.status(error.name).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
