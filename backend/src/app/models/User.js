import mongoose from 'mongoose';
import moment from 'moment';

const UserSchema = new mongoose.Schema({
  name: String,  
  email: {
    type: String,
    required: true,
  },
  profileImage: String,
  stories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Storie',
    required: false,
  }],
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

UserSchema.virtual('lastStorieDate').get(function () {
  if(!!this.stories.length) {
    const lastStorie = this.stories[0];
    return moment(lastStorie.createdAt).startOf('hour').fromNow();
  }
});

export default mongoose.model('User', UserSchema);