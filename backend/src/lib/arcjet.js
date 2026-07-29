import arcjet,{tokenBucket,shield,detectBot} from "@arcjet/node"
import "dotenv/config"

export const aj=arcjet({
    key:process.env.ARCJET_KEY,
    characteristics:["ip.source"]
})