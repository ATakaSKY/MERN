const multer  = require('multer');
const uuid = require('uuid/v1');

const MIME_FILTER_MAP = {
    'image/jpg':'jpg',
    'image/jpeg':'jpg',
    'image/png':'png'
}

let fileUpload = multer({
    limits:500000,
    storage:multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'uploads/images')
        },
        filename: function (req, file, cb) {
            const ext = MIME_FILTER_MAP[file.mimetype];
          cb(null, uuid() + '.' + ext)
        }
    }),
    fileFilter:(req, file,cb) => {
        const isValid = !!MIME_FILTER_MAP[file.mimetype];
        let error = isValid ? null : new Error('Invalid file type');
        cb(error, isValid);
    }
})

module.exports = fileUpload;