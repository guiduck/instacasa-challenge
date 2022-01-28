import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  name?: String,
  email?: String,
  username?: String,
  phone?: String,
}

const userSchema = new Schema({
  name: String,
  email: String,
  username: String,
  phone: String,
}, {
  timestamps: true
})

export default model<UserInterface>('user', userSchema)