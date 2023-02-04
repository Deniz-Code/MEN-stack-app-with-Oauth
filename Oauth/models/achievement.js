import mongoose from "mongoose"

const Schema = mongoose.Schema

const propertiesSchema = new Schema(
  {
    isLimited: Boolean,
    quantity: Number,
  },
  { timestamps: true }
)

const achievementSchema = new Schema(
  {
    name: String,
    cost: Number,
    properties: [propertiesSchema],
    desctiption: String,
  },
  { timestamps: true }
)
const Achievement=mongoose.model("Achievement",achievementSchema)

export{
  Achievement
}