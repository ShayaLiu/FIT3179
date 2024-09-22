// Load the Vega-Lite chart from the JSON file
vegaEmbed('#vis', 'chart_config.json').then(function(result) {
    console.log(result.view);
  }).catch(console.error);
  