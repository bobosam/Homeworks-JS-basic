function extractHyperlinks (input){
    var html = input.join('\n');
    var regex = /<a\s+([^>]+\s+)?href\s*=\s*('([^']*)'|"([^"]*)|([^\s>]+))[^>]*>/g;
    var match;
    while(match = regex.exec(html)){
        var href = match[3];
        if(href == undefined){
           var href = match[4];
        }
        if(href == undefined){
            var href = match[5];
        }
        console.log(href);
    }
}