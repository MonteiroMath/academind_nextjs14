import { buildPath, getFeedback } from "./feedback";

export default function handler(req, res) {
  const { id } = req.query;
  const filePath = buildPath();
  const data = getFeedback(filePath);

  const feedbackItem = data.find((item) => item.id === id);

  return res.status(200).json({ feedback: feedbackItem });
}
