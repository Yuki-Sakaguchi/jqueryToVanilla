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


/**
 * スライドトグル
 */
(function() {
  // セット
  window.addEventListener('load', initSlideToggle);

  // スライドのスピード
  var speed = 5;

  /**
   * スライドの設定
   */
  function initSlideToggle() {
    var elBox = document.getElementsByClassName('box');

    for (var i = 0; i < elBox.length; i++) {
      execute(elBox[i]);
    }

    /**
     * 実行
     */
    function execute(elParent) {
      var elBtn = elParent.getElementsByClassName('box__more-btn')[0];
      var elContent = elParent.getElementsByClassName('box__content')[0];

      // 高さを取得したいコピーを作る
      var elCopyContent = elContent.cloneNode(true);

      // 親に挿入
      elParent.appendChild(elCopyContent);

      // 見えなくする
      elCopyContent.style.cssText = "display: block; height: auto; visibility: hidden;";

      // コピーの高さを調べる
      var contentHeight = elCopyContent.offsetHeight;

      // コピーした要素を削除
      elParent.removeChild(elCopyContent);

      // ボタンをクリックした時の処理
      elBtn.addEventListener('click', function() {
        var nowContentHeight = elContent.offsetHeight;
        if (nowContentHeight < 1) {
          elContent.style.display = 'block';
          slideDown(nowContentHeight);
        } else {
          slideUp(nowContentHeight);
        }
      });

      /**
       * スライドダウン
       */
      var slideDownTimer = null;
      function slideDown(height) {
        if (height < contentHeight) {
          // 今の高さがコピーの高さ以下の場合
          height += 5;
          elContent.style.height = height + 'px';
          slideDownTimer = setTimeout(function() {
            slideDown(height);
          }, speed);
        } else {
          // 高さがコピーに達したとき
          clearTimeout(slideDownTimer);
          elContent.style.height = contentHeight;
        }
      }

      /**
       * スライドアップ
       */
      var slideUpTimer = null;
      function slideUp(height) {
        if (height >= 1) {
          // 高さが１以上の場合
          height -= 5;
          elContent.style.height = height + 'px';
          slideUpTimer = setTimeout(function() {
            slideUp(height);
          }, speed);
        } else {
          // 高さが０担った場合
          clearTimeout(slideUpTimer);
          elContent.style.height = 0;
          elContent.style.display = 'none';
        }
      }
    }
  }
})();


/**
 * イージング
 */
(function() {
  window.addEventListener('load', function() {
    var elEasingBox = document.getElementsByClassName('easing-box');
    for (var i = 0; i < elEasingBox.length; i++) {
      initEasing(elEasingBox[i]);
    }
  });

  /**
   * 初期化
   */
  function initEasing(elTarget) {
    var timer; 
    var begin; // 開始時刻
    var dur = 2000; // 持続ミリ秒
    var from = 0; // 開始値
    var to = 200; // 終了値
    var style = elTarget.style; // 対象

    // イージング
    function easing(progress) {
      return Math.pow(progress, 0.5);
    }

    // アニメーション
    function moveBox() {
      var progress = (Date.now() - begin) / dur; // 進捗
      if (progress > 1) {
        // １以上にならないように調整
        progress = 1;
      }

      style.left = (from + (to - from) * easing(progress)) + 'px';

      // 進捗が１の場合処理終了
      if (progress == 1) {
        clearInterval(timer);
      }
    }

    // 初期値設定
    begin = Date.now();
    timer = setInterval(moveBox, 10);
  }
})();