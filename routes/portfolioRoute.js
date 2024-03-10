const router = require("express").Router();
const {
  Intro,
  About,
  Experience,
  Projects,
  Education,
  Contact,
} = require("../modeles/portfolioModel"); // Corrected typo in the import statement

router.get("/get-portfolio-data", async (req, res) => { // Corrected path
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const experiences = await Experience.find(); // Corrected variable name
    const projects = await Projects.find(); // Corrected variable name
    const education = await Education.find();
    const contacts = await Contact.find(); // Corrected variable name
    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      experiences: experiences, // Corrected variable name
      education: education,
      projects: projects, // Corrected variable name
      contact: contacts[0], // Corrected variable name
    });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).send(error);
  }
});

module.exports = router;
