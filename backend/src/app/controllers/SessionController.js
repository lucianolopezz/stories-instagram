import User from '../models/User';
import crypto from 'crypto';

export default {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      const hash = crypto.createHash('md5').update(email).digest('hex');

      req.body.profileImage = `https://s.gravatar.com/avatar/${hash}.jpeg?s=100`;
      user = await User.create(req.body);
    }

    return res.json(user);
  } 
}