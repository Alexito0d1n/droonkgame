import { supabase } from "/utils";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { data, error } = await supabase.from("category").select();

    // console.log(data);
    // console.log(error);

    res.status(200).json(data);
  } else {
    // Handle any other HTTP method: not allowed
    res.status(405).end();
  }
}
