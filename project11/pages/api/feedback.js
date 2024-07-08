import fs from "fs";
import path from "path";

function buildPath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

function getFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

function handler(req, res) {
  if (req.method === "POST") {
    const { email, feedback } = req.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback,
    };

    const filePath = buildPath();
    const data = getFeedback(filePath);

    data.push(newFeedback);

    fs.writeFileSync(filePath, JSON.stringify(data));

    return res.status(201).json({ message: "Success!", feedback: newFeedback });
  }

  if (req.method === "GET") {
    const filePath = buildPath();
    const data = getFeedback(filePath);
    return res.status(200).json({ feedback: data });
  }

  res.status(200).json({ message: "Hello World" });
}

export default handler;
