import { buildConfig } from "payload/config";
import Users from "./collections/Users";
import Clients from "./collections/Clients";

export default buildConfig({
  // serverURL: "http://localhost:3000",
  serverURL: "https://app.inteminer.com",
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
