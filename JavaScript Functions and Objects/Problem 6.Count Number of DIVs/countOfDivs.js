var inputData =(
'    <!DOCTYPE html>                              ' +
'<html>                                           ' +
'<head lang="en">                                 ' +
'    <meta charset="UTF-8">                       ' +
'    <title>index</title>                         ' +
'    <script src="/yourScript.js" defer></script> ' +
'</head>                                          ' +
'<body>                                           ' +
'    <div id="outerDiv">                          ' +
'        <div                                     ' +
'    class="first">                               ' +
'            <div><div>hello</div></div>          ' +
'        </div>                                   ' +
'        <div>hi<div></div></div>                 ' +
'        <div>I am a div</div>                    ' +
'    </div>                                       ' +
'</body>                                          ' +
'</html>'
);

function countDivs(html){
    var regex = /(<div[^>]*>)/g;
    var match;
    var count=0;
    while(match=regex.exec(html)){
        count++;
    }
    return count;
}


console.log('Count of divs --> ' + countDivs(inputData));