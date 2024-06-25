import Review from "../model/review";

async function getReview(req, res) {
  const url =
    "https://api.openbrewerydb.org/v1/breweries?by_ids=701239cb-5319-4d2e-92c1-129ab0b3b440,06e9fffb-e820-45c9-b107-b52b51013e8f";
  let brewerie = await fetch(url);
  brewerie = await brewerie.json();
}

async function addReview(req, res) {
  const { text, rating } = req.body; // Fix typo: 'reting' to 'rating'

  try {
    const review = new Review({
      text,
      rating,
    });

    await review.save();

    res.status(201).json({ message: "Review added successfully", review });
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({ error: "Server error" });
  }
}

export default { getReview, addReview };
