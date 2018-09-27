var sm = require('sitemap')




const sitemap = sm.createSitemap({
  hostname: 'http://www.mywebsite.com',
  urls: [{
    url: 'http://mobile.test.com/page-1/',
    lastmodISO: '2015-06-27T15:30:00.000Z',
    changefreq: 'weekly',
    priority: 0.3
  }]
});
