function objectFactory() {

  var obj = new Object(),

  Constructor = [].shift.call(arguments);

  obj.__proto__ = Constructor.prototype;

  var ret = Constructor.apply(obj, arguments);//obj.constructor(arguments)

  return typeof ret === 'object' ? ret : obj;

};