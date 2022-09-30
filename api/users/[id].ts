import { NowRequest, NowResponse } from "@vercel/node";

const users = ["Bob Smith", "Guillame Bibeau"];
async function f1() {
    const response = await fetch('https://api.llama.fi/protocol/guru-network');
    const body = await response.json();
    return(body);
}

export default (req: NowRequest, res: NowResponse) => {
  const { id } = req.query;
  res.status(200).json(f1());
};
