import { supabase } from "/utils";

export default async function handler(req, res) {
  if (req.method === "GET") {
    console.log(req.body);
    // const { level, category, language } = req.body

    const { data, error, status, count } = await supabase
      .from("questions_view")
      .select("*", { count: "exact", head: true });

    // console.log("Questions", count);
    // console.log(error);

    res.status(200).json(count);
  } else {
    // Handle any other HTTP method: not allowed
    res.status(405).end();
  }
}
