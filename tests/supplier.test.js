import request from "supertest";
import { app } from "../app.js";

describe("testing pending suppliers controller in routes", () => {

  it("show all suppliers", async () => {
    const res = await request(app).get("/suppliers")

    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
  })

  it("create new supplier", async () => {
    const supplier = {
      Name: "",
      Value: "",
      Pending: false
    }

    const res = await request(app).post("/suppliers")
      .then(supplier)

    expect(res.status).toBe(201)
    expect(res.body).toBeInstanceOf(Object)
  })

  it("update existing supplier", async () => {
    const supplier = {
      Name: "",
      Value: "",
      Pending: false
    }

    const res = await request(app).put("/suppliers/:id")
      .then(supplier)

    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Object)
  })


  it("delete existing supplier", async () => {
    const res = await request(app).delete("/suppliers/:id")

    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
  })
})