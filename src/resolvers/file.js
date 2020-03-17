import cloudinary from 'cloudinary';
import 'dotenv/config';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default {
  Mutation: {
    async singleUpload(_parent, { file }) {
      const {
        createReadStream,
        filename,
        mimetype,
        encoding,
      } = await file;

      const upload = () => {
        return new Promise((resolve, reject) => {
          const uploadStream = cloudinary.v2.uploader.upload_stream(
            {},
            (error, data) => {
              if (data) {
                resolve(data);
              } else {
                reject(error);
              }
            },
          );

          const stream = createReadStream();
          stream.pipe(uploadStream);
        });
      };
      const result = await upload();
      return { filename, mimetype, encoding, url: result.secure_url };
    },
  },
};
