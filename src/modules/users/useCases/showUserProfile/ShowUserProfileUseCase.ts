import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      const error = new Error("User not found!");
      error.name = "404";
      throw error;
    }

    return user;
  }
}

export { ShowUserProfileUseCase };
