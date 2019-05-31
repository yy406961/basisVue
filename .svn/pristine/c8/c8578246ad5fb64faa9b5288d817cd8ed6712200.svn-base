
;(function(){

    let hunanMap = [
        'hunan',
        'changsha',
        'zhuzhou',
        'changde',
        'chenzhou',
        'hengyang',
        'huaihua',
        'loudi',
        'shaoyang',
        'xiangtan',
        'yiyang',
        'yongzhou',
        'yueyang',
        'zhangjiajie',
        'xiangxi'
    ]

    /**
     * [loadProvMaps 加载省级地图 ]
     * @param  {[type]} prov [description]
     * @return {[type]}      [description]
     */
    function loadProvMaps(prov, maps){
        let addScript = src => {
            var script=document.createElement('script');
            script.src=src;
            script.async = true;
            document.body.appendChild(script)
        }
        var fixed =  `./lib/vendor/echarts/${prov}/`;
        for(let i = 0 ; i<maps.length;i++){
            let path = fixed + maps[i] + '.js';
            addScript(path)
        }
    }

    loadProvMaps('hunan', hunanMap)
})()
