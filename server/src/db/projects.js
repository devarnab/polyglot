import { Schema, model } from 'mongoose';

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
    index: true,
  },
  languages: [String],
});

export default model('Project', projectSchema);
