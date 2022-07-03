import { supabase } from "/utils";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;

    const { data, error } = await supabase
      .from("questions_view")
      .select()
      .eq("id", id);

    // console.log(data);
    // console.log(error);

    res.status(200).json(data[0]);
  } else {
    // Handle any other HTTP method: not allowed
    res.status(405).end();
  }
}
