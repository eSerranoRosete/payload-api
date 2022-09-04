import { buildConfig } from "payload/config";
import s3Upload from "payload-s3-upload";

import Users from "./collections/Users";
import Clients from "./collections/Clients";
import Media from "./collections/Media";

export default buildConfig({
  serverURL: process.env.DEPLOY_URL,
  cors: "*",
  admin: {
    user: Users.slug,
  },
  collections: [Users, Clients, Media],
  plugins: [
    s3Upload({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_KEY,
        secretAccessKey: process.env.AWS_SECRET,
      },
    }),
  ],
});
