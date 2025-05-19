import urlSchema from "../models/short_url.model.js";

export const saveShortUrl = async (url, shortUrl, user_Id = null) => {
  const newUrl = new urlSchema({
    full_url: url,
    short_url: shortUrl,
  });
  if (user_Id) {
    newUrl.user_Id = user_Id;
  }
  await newUrl.save();
  return newUrl;
};

export const getShortUrl = async (shortUrl) => {
  return await urlSchema.findOneAndUpdate(
    { short_url: shortUrl },
    { $inc: { clicks: 1 } }
  );
};
