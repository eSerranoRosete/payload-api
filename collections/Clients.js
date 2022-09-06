const Clients = {
  slug: "clients",
  admin: {
    useAsTitle: "email",
    disableDuplicate: true,
  },
  access: {
    read: () => true,
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
              name: "email",
              type: "email",
              required: true,
              unique: true,
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
            },
            {
              name: "cover",
              label: "Cover Image",
              type: "upload",
              relationTo: "media",
              required: true,
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
