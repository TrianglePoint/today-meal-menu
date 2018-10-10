const request = require('request');
const cheerio = require('cheerio');

let menu = '';

function load_data(url,callback){
    request(url, (err, res, body)=>{
        if(err) {throw err};
        
        const $ = cheerio.load(body);
        const parent = $('dl', $('.food'));
        const dt_date = $('dt', parent);
        const class_data = $($('.data'),'dd',parent);
        
        dt_date.each(function(){
            menu = '<h1>' + $(this).text() + '</h1><hr />';
        });
        class_data.each(function(index,elem){
            const meal = $(this).text();
            $($('.tit0' + (index+1)),parent).each(function(){
                menu += '<h2>' + $(this).text() + '</h2>' + '<p>' + meal + '</p>';
                if(index == 2){
                    return callback(menu);
                }
            });
        });
    });
}

module.exports = {
    loadData: load_data
};