
exports.getHome = async function (req, res) {
  //res.redirect('/list')
  res.render("elements/index", { viewTitle: 'Eventy' });
}
