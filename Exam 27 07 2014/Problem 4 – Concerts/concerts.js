function concerts(input){
    var concertInfo = {};
    var regex = /([A-za-z ]+)\|([A-za-z ]+)\|([\d\-A-za-z\-\d ]+)\|([A-za-z ]+)/;
    for( var i = 0 ; i<input.length; i++){
        var match = regex.exec(input[i]);
        var town = match[2].trim();
        var band = match[1].trim();
        var venue = match[4].trim();

        if(!concertInfo[town]){
            concertInfo[town]={};
        }

        if(!concertInfo[town][venue]){
            concertInfo[town][venue] = [];
        }
        if(concertInfo[town][venue].indexOf(band)== -1){
            concertInfo[town][venue].push(band);
        }
    }
    function sortObjectProperties(obj){
        var keysSorted = Object.keys(obj).sort();
        var sortedObj = {};
        for(var i = 0; i < keysSorted.length; i++){
            var key = keysSorted[i];
            sortedObj[key] = obj[key]
        }
        return sortedObj;
    }

    concertInfo = sortObjectProperties(concertInfo);
    for(var town in concertInfo){
        concertInfo[town] = sortObjectProperties(concertInfo[town]);
        for(var venue in concertInfo[town]) {
            concertInfo[town][venue].sort();
        }
    }

    console.log(JSON.stringify(concertInfo));
}


