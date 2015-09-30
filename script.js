javascript:
function test(){
  var url = location.href,
      re = /(www-v\.|ha-v\.)/,
      devUrl,
      genUrl;
  if(url.match(re)){
    devUrl = url.replace(/-v\./, '\.')
    window.open(devUrl);
  }else{
    genUrl = url.replace(/(www(?=\.)|ha(?=\.))/ ,'$1-v');
    window.open(genUrl);
  }
}
