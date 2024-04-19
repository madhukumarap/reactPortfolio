const router = require("express").Router();
const {
  Intro,
  About,
  Experience,
  Projects,
  Education,
  Contact,
} = require("../modeles/portfolioModel"); // Corrected typo in the import statement
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
router.post("/update-intro", async (req, res)=>{
  try{
    const intro = await Intro.findOneAndUpdate(
      {_id: req.body._id},
      req.body,
      {new:true}
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "intro updates successfully" 
    })
  }catch(error){
    res.status(500).send(error)
    console.log(error.message)
  }
})
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


module.exports = router;
