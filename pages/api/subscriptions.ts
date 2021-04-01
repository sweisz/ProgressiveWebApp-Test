// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { withDatabase } from "../../server/utils";

export default withDatabase((req: NextApiRequest, res: NextApiResponse) => {
  const subscription = req.body;
  console.log(subscription);
  res.status(200).json(subscription);
});
