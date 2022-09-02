const Users = {
  slug: "users",
  auth: true,
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
              label: "Facebook",
              value: "facebook",
            },
            {
              label: "Instagram",
              value: "instagram",
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
};

export default Users;
