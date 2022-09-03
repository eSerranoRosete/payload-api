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
    // Email added by default
    // Add more fields as needed
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
      type: "select",
      options: ["Inteminer", "Ciudad Maderas"],
      required: true,
    },
    {
      name: "title",
      label: "Display Title",
      type: "text",
    },
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
    {
      name: "extra",
      type: "array",
      label: "Extra Content",
      fields: [
        {
          name: "item",
          type: "text",
          required: true,
        },
        {
          name: "value",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};

export default Clients;
