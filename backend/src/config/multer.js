import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
    },
    filename: function (req, file, cb) {
      crypto.randomBytes(16, (err, hash) => {
        if(err) cb(err);

        file.key = `${hash.toString('hex')}-${file.originalname}`;
        cb(null, file.key);
      });
    }
  }),
  limits: {
    fileSize: 4 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",      
    ];

    if(allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    }else {
      cb(new Error("Invalid file type."));
    }

  }
};