
function couchapp_load(scripts) {
  for (var i=0; i < scripts.length; i++) {
    document.write('<script src="'+scripts[i]+'"><\/script>')
  };
};

couchapp_load([
  "/_utils/script/sha1.js",
  "/_utils/script/json2.js",
  //"/_utils/script/jquery.js",
  "vendor/couchapp/jquery.js",
  "vendor/couchapp/jquery.mobile-1.0rc1.min.js",
  // BUG nico 201110017 : too old version of coucdb on my ubuntu
  // so I needed to update jquery.couch.js
  //"/_utils/script/jquery.couch.js",
  "vendor/couchapp/jquery.couch.js",
  "vendor/couchapp/jquery.couch.app.js",
  "vendor/couchapp/jquery.couch.app.util.js",
  "vendor/couchapp/jquery.mustache.js",
  "vendor/couchapp/jquery.evently.js"
]);
