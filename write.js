function write_text(res, text,callback){
    res.write(text);
    return callback();
}

module.exports={
    text: write_text
};