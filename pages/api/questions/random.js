import { supabase } from "/utils";

export default async function handler(req, res) {
  // For filtered questions
  if (req.method === "POST") {
    // ToDo: send id not in answeredBuffer
    const {
      notAllowedIds,
      allowedLevels,
      allowedCategories,
      allowedLanguages,
      allowedTopics,
    } = req.body;
    let query = supabase.from("questions_view").select();

    if (allowedLevels) {
      query = query.in("level_id", allowedLevels);
    }
    if (allowedCategories) {
      query = query.in("category_id", allowedCategories);
    }
    if (allowedLanguages) {
      query = query.in("language_id", allowedLanguages);
    }

    if (allowedTopics) {
      query = query.in("topic_id", allowedTopics);
    }

    console.log("notAllowedIds", notAllowedIds);

    if (notAllowedIds) {
      // query = query.not("id", "in", `{${notAllowedIds.join(",")}}`);
      query = query.not("id", "in", `(${notAllowedIds.join(",")})`);
    }

    const { data, error } = await query.limit(1);

    console.log(data);
    // console.log(error);

    res.status(200).json(data !== null ? data[0] : null);
  }
  // For unfiltered questions
  if (req.method === "GET") {
    const { data, error } = await supabase
      .from("questions_view")
      .select()
      .limit(1);

    // console.log(data);
    // console.log(error);

    res.status(200).json(data[0]);
  } else {
    // Handle any other HTTP method: not allowed
    res.status(405).end();
  }
}
