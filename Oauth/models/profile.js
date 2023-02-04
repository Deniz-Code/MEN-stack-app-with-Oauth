import mongoose from "mongoose"

const Schema = mongoose.Schema

const profileSchema = new Schema(
  {
    name: String,
    avatar: String,
    
    bux: { type: Number, min: 0, default: 0 },
    achievements: [{ type: Schema.Types.ObjectId, ref: "Achievement" }],
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
)

const Profile = mongoose.model("Profile", profileSchema)

export { Profile }
