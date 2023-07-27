import { supabase } from "/utils";


export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }
    const { question, level_id, penalty_id, category_id, topic_id, language_id } = req.body;
    console.log(req.body);
    const { data, error } = await supabase
        .from("question")
        .insert({ question, level_id, language_id, penalty_id, category_id, topic_id, validated: false });
    console.log(error)
    console.log(data)
    if (error) {
        console.log(error);
        res.status(400).json({ error: "We couldn't save your card, please try again!" });
    } else {
        res.status(200).json({ data });
    }
}
