const mongoose = require("mongoose")
const validator = require("validator")
const studentSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required:true,
            minlength:3
        },
        email:{
            type:String,
            required:true,
            unique: ["true","email is already present"],
            validate(val)
            {
                if(!validator.isEmail(val))
                {
                    throw new Error("invalid mail")
                }

            }
        },
        phone:{
            type:Number,
            min:10,
           
            required:true,
            unique:true
        }
    }
)
//we will create new collection using model
     // capital/singular form
const Student = new mongoose.model('Student',studentSchema);

module.exports = Student