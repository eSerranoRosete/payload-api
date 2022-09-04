const Media = {
  slug: "media",
  access: {
    read: () => true,
  },
  upload: {
    staticURL: "/assets",
    staticDir: "assets",
    disableLocalStorage: true,
    s3: {
      bucket: "payloadcms-inteminer",
      prefix: "images",
    },
    adminThumbnail: ({ doc }) =>
      `https://payloadcms-inteminer.s3.us-east-2.amazonaws.com/images/${doc.filename}`,
  },
  // create a field to access uploaded files in s3 from payload api
  fields: [
    {
      name: "url",
      type: "text",
      access: {
        create: () => false,
      },
      admin: {
        disabled: true,
      },
      hooks: {
        afterRead: [
          ({ data: doc }) =>
            `https://payloadcms-inteminer.s3.us-east-2.amazonaws.com/images/${doc.filename}`,
        ],
      },
    },
  ],
};

export default Media;
