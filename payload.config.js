import { buildConfig } from "payload/config";
import Users from "./collections/Users";
import Clients from "./collections/Clients";

export default buildConfig({
  serverURL: "https://payload-inteminer.herokuapp.com/admin",
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    // Add Collections here
    Clients,
  ],
  cors: "*",
});
