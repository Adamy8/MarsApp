import mongoose from "mongoose";

const AppSchema = new mongoose.Schema({
  personalInfo: {
    fullName: { type: String, required: true },
    birth: { type: Date, required: true },
    nationality: { type: String, required: true },
    contactInfo: {
      email: { type: String, required: true },
      phone: { type: String, required: true }
    }
  },
  travelPreferences: {
    departureDate: { type: Date, required: true },
    returnDate: { type: Date, required: true },
    accommodation: { type: String, enum: ['Space Hotel', 'Martian Base'], required: true },
    specialRequests: { type: String }
  },
  healthAndSafety: {
    healthDeclaration: { type: Boolean, required: true },
    emergencyContact: {
      name: { type: String, required: true },
      phone: { type: String, required: true },
      relation: { type: String, required: true }
    },
    medicalConditions: { type: String }
  }
}, {
    timestamps: true    // track createdAt, updatedAt
});

const AppModel = mongoose.model("Application", AppSchema);
// create collection: applications

export default AppModel;
