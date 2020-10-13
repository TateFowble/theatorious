var express = require('express');
var router = express.Router();

var navLinks = {
  link1: 'Home',
  link2: 'Contact',
  link3: 'What we do'
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'At', webtitle: 'The Atorious', link1: navLinks.link1, link2: navLinks.link2, link3: navLinks.link3 });
});

router.get('/what-we-do', function(req, res, next) {
  res.render('what-we-do', { link1: navLinks.link1, link2: navLinks.link2, link3: navLinks.link3  });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', { link1: navLinks.link1, link2: navLinks.link2, link3: navLinks.link3 });
});

router.get('/portfolio', function (req, res, next) {
  res.render('portfolio', { link1: navLinks.link1, link2: navLinks.link2, link3: navLinks.link3 });
});

router.get('/examples', function (req, res, next) {
  res.render('404', { link1: navLinks.link1, link2: navLinks.link2, link3: navLinks.link3 });
});

router.get('/404', function (req, res, next) {
  res.render('404', {});
});

module.exports = router;
