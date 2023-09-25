import request from "supertest";
import { app } from "../../../app.js";

describe("testing pending clients controller in routes", () => {

  it("show all clients", async () => {
    const res = await request(app).get("/clients")

    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
  })

  it("create new pending", async () => {
    const pending = {
      Name: "",
      Value: "",
      Pending: false
    }

    const res = await request(app).post("/clients")
      .send(pending)

    expect(res.status).toBe(201)
    expect(res.body).toBeInstanceOf(Object)
  })

  it("update existing pending", async () => {
    const pending = {
      Name: "",
      Value: "",
      Pending: false
    }

    const res = await request(app).put("/clients/:id")
      .send(pending)

    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Object)
  })

  it("delete existing pending", async () => {
    const res = await request(app).delete("/clients/:id")

    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
  })
})
