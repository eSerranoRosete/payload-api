const Media = {
  slug: "media",
  upload: {
    staticURL: "/assets",
    staticDir: "assets",
    disableLocalStorage: true,
    s3: {
      bucket: "payloadcms-inteminer",
      prefix: "images/xyz", // files will be stored in bucket folder images/xyz
      // prefix: ({ doc }) => `assets/${doc.type}`, // dynamic prefixes are possible too
    },
    adminThumbnail: ({ doc }) =>
      `https://payloadcms-inteminer.s3.us-east-2.amazonaws.com/images/xyz/${doc.filename}`,
  },
  // create a field to access uploaded files in s3 from payload api
  fields: [
    {
      name: "url",
      type: "text",
      access: {
        read: () => true,
      },
      admin: {
        disabled: true,
      },
      hooks: {
        afterRead: [
          ({ data: doc }) =>
            `https://payloadcms-inteminer.s3.us-east-2.amazonaws.com/images/${doc.type}/${doc.filename}`,
        ],
      },
    },
  ],
};

export default Media;
