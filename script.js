javascript:(function()%20{var%20urlPairs%20=%20{'genURL1':'devURL1','genURL2':'devURL1'},devUrlArray%20=%20[],genUrlArray%20=%20[],devUrl,genUrl,key;for%20(key%20in%20urlPairs)%20{if%20(urlPairs.hasOwnProperty(key))%20{devUrlArray.push(urlPairs[key]);genUrlArray.push(key);}}var%20pipeReg%20=%20new%20RegExp(',',%20'g');devUrl%20=%20devUrlArray.toString().replace(pipeReg,%20'|');genUrl%20=%20genUrlArray.toString().replace(pipeReg,%20'|');var%20devUrlReg%20=%20new%20RegExp(devUrl),genUrlReg%20=%20new%20RegExp(genUrl);var%20url%20=%20location.href,targetUrl,matchTxt,replaceTxt;if%20(url.match(devUrlReg))%20{matchTxt%20=%20url.match(devUrlReg);for%20(key%20in%20urlPairs)%20{if%20(urlPairs.hasOwnProperty(key))%20{if%20(matchTxt%20==%20urlPairs[key]){replaceTxt%20=%20key;}}}targetUrl%20=%20url.replace(devUrlReg,%20replaceTxt);window.open(targetUrl);}%20else%20{matchTxt%20=%20url.match(genUrlReg);for%20(key%20in%20urlPairs)%20{if%20(urlPairs.hasOwnProperty(key))%20{if%20(matchTxt%20==%20key){replaceTxt%20=%20urlPairs[key];}}}targetUrl%20=%20url.replace(matchTxt,%20replaceTxt);window.open(targetUrl);}})();