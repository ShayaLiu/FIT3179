// Embed the map
vegaEmbed('#map', 'choropleth.json').catch(console.error);

// Embed the line chart
vegaEmbed('#line', 'linechart.json').catch(console.error);

// Embed the bar chart
vegaEmbed('#bar-chart', 'bar-chart.json').then(result => {
  console.log("Bar chart loaded successfully!");
}).catch(error => {
  console.error("Error loading bar chart:", error);
});

// Embed the dot plot
vegaEmbed('#dot-plot', 'dot-plot.json').then(result => {
  console.log("Dot plot loaded successfully!");
}).catch(error => {
  console.error("Error loading dot plot:", error);
});

// Embed the pie chart
vegaEmbed('#pie-chart', 'pie-plot.json').catch(console.error);
