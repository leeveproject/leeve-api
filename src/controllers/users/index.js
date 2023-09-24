import bcript from "bcrypt";
import { Users } from "../../models/users/index.js";

export async function getUsers(req, res) {
  return await Users.findAll().then((result) => {
    res.status(200).json(result)
  })
}

export async function addUsers(req, res) {
  try {
    const hashedPassword = await bcript.hash(req.body.Password, 10)

    await Users.create({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Email: req.body.Email,
      Password: hashedPassword,
      Company: req.body.Company,
      Size: req.body.Size
    })

      .then((result) => { res.status(201).json(result) })

  } catch (error) {
    res.status(500).json({
      message: "error when creating"
    })
  }

}

export async function updateUsers(req, res) {
  try {
    const user = await Users.findByPk(req.params.id)

    if (user) {
      await Users.update({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Company: req.body.Company,
        Size: req.body.Size
      }, {
        where: {
          id: req.params.id
        }
      })

      return Users.findByPk(req.params.id)
        .then((result) => { res.status(200).json(result) })

    }

    return res.status(404).json({
      message: "user not exists"
    })


  } catch (error) {
    res.status(500).json({
      message: "error when updated"
    })
  }
}

export async function deleteUsers(req, res) {
  try {
    const user = await Users.findByPk(req.params.id)

    if (user) {
      await Users.destroy({
        where: {
          id: req.params.id
        }
      })

      return Users.findAll().then((result) => {
        res.status(200).json(result)
      })

    }

    return res.status(404).json({
      message: "user not exists"
    })


  } catch (error) {
    res.status(500).json({
      message: "error when deleted"
    })
  }
}
