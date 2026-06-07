const notFound = (req, res) => {
  res.status(404).render('pages/404', {
    layout: 'layouts/main',
    title: '404 | Page Not Found'
  });
};

module.exports = { notFound };
