var Config = (function() {
    //dicionário *privado* de diretórios da aplicação
    var _directories = {
      images: '../resources/images',
      scripts: '../resources/js',
      libs: '../resources/libs',
      styles: '../resources/css',
      static_content: '/static'
    };

    //função *privada* que retorna uma lista de chaves dos diretórios disponiveis
    function _getList() {
      var keyList = []
      

      for( key in _directories) {
        keyList.push(key);
      }
      return keyList;
    }

    //função *privada* que retorna o valor de um diretório a partir de sua chave
    function _getValue(key) {
       if(key in _directories) {
         return _directories[key];
       }
       return null;
     }

     //objeto público que permite a leitura de diretórios
    return {
      getList: _getList,
      getValue: _getValue
    };
 }());

 var firstKey = Config.getList()[0];
 console.log(Config.getList())
 console.log(Config.getValue(firstKey))