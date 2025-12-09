
import mongoose from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"
const conatctSchema = mongoose.Schema({
    first_name:{
        type: String
    },
    last_name:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: String
    },
    address:{
        type: String
    }
})
conatctSchema.plugin(mongoosePaginate)

const contact = mongoose.model("Contact", conatctSchema)

export default contact