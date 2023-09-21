import { Suppliers } from "../../models/pendingSuppliers/index.js";

export async function getPendingSuppliers(req, res) {
  return await Suppliers.findAll().then((result) => {
    res.status(200).json(result)
  })
}

export async function addPendingSuppliers(req, res) {
  try {
    await Suppliers.create({
      Name: req.body.Name,
      Value: req.body.Value,
      Pending: req.body.Pending,
    })

      .then((result) => { res.status(201).json(result) })

  } catch (error) {
    return res.status(500).json({
      message: "error when creating"
    })
  }
}

export async function updatePendingSuppliers(req, res) {
  try {
    const pending = await Suppliers.findByPk(req.params.id)

    if (pending) {
      await Suppliers.update({
        Name: req.body.Name,
        Value: req.body.Value,
        Pending: req.body.Pending,
      }, {
        where: {
          id: req.params.id
        }
      })

      return Suppliers.findByPk(req.params.id)
        .then((result) => { res.status(200).json(result) })
    }

    return res.status(404).json({
      message: "peding not exists"
    })

  } catch (error) {
    res.status(500).json({
      message: "error when updated pending"
    })
  }
}

export async function deletePendingSuppliers(req, res) {
  try {
    const pending = await Suppliers.findByPk(req.params.id)

    if (pending) {
      await Suppliers.destroy({
        where: {
          id: req.params.id
        }
      })

      return Suppliers.findAll().then((result) => {
        res.status(200).json(result)
      })
    }

    return res.status(404).json({
      message: "peding not exists"
    })

  } catch (error) {
    res.status(500).json({
      message: "error when deleted pending"
    })
  }
}
