(function(){
    //defining canvas
    var margin = {top: 0,left: 0, right: 0, bottom: 0},
        height = 400 - margin.top - margin.bottom,
        width = 800 - margin.left - margin.right;

    //boilerplate
    var svg = d3.select("#map")
        .append("svg")
        .attr("height", height + margin.top + margin.bottom)
        .attr("width", width + margin.left + margin.right)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //map
    d3.queue()
        .defer(d3.json, "us.json")
        .await(ready)

    var projection = d3.geoMercator()
        .translate([ width / 2, height / 2])
        .scale(100)

    var path = d3.geoPath()
        .projection(projection)

    function ready (error, data) {
        console.log(data)   
    }




    
    })();