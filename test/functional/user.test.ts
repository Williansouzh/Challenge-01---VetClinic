import { User } from "@src/database/models/user";

describe("Users functional tests", () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });
  describe("When creating a new user", () => {
    it("should return 200", async () => {
      const response = await global.testRequest.get("/users");
      expect(response.status).toBe(200);
    });
    it("should successfully create a new user", async () => {
      const newUser = {
        name: "John Doe",
        email: "john@mail.com",
        birth: "25-10-2024",
        password: "1234",
      };
      const response = await global.testRequest.post("/users").send(newUser);
      expect(response.status).toBe(201);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...expectedUser } = response.body;
      expect(response.body).toEqual(expect.objectContaining(expectedUser));
    });
  });
});
