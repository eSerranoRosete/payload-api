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
  ],
};

export default Users;
