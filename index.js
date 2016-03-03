module.exports = function() {

  if (!global.Urls) {
    // Stub method when Django URLs are missing (for testing)
    return '/' + Array.prototype.slice.call(arguments, 0).join('/');
  }

  var name = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
  var reverse = global.Urls[name];
  return reverse.apply(this, args);
};
