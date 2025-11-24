import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },

    dateOfBirth: {
      type: Date,
    },

    userRole: {
      type: String,
      default: 'user',
      enum: ['user', "doctor", 'admin'], // admin allow
    },

    /* -------------------------
       Verification Flags
    -------------------------- */
    emailVerified: {
      type: Boolean,
      default: false,
    },

    mobileVerified: {
      type: Boolean,
      default: false,
    },

    // Final verified user
    verified: {
      type: Boolean,
      default: false,
    },

    // Additional profile fields
    clinicAddress: {
      type: String,
      trim: true,
    },

    hospitalAddress: {
      type: String,
      trim: true,
    },

    workSchedule: {
      opdTiming: {
        type: String,
        trim: true,
      },
      opdDays: {
        type: [String],   // <-- array of strings
        trim: true,
      },
      surgeryTiming: {
        type: String,
        trim: true,
      },
      surgeryDays: {
        type: [String],   // <-- array of strings
        trim: true,
      },
    },


    availabilityStatus: {
      type: String,
      enum: ['Busy', 'In OPD', 'In Surgery', 'In Vacation', 'Available for Call or Online Consultation Only', "Don't disturb"],
    },

  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
