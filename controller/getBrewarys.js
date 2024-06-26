async function getBrewarys(req, res) {
  const quary=req.params.quary;
  console.log(req.params.quary);
  const url = `https://api.openbrewerydb.org/v1/breweries?${quary}`;
  let brewarys = await fetch(url);
  brewarys = await brewarys.json();
  console.log(brewarys)
  res.status(201).json({ brewaries: brewarys });
}

export default getBrewarys;
