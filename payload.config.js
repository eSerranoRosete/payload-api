import { buildConfig } from "payload/config";
import Users from "./collections/Users";
import Clients from "./collections/Clients";

export default buildConfig({
  serverURL: process.env.DEPLOY_URL,
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
