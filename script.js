javascript:
  function test() {

    //ここに本サーバーURL:devサーバーURLの形で追加していく
    var urlPairs = {
        'www.example.com': 'www-v.example.com',
        'lorem.com': 'lorem-v.com'
      },
      devUrlArray = [],
      genUrlArray = [],
      devUrl,
      genUrl,
      key;

    //mergedDevUrl,mergedGenUrlにそれぞれのURLを配列として突っ込む
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
    alert(devUrl);

    var url = location.href,
      targetUrl,
      matchTxt,
      replaceTxt;

    if (url.match(devUrlReg)) {
      matchTxt = url.match(devUrlReg);
      //replaceTxtにmatchTxtと対になる本サーバーのパスを代入
      for (key in urlPairs) {
        if (urlPairs.hasOwnProperty(key)) {
          if (matchTxt == urlPairs[key]){
            replaceTxt = key;
          }
        }
      }
      targetUrl = url.replace(devUrlReg, replaceTxt);
      window.open(targetUrl);
    } else {
      matchTxt = url.match(genUrlReg);
      //replaceTxtにmatchTxtと対になるdevサーバーのパスを代入
      for (key in urlPairs) {
        if (urlPairs.hasOwnProperty(key)) {
          if (matchTxt == key){
            replaceTxt = urlPairs[key];
          }
        }
      }
      targetUrl = url.replace(matchTxt, replaceTxt);
      window.open(targetUrl);
    }
  }
