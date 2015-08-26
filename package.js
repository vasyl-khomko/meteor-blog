Package.describe({
  summary: "A package that provides a blog at /blog",
  version: "0.7.1",
  name: "vasyl:blog",
  git: "https://github.com/vasyl-khomko/meteor-blog.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  var both = ['client', 'server'];

  // PACKAGES FOR CLIENT

  api.use([
    'session',
    'templating',
    'ui',
    'less',
    'underscore',
    'aslagle:reactive-table@0.5.5',
    'vasyl:shareit@0.4.1',
    'gfk:notifications@1.0.11'
  ], 'client');

  // FILES FOR CLIENT

  api.addFiles([

    // STYLESHEETS
    'client/stylesheets/lib/side-comments/side-comments.css',
    'client/stylesheets/lib/side-comments/default.css',
    'client/stylesheets/lib/medium-editor.css',
    'client/stylesheets/lib/medium-themes/bootstrap.css',
    'client/compatibility/bower_components/medium-editor-insert-plugin/dist/css/medium-editor-insert-plugin.css',
    'client/stylesheets/lib/bootstrap-tagsinput.css',

    // JAVASCRIPT LIBS
    'client/boot.coffee',
    'client/compatibility/side-comments.js',
    'client/compatibility/medium-editor.js',
    'client/compatibility/bower_components/handlebars/handlebars.runtime.js',
    'client/compatibility/handlebars.noconflict.js',
    'client/compatibility/bower_components/jquery-sortable/source/js/jquery-sortable.js',
    'client/compatibility/bower_components/blueimp-file-upload/js/vendor/jquery.ui.widget.js',
    'client/compatibility/bower_components/blueimp-file-upload/js/jquery.iframe-transport.js',
    'client/compatibility/bower_components/blueimp-file-upload/js/jquery.fileupload.js',
    'client/compatibility/bower_components/medium-editor-insert-plugin/dist/js/medium-editor-insert-plugin.js',
    'client/compatibility/bootstrap-tagsinput.js',
    'client/compatibility/typeahead.jquery.js',
    'client/compatibility/beautify-html.js',
    'client/compatibility/highlight.pack.js',

    // PACKAGE FILES
    'client/views/404.html',
    'client/views/custom.html',
    'client/views/custom.coffee',
    'client/views/admin/admin.less',
    'client/views/admin/admin.html',
    'client/views/admin/admin.coffee',
    'client/views/admin/edit.html',
    'client/views/admin/editor.coffee',
    'client/views/admin/edit.coffee',
    'client/views/blog/blog.less',
    'client/views/blog/blog.html',
    'client/views/blog/show.html',
    'client/views/blog/blog.coffee',
    'client/views/widget/latest.html',
    'client/views/widget/latest.coffee'
  ], 'client');

  // STATIC ASSETS FOR CLIENT

  api.addFiles([
    'public/default-user.png',
    'client/stylesheets/images/remove.png',
    'client/stylesheets/images/link.png',
    'client/stylesheets/images/unlink.png',
    'client/stylesheets/images/resize-bigger.png',
    'client/stylesheets/images/resize-smaller.png'
  ], 'client', { isAsset: true });

  // FILES FOR SERVER

  api.addFiles([
    'collections/config.coffee',
    'server/boot.coffee',
    'server/rss.coffee',
    'server/publications.coffee'
  ], 'server');

  // PACKAGES FOR SERVER

  Npm.depends({ rss: '0.0.4' });

  // PACKAGES FOR SERVER AND CLIENT

  api.use([
    'coffeescript',
    'deps',
    'iron:router@1.0.0',
    'iron:location@1.0.0',
    'accounts-base',
    'kaptron:minimongoid@0.9.1',
    'mrt:moment@2.8.1',
    'vsivsi:file-collection@1.1.0',
    'alanning:roles@1.2.13',
    'meteorhacks:fast-render@2.0.2',
    'meteorhacks:subs-manager@1.2.0',
    'cfs:standard-packages@0.5.3',
    'cfs:filesystem@0.1.1',
    'cfs:s3@0.1.1'
  ], both);

  // FILES FOR SERVER AND CLIENT

  api.addFiles([
    'collections/author.coffee',
    'collections/post.coffee',
    'collections/comment.coffee',
    'collections/tag.coffee',
    'collections/files.coffee',
    'router.coffee'
  ], both);
});

Package.onTest(function (api) {
  api.use("vasyl:blog", ['client', 'server']);
  api.use('tinytest', ['client', 'server']);
  api.use('test-helpers', ['client', 'server']);
  api.use('coffeescript', ['client', 'server']);

  Npm.depends({ rss: '0.0.4' });

  api.addFiles('test/server/rss.coffee', 'server');
});
