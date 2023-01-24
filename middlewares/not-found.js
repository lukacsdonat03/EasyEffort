const notFound = (req, res) => res.status(404).send('Ez a route nem létezik!')

module.exports = notFound