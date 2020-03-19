import mongoose from 'mongoose';
import { promisify } from 'util';
import moment from 'moment';
import path from 'path';
import fs from 'fs';

const StorieSchema = new mongoose.Schema({
  fileName: String,
  fileSize: Number,
  fileKey: String,
  fileUrl: String,
  active: {
    type: Boolean,
    default: true,
  },
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

StorieSchema.virtual('url').get(function () {
  return this.fileUrl;
});

StorieSchema.post('remove', { document: true }, function(doc) {  
  return promisify(fs.unlink)(path.resolve(__dirname, '..', '..', '..', 'tmp', 'uploads', doc.fileKey));
});

export default mongoose.model('Storie', StorieSchema);