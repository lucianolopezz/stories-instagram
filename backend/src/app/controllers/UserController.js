
import User from '../models/User';

export default {

  async index(req, res) {
    const { user } = req.headers;
    const users = await User.find({
      _id: { $ne: user},
      stories: { $exists: true, $ne: [] }
    })
      .populate({
        path: 'stories',
        select: '_id',
      });

    return res.json(users);
  },

  async show(req, res) {
    const { _id } = req.params;
    const user = await User.findOne({ _id }).populate({ path: 'stories', select: 'fileUrl createdAt' });

    return res.json(user);
  },

}