import { absolutePath } from "swagger-ui-dist"
import express from "express"

export default function swaggerConnect(){
  const app = express()

  app.use(express.static(absolutePath()))

  app.get("*", (req, res) => {
    res.send("aaa")
  })

  app.listen(3401, () => [
    console.log("swagger")
  ])
}
