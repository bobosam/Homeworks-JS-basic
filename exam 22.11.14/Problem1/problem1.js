function daggersSwords (input){
    var type = '';
    var application = '';
    var tmp;

    console.log('<table border="1">');
    console.log('<thead>');
    console.log('<tr><th colspan="3">Blades</th></tr>');
    console.log('<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>');
    console.log('</thead>');
    console.log('<tbody>');

    for(var i = 0;i < input.length; i++){

        var currentValue = parseInt(input[i]);
        if(currentValue > 10){
            if(currentValue > 40){
                type = 'sword';
            }
            else{
                type = 'dagger';
            }

            tmp = currentValue %5;
            if(tmp == 1 ){
                application = 'blade';
            }
            if(tmp == 2 ){
                application = 'quite a blade';
            }
            if(tmp == 3 ){
                application = 'pants-scraper';
            }
            if(tmp == 4 ){
                application = 'frog-butcher';
            }
            if(tmp == 0 ){
                application = '*rap-poker';
            }

            console.log('<tr><td>'+currentValue+'</td><td>'+type+'</td><td>'+application+'</td></tr>')

        }




    }

    console.log('</tbody>');
    console.log('</table>');

}
