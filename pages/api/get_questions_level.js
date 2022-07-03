import { supabase } from "/utils";

export default async function handler(req, res) {
  if (req.method === "GET") {
    console.log(req.body);
    // const { level, category, language } = req.body
    const {level}= await supabase.from("questions_view").select(level_name);


    const { data, error } = await supabase.from("questions_view").select();

    console.log( "levels", level);

    console.log(data);

    console.log(error);

    res.status(200).json(data);
  } else {
    // Handle any other HTTP method: not allowed
    res.status(405).end();
  }
}

