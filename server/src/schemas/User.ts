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

// Duplicate the ID field.
userSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
userSchema.set('toJSON', {
  virtuals: true
});

//needed to see virtuals in output when using console.log
userSchema.set('toObject', { virtuals: true })

export default model<UserInterface>('user', userSchema)