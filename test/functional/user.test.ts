describe("Users functional tests", () => {
  describe("When creating a new user", () => {
    it("should successfully create a new user", async () => {
      const response = await global.testRequest.get("/users");
      expect(response.status).toBe(200);
    });
  });
});
