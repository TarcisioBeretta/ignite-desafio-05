import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      const error = new Error("User not found!");
      error.name = "400";
      throw error;
    }

    if (!user.admin) {
      const error = new Error("User not allowed!");
      error.name = "400";
      throw error;
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
