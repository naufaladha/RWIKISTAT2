import mongoose from 'mongoose'

const RwikistatSchema = new mongoose.Schema({
  name: String,
  email: String
})

export default mongoose.model('RwikistatCollection', RwikistatSchema)