import request from "supertest";
import { app } from "../../app.js";

describe("testing product controller in routes", () => {

  it("show all products", async () => {
    const res = await request(app).get("/products")

    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
  })

  it("create new product", async () => {
    const product = {
      Name: "",
      Supplier: "",
      Type: "",
      Buydate: 0,
      Duedate: 0
    }

    const res = await request(app).post("/products")
      .send(product)

    expect(res.status).toBe(201)
    expect(res.body).toBeInstanceOf(Object)
  })

  it("update existing product", async () => {
    const product = {
      Name: "",
      Supplier: "",
      Type: "",
      Buydate: 0,
      Duedate: 0
    }

    const res = await request(app).put("/products/:id")
      .send(product)

    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Object)
  })

  it("delete existing product", async () => {
    const res = await request(app).delete("/products/:id")

    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
  })
})