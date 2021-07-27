const express=require("express")

const router=express.Router()

const Teachers=require("../models/teacher.model")

router.get("/",async(req,res)=>{
    try{
        const teachers=await Teachers.find({}).populate("classes").lean().exec()

        res.status(200).json({teachers})
    }catch(err){
        res.status(500).json({ status:"failed",err: err.message})
    }
})

// by id
router.get("./:id", async (req, res) => {

    const{id}=req.params;

  try {
    const teachers = await Teachers.findById(id).populate(["classes"]);

    res.status(201).json({ teachers: teachers });
  } catch (err) {
    res.status(500).json({ status: "failed", err: err.message });
  }
});

// to add new teachers
router.post("/new", async (req, res) => {
  const { id } = req.params;

  try {
    const newteachers = await Teachers.create(req.body);
    res.status(201).json({ newteachers });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

// to update by ID
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  
  console.log(req.body);
  console.log(id);
  try {
    const teachers = await Teachers.findById(id);

    const changeTeacher = await Teacher.findByIdAndUpdate(id, {
      classes: req.body.classes,
    });

    res.status(201).json({ status: "success", teachers: changeTeacher });
  } catch (error) {
    res.status(500).json({ message: error.message, status: "failed" });
  }
});

module.exports=router
