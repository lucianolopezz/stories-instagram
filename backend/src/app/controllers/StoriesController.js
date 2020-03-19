import Storie from '../models/Storie';
import User from '../models/User';

export default {
  async store(req, res) {

    const { user: _id } = req.headers;
    const { originalname: fileName, size: fileSize, key: fileKey } = req.file;
    const fileUrl = `${process.env.URL_APP}/uploads/${req.file.key}`;

    const storie = await Storie.create({
      fileName,
      fileSize,
      fileKey,
      fileUrl,
    });

    const user = await User.findById(_id);
    user.stories.push(storie);
    user.save();

    return res.json(storie);
  },

  async index(req, res) {
    const stories = await Storie.find();

    return res.json(stories);
  },

  async delete(req, res) {    
    const storie = await Storie.findById(req.params._id);
    await storie.remove();

    return res.json(storie);
  } 
}