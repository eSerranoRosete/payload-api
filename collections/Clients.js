import payload from "payload";

const Clients = {
  slug: "clients",
  admin: {
    useAsTitle: "email",
    disableDuplicate: true,
  },
  access: {
    read: () => true,
  },
  admin: {
    preview: (doc) => {
      if (doc?.id) {
        return `https://inteminer.vercel.app/${doc.id}`;
      }
      return null;
    },
  },
  hooks: {
    afterDelete: [
      async (req, id, doc) => {
        try {
          await payload.delete({
            collection: "media",
            id: req.doc.avatar,
          });
        } catch (error) {
          console.log(error.message);
        }

        if (req.doc.type != "org") {
          try {
            await payload.delete({
              collection: "media",
              id: req.doc.cover,
            });
          } catch (error) {
            console.log(error.message);
          }
        }
      },
    ],
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Basic Information",
          description: "Basic information required for all users",
          fields: [
            {
              name: "type",
              type: "select",
              label: "User Type",
              required: true,
              options: [
                {
                  label: "Single User",
                  value: "single",
                },
                {
                  label: "Organization User",
                  value: "org",
                },
              ],
            },
            {
              name: "email",
              type: "email",
              required: true,
              unique: false,
            },
            {
              name: "firstName",
              type: "text",
              required: true,
            },
            {
              name: "lastName",
              type: "text",
              required: true,
            },
            {
              name: "phone",
              type: "text",
            },
            {
              name: "organization",
              label: "Organization",
              type: "text",
              required: true,
            },
            {
              name: "avatar",
              type: "upload",
              relationTo: "media",
              required: true,
              hooks: {
                beforeChange: [
                  async (args) => {
                    if (args.originalDoc.avatar != args.data.avatar) {
                      try {
                        await payload.delete({
                          collection: "media",
                          id: args.originalDoc.avatar,
                        });
                      } catch (error) {
                        console.log(error.message);
                      }
                    }
                  },
                ],
              },
            },
            {
              name: "cover",
              label: "Cover Image",
              type: "upload",
              relationTo: "media",
              required: true,
              hooks: {
                beforeChange: [
                  async (args) => {
                    if (
                      args.originalDoc.type != "org" &&
                      args.originalDoc.cover != args.data.cover
                    ) {
                      try {
                        await payload.delete({
                          collection: "media",
                          id: args.originalDoc.cover,
                        });
                      } catch (error) {
                        console.log(error.message);
                      }
                    }
                  },
                ],
              },
            },
          ],
        },
        {
          label: "Card Content",
          description: "Card Content",
          fields: [
            {
              name: "title",
              label: "Display Title",
              type: "text",
            },
            {
              name: "slider",
              label: "Slider",
              type: "group",
              fields: [
                {
                  name: "title",
                  label: "Slider Title",
                  type: "text",
                  required: false,
                },
                {
                  name: "items",
                  label: "Slider Items",
                  type: "array",
                  required: false,
                  fields: [
                    {
                      name: "link",
                      label: "Link",
                      type: "text",
                      required: false,
                    },
                    {
                      name: "image",
                      label: "Slider Image",
                      type: "upload",
                      relationTo: "media",
                      required: true,
                    },
                  ],
                },
              ],
            },
            {
              name: "callToAction",
              label: "Call to Action Button",
              type: "group",
              required: false,
              fields: [
                {
                  name: "text",
                  label: "Text to display",
                  type: "text",
                },
                {
                  name: "url",
                  label: "URL",
                  type: "text",
                },
              ],
            },
          ],
        },
        {
          label: "Social Media",
          description: "Social Media links and buttons",
          fields: [
            {
              name: "social",
              type: "array",
              label: "Social Media",
              fields: [
                {
                  name: "type",
                  label: "Social Media Type",
                  type: "select",
                  options: [
                    {
                      label: "Whatsapp",
                      value: "whatsapp",
                    },
                    {
                      label: "Facebook",
                      value: "facebook",
                    },
                    {
                      label: "Instagram",
                      value: "instagram",
                    },
                    {
                      label: "Twitter",
                      value: "twitter",
                    },
                    {
                      label: "Linkedin",
                      value: "linkedin",
                    },
                    {
                      label: "Telegram",
                      value: "telegram",
                    },
                    {
                      label: "Snapchat",
                      value: "snapchat",
                    },
                    {
                      label: "Youtube",
                      value: "youtube",
                    },
                    {
                      label: "TikTok",
                      value: "tiktok",
                    },
                    {
                      label: "Website",
                      value: "website",
                    },
                    {
                      label: "Google",
                      value: "google",
                    },
                    {
                      label: "Github",
                      value: "github",
                    },
                    {
                      label: "Discord",
                      value: "discord",
                    },
                  ],
                },
                {
                  name: "link",
                  type: "text",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default Clients;
