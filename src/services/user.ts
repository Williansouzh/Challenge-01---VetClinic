import { User } from "@src/database/models/user";
import { IUser } from "@src/interfaces/IUser";
import { ApiError } from "@src/utils/api-error";

export class UserService {
  public async getAllUsers(): Promise<User[]> {
    const users = await User.find();
    return users;
  }

  public async createNewUser(payload: IUser): Promise<User> {
    if (
      !payload.name ||
      !payload.email ||
      !payload.password ||
      !payload.birth
    ) {
      throw new ApiError(
        "Name, email, password, and birth are required",
        500,
        "Internal error",
        "Create user data"
      );
    }

    const user = new User(payload);
    const newUser = await user.save();
    return newUser;
  }
}
