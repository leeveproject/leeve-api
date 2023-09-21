import { Products } from "../../models/products/index.js";

export async function getProducts(req, res) {
  return await Products.findAll().then((result) => {
    res.status(200).json(result)
  })
}

export async function addProducts(req, res) {
  try {
    await Products.create({
      Name: req.body.Name,
      Supplier: req.body.Supplier,
      Type: req.body.Type,
      Buydate: req.body.Buydate,
      Duedate: req.body.Duedate,
    })

      .then((result) => { res.status(201).json(result) })

  } catch (error) {
    return res.status(500).json({
      message: "error when creating product"
    })
  }
}

export async function updateProducts(req, res) {
  try {
    const product = await Products.findByPk(req.params.id)

    if (product) {
      await Products.update({
        Name: req.body.Name,
        Supplier: req.body.Supplier,
        Type: req.body.Type,
        Buydate: req.body.Buydate,
        Duedate: req.body.Duedate,
      }, {
        where: {
          id: req.params.id
        }
      })

      return Products.findByPk(req.params.id)
        .then((result) => { res.status(200).json(result) })
    }

    return res.status(404).json({
      message: "user not exist"
    })


  } catch (error) {
    return res.status(500).json({
      message: "error when updated product"
    })
  }
}

export async function deleteProducts(req, res) {
  try {
    const product = await Products.findByPk(req.params.id);

    if (product) {
      await Products.destroy({
        where: {
          id: req.params.id
        }
      });

      return Products.findAll().then((result) => {
        res.status(200).json(result)
      })
    }

    return res.status(404).json({
      message: "product not exist"
    })


  } catch (error) {
    return res.status(500).json({
      message: "error when deleted product"
    })
  }
}