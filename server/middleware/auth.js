import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const isCustomAuth = token.length < 500

    let decodedData

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, process.env.JWT_KEY)

      req.userId = decodedData?.id
    } else {
      // if using Google Auth
    }

    next()
  } catch (error) {
    console.log(error)
  }
}

export default auth