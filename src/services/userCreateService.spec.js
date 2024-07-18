const UserCreateService = require("./UserCreateService");
const UserRepositoryInMemory = require("./UserRepositoryInMemory")

describe("UserCreateService", () => {
  it("user should be create", async () => {
    const user = {
      name: "User Test",
      email: "user@test.com",
      password: "123",
    };
  
    const userRepositoryInMemory = new UserRepositoryInMemory()
    const userCreateService = new UserCreateService(userRepositoryInMemory);
    const userCreated = await userCreateService.execute(user)
  
    console.log(userCreated)
  
    expect(userCreated).toHaveProperty("id")
  });


  it("another test", () => {
    expect(1).toBe(1)
  });
})

// O ideal é ter um "describe" por arquivo. Aqui tem 2 por questão de exemplo. 
describe("NotesCreateService", () => {
  it("create notes",  async () => {
    expect(1).toBe(1)
  })
})