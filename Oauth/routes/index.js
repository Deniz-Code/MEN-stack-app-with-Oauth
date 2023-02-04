import { Router } from "express"
import { Profile } from "../models/profile.js"
const router = Router()

router.get("/", function (req, res) {
  Profile.find({}).then((profiles) => {
    res.render("index", { title: "Home Page", profiles })
  })
})

export { router }
