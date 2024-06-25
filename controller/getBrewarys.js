async function getBrewarys(req, res) {
  const url = "https://api.openbrewerydb.org/v1/breweries?per_page=3";
  let brewarys = await fetch(url);
  brewarys = await brewarys.json();
  res.status(201).json({ brewarys: brewarys });
}

export default getBrewarys;
