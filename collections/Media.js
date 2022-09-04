const Media = {
  slug: "media",
  upload: {
    staticURL: "/assets",
    staticDir: "assets",
    disableLocalStorage: true,
    s3: {
      bucket: "payloadcms-inteminer",
    },
    adminThumbnail: ({ doc }) =>
      `https://payloadcms-inteminer.s3.us-east-2.amazonaws.com/${doc.filename}`,
  },
  // create a field to access uploaded files in s3 from payload api
  fields: [
    {
      name: "url",
      type: "text",
      access: {
        create: () => false,
        read: () => true,
      },
      admin: {
        disabled: true,
      },
      hooks: {
        afterRead: [
          ({ data: doc }) =>
            `https://payloadcms-inteminer.s3.us-east-2.amazonaws.com/${doc.filename}`,
        ],
      },
    },
  ],
};

export default Media;
