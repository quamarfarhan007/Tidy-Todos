import jwt, { decode } from "jsonwebtoken"


export function authorize (req,res,next){
    
try {
        const authHeader=req.headers.authorization
        if (!authHeader){return res.status(400).json({message:"no auth header"})}
        const authToken = authHeader.split(" ")[1]
    
        const decoded = jwt.verify(authToken,process.env.jwtsecret_user)
        if (decoded){
            req.userId=decoded.id
            console.log(decoded)
            next()
        }
        else{
            return res.status(400).json({message:"you are not authorized"})
        }
} catch (error) {
    return res.status(400).json({message:"invalid or expired token"})
}
}