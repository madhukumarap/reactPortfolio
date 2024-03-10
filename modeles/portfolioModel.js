const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
  welcometText: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  secondName: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const aboutSchema = new mongoose.Schema({
  lottieURL: {
    type: String,
    required: true,
  },
  description1: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
  skilles: {
    type: Array,
    required: true,
  }
});

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  }
});

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  tech: {
    type: Array,
    required: true
  }
});

const educationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true
  },
  institution:{
    type:String,
    required:true,
  }
});

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  address : {
    type: String,
    required: true
  },
});

module.exports = {
  Intro: mongoose.model("Introes", introSchema),
  About: mongoose.model("About", aboutSchema),
  Experience: mongoose.model("Experience", experienceSchema),
  Projects: mongoose.model("Projects", projectSchema),
  Education: mongoose.model("Education", educationSchema),
  Contact: mongoose.model("Contact", contactSchema)
}
