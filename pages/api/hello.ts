// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { broadcastMessage } from "../../server/subscriptions";
import { withDatabase } from "../../server/utils";

export default withDatabase((req: NextApiRequest, res: NextApiResponse) => {
  broadcastMessage("Hello");
  res.status(200).json({ name: "John Doe" });
});
