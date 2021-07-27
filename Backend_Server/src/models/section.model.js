const {Schema,model}=require("mongoose");

const sectionSchema=new Schema(
    {
        name:{type:String,required:true,unique:true},
    },
    {
        timestamps:true,
        versionKey:false,
    }
)


module.exports = model("section", sectionSchema);
