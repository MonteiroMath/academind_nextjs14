export default function handler(req, res) {
  const { eventId } = req.query;

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    //add validation

    if (!userEmail || !userEmail.includes("@")) {
      return res.status(422).json({ message: "Invalid email" });
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    return res
      .status(201)
      .json({ message: "added comment", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Max", text: "The first comment" },
      { id: "c2", name: "Max", text: "The fsecond comment" },
      { id: "c3", name: "Max", text: "The third comment" },
    ];

    res.status(201).json({ comments: dummyList });
  }

  return res.json("ok");
}
