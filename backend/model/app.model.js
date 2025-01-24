import mongoose from "mongoose";

const AppSchema = new mongoose.Schema({
  personalInfo: {
    fullName: { type: String},
    birth: { type: Date},
    nationality: { type: String},
    email: { type: String},
    phone: { type: String}
  },
  travelPreferences: {
    departureDate: { type: Date},
    returnDate: { type: Date},
    accommodation: { type: String, enum: ['Space Hotel', 'Martian Base']},
    specialRequests: { type: String }
  },
  healthAndSafety: {
    healthDeclaration: { type: Boolean},
    emergencyContact: {
      name: { type: String},
      phone: { type: String},
      relation: { type: String}
    },
    medicalConditions: { type: String }
  }
}, {
    timestamps: true    // track createdAt, updatedAt
});

const AppModel = mongoose.model("Application", AppSchema);
// create collection: applications

export default AppModel;
