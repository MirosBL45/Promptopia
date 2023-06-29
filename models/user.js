import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please provide an email address."],
    unique: [true, "That email address is already in use."],
  },
  username: {
    type: String,
    required: [true, "Please provide a username."],
    // unique: [true, "That username is already in use."],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  }
});

const User = models.User || model('User', userSchema);

export default User;