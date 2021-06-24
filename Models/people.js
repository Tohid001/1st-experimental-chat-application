// const mongoose = require("mongoose");
// const peopleSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },

//     email: { type: String, required: true, trim: true, lowercase: true },
//     mobile: { type: String, required: true },
//     password: { type: String, required: true },
//     //   country: { type: String, required: true },
//     //   dateOfBirth: { type: Date, required: false },
//     avatar: { type: String },
//     role: { type: String, enum: ["admin", "user"], default: "user" },
//     //   gender: { type: String, required: true },
//     //   todos: [{ type: mongoose.Types.ObjectId, ref: "Todo" }],
//   },
//   { timestamps: true }
// );

// const People = mongoose.model("People", peopleSchema);
// module.exports = People;
/////////////////////////////////////////////////
/////////////////////////

const mongoose = require("mongoose");

const peopleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const People = mongoose.model("People", peopleSchema);

module.exports = People;
