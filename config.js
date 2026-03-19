module.exports = {
  apiUrl: process.env.API_URL || 'http://localhost:3000',
  videoUploadPath: process.env.VIDEO_UPLOAD_PATH || './videos',
  maxVideoSize: process.env.MAX_VIDEO_SIZE || 500 * 1024 * 1024,
  supportedFormats: ['mp4', 'mov', 'avi', 'webm']
};