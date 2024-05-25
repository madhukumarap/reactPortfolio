const router = require("express").Router();
const {
  Intro,
  About,
  Experience,
  Projects,
  Education,
  Contact,
  
} = require("../modeles/portfolioModel"); // Corrected typo in the import statement
const {userSchema} = require("../modeles/userModel")
//get all portfoliodata
router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const experiences = await Experience.find();
    const projects = await Projects.find();
    const education = await Education.find();
    const contacts = await Contact.find();
    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      experiences: experiences,
      education: education,
      projects: projects,
      contact: contacts[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});
// update intro
router.post("/update-intro", async (req, res) => {
  try {
      const intro = await Intro.findOneAndUpdate(
          { _id: req.body._id },
          req.body,
          { new: true }
      );
      res.status(200).send({
          data: intro,
          success: true,
          message: "Intro updated successfully"
      });
  } catch (error) {
      res.status(500).send(error);
      console.log(error.message);
  }
});
//update about
router.post("/update-About", async (req, res)=>{
  try{
    const about = await About.findOneAndUpdate(
      {_id: req.body._id},
      req.body,
      {new:true}
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "intro updates successfully" 
    })
  }catch(error){
    res.status(500).send(error)
    console.log(error.message)
  }
})
//add-experience
router.post("/add-experience", async (req, res) => {
  try {
    const exp = new Experience(req.body);
    await exp.save();
    res.status(200).send({
      data: exp,
      success: true,
      message: "Experience added successfully"
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to add experience",
      error: error.message
    });
    console.log(error.message);
  }
});
//update-experinece
router.post("/update-experience", async (req, res)=>{
  try{
    const about = await Experience.findOneAndUpdate(
      {_id: req.body._id},
      req.body,
      {new:true}
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "intro updates successfully" 
    })
  }catch(error){
    res.status(500).send(error)
    console.log(error.message)
  }
})
router.post("/delete-experience", async (req, res)=>{
  try{
    const about = await Experience.findOneAndDelete(
      {_id: req.body._id},
      req.body,
      {new:true}
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "intro updates successfully" 
    })
  }catch(error){
    res.status(500).send(error)
    console.log(error.message)
  }
})

router.post("/add-project", async (req, res) => {
  try {
    const exp = new Projects(req.body);
    await exp.save();
    res.status(200).send({
      data: exp,
      success: true,
      message: "Project added successfully"
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to add project",
      error: error.message
    });
    console.log(error.message);
  }
});

//update-experinece
router.post("/update-project", async (req, res)=>{
  try{
    const about = await Projects.findOneAndUpdate(
      {_id: req.body._id},
      req.body,
      {new:true}
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "intro updates successfully" 
    })
  }catch(error){
    res.status(500).send(error)
    console.log(error.message)
  }
})
router.post("/delete-project", async (req, res)=>{
  try{
    const about = await Projects.findOneAndDelete(
      {_id: req.body._id},
      req.body,
      {new:true}
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "intro updates successfully" 
    })
  }catch(error){
    res.status(500).send(error)
    console.log(error.message)
  }
})

router.post("/update-contact", async (req, res) => {
  try {
      const intro = await Contact.findOneAndUpdate(
          { _id: req.body._id },
          req.body,
          { new: true }
      );
      res.status(200).send({
          data: intro,
          success: true,
          message: "Contact updated successfully"
      });
  } catch (error) {
      res.status(500).send(error);
      console.log(error.message);
  }
});
router.post("/admin-login", async(req, res)=>{
  try {
    const user = await userSchema.findOne({
      username :req.body.username, password:req.body.password
    })
    if(user){
      res.status(200).send({
        data:user,
        sucess:true,
        message:"login success"
      })
    }else{
      res.status(200).send({
        data:user,
        sucess:false,
        message:"invalid success"
      })
    }
  } catch (error) {
    res.status(500).send(error)
  }
})
module.exports = router;
