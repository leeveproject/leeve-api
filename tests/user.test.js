import request from "supertest";
import { app } from "../app.js";

describe("testing users controller in routes", () => {

  it("show all users", async () => {
    const res = await request(app).get("/users")

    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
  })

  it("create new user", async () => {
    const user = {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      Company: "",
      Size: ""
    }

    const res = await request(app).post("/users")
      .send(user)

    expect(res.status).toBe(201)
    expect(res.body).toBeInstanceOf(Object)
  })

  it("update existing user", async () => {
    const user = {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      Company: "",
      Size: ""
    }

    const res = await request(app).put("/users/:id")
      .send(user)

    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Object)
  })

  it("delete existing user", async () => {
    const res = await request(app).delete("/users/:id")

    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
  })
})