import { Request, Response } from 'express'

import User from '../schemas/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()

    return res.json(users)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.json(user)
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    try {
      
      const userExist = await User.find({ _id: req.params.id })

      if (userExist) {
        await User.deleteOne({ _id: req.params.id })   
        return res.status(200).send()
      } else {
        console.log('user doesnt exist')
        return res.status(200).send()
      }         
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'unexpected error'
      })
    }    
  }
}

export default new UserController()