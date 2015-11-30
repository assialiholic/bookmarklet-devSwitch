javascript:
  function switchServer() {

    /*
      定義箇所
      ここに本サーバーURL:devサーバーURLの形で追加していく
    */
      var urlPairs = {
        'www.example.com': 'www-v.example.com',
        'lorem.com': 'lorem-v.com'
      },
      devUrlArray = [],
      genUrlArray = [],
      devUrl,
      genUrl,
      key;

    //devUrlArray,genUrlArrayにそれぞれのURLを配列として突っ込む
    for (key in urlPairs) {
      if (urlPairs.hasOwnProperty(key)) {
        devUrlArray.push(urlPairs[key]);
        genUrlArray.push(key);
      }
    }
    //正規表現用に,を|に置換して、URL|URL...の形にする
    var pipeReg = new RegExp(',', 'g');
    devUrl = devUrlArray.toString().replace(pipeReg, '|');
    genUrl = genUrlArray.toString().replace(pipeReg, '|', 'g');
    //if(url.match)で使用する正規表現オブジェクトの作成
    var devUrlReg = new RegExp(devUrl),
      genUrlReg = new RegExp(genUrl);

    /*
      遷移処理
    */
    var url = location.href,
        currentUrl,
        targetUrl;

    if (url.match(devUrlReg)) {
      currentUrl = url.match(devUrlReg);
      //targetUrlにcurrentUrlと対になる本サーバーのパスを代入
      for (key in urlPairs) {
        if (urlPairs.hasOwnProperty(key)) {
          if (currentUrl == urlPairs[key]) {
            targetUrl = key;
          }
        }
      }
      window.open(url.replace(currentUrl, targetUrl));
    } else {
      currentUrl = url.match(genUrlReg);
      //targetUrlにcurrentUrlと対になるdevサーバーのパスを代入
      for (key in urlPairs) {
        if (urlPairs.hasOwnProperty(key)) {
          if (currentUrl == key) {
            targetUrl = urlPairs[key];
          }
        }
      }
      window.open(url.replace(currentUrl, targetUrl));
    }
  }
