function simulate(){
    var face1 = {
        x: [],
        y: [],
        mode: 'lines',
        name: 'Face 1'
    };
    var face2 = {
        x: [],
        y: [],
        mode: 'lines',
        name: 'Face 2'
    };
    var face3 = {
        x: [],
        y: [],
        mode: 'lines',
        name: 'Face 3'
    };
    var face4 = {
        x: [],
        y: [],
        mode: 'lines',
        name: 'Face 4'
    };
    var face5 = {
        x: [],
        y: [],
        mode: 'lines',
        name: 'Face 5'
    };
    var face6 = {
        x: [],
        y: [],
        mode: 'lines',
        name: 'Face 6'
    };

    var n = document.getElementById("qtd").value;
    times = [0,0,0,0,0,0];
    for (var i = 0; i < n; i++){
        var rand = Math.floor((Math.random() * 6));
        times[rand] = times[rand] + 1;

        face1.x[i] = i;
        face1.y[i] = times[0]/i;
        face2.x[i] = i;
        face2.y[i] = times[1]/i;
        face3.x[i] = i;
        face3.y[i] = times[2]/i;
        face4.x[i] = i;
        face4.y[i] = times[3]/i;
        face5.x[i] = i;
        face5.y[i] = times[4]/i;
        face6.x[i] = i;
        face6.y[i] = times[5]/i;

    }

    var data = [face1, face2, face3, face4, face5, face6];

    var layout = {
        title:'Frequência X Lançamentos',
        height: 600,
        //width: 1000,
        xaxis: { title: 'Lançamentos'},
        yaxis: { title: 'Frequência'}
    };

    Plotly.newPlot('graph', data, layout);
}

