import { Clients } from "../../models/pendingClients/index.js";

export async function getPendingClients(req, res) {
  return await Clients.findAll().then((result) => {
    res.status(200).json(result)
  })
}

export async function addPendingClients(req, res) {
  try {
    await Clients.create({
      Name: req.body.Name,
      Value: req.body.Value,
      Pending: req.body.Pending,
    })

      .then((result) => { res.status(201).json(result) })

  } catch (error) {
    res.status(500).json({
      message: "error when creating"
    })
  }
}

export async function updatePendingClients(req, res) {
  try {
    const pending = await Clients.findByPk(req.params.id)

    if (pending) {
      await Clients.update({
        Name: req.body.Name,
        Value: req.body.Value,
        Pending: req.body.Pending,
      }, {
        where: {
          id: req.params.id
        }
      })

      return Clients.findByPk(req.params.id)
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

export async function deletePendingClients(req, res) {
  try {
    const peding = Clients.findByPk(req.params.id)

    if (peding) {
      await Clients.destroy({
        where: {
          id: req.params.id
        }
      })

      return Clients.findAll().then((result) => {
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