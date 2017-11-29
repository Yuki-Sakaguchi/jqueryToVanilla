/**
 * 配列のループ
 */
(function() {
  /*
    jQuery
      $array.each(function(index, value) {
        // 処理
      });
  */

  var array = ['apple', 'banana', 'orange'];
  array.forEach(function(value, index) {
    // 処理
    console.log(value, index);
  });
})();


/**
 * 連想配列のループ
 */
(function() {
  /*
    jQuery
      $array.each(function(key, value) {
        // 処理
      });
  */

  var array = {
    id: 1,
    name: 'apple',
    discription: 'こちらりんごです'
  };
  Object.keys(array).forEach(function(key) {
    console.log(key + ':' + array[key]);
  });
})();


/**
 * 連想配列の結合(extend)
 */
(function() {
  /*
    jQuery
      $.extend(list1, list2);
  */

  var defaultOptions = {
    color: 'red',
    size: '20px',
    border: 'none'
  };

  var options = {
    color: 'blue',
    size: '32px',
    background: 'white'
  };

  Object.keys(options).forEach(function(key) {
    defaultOptions[key] = options[key];
  });
  console.log(defaultOptions);
})();
