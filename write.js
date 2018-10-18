function write_text(res, text,callback){
    const html_onetwo = ['<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">' +
                         '<title>Warframe Viewer</title></head><body>', '</body></html>]';
    res.write(html_onetwo[0] + text + html_onetwo[1]);
    return callback();
}

module.exports={
    text: write_text
};
