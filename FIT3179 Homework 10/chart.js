// Load the Vega-Lite chart from the JSON file
vegaEmbed('#vis', 'chart_config.json').then(function(result) {
    console.log(result.view);
  }).catch(console.error);

// Vega-Lite specification for the interactive line chart
const lineChartSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 400,
  "height": 300,
  "data": {
    "values": [
      {"State": "Australian Capital Territory", "Year": "2018", "Earnings": 1300},
      {"State": "Northern Territory", "Year": "2018", "Earnings": 1250},
      {"State": "New South Wales", "Year": "2018", "Earnings": 1071},
      {"State": "Western Australia", "Year": "2018", "Earnings": 1189},
      {"State": "Australian Capital Territory", "Year": "2023", "Earnings": 1550},
      {"State": "Northern Territory", "Year": "2023", "Earnings": 1427},
      {"State": "New South Wales", "Year": "2023", "Earnings": 1339},
      {"State": "Western Australia", "Year": "2023", "Earnings": 1339}
    ]
  },
  "mark": {
    "type": "line",
    "point": true
  },
  "encoding": {
    "x": {
      "field": "Year",
      "type": "ordinal",
      "title": "Year"
    },
    "y": {
      "field": "Earnings",
      "type": "quantitative",
      "title": "Median Weekly Earnings ($)"
    },
    "color": {
      "field": "State",
      "type": "nominal",
      "title": "State/Territory"
    },
    "tooltip": [
      {"field": "State", "type": "nominal", "title": "State"},
      {"field": "Year", "type": "ordinal", "title": "Year"},
      {"field": "Earnings", "type": "quantitative", "title": "Earnings ($)"}
    ],
    "opacity": {
      "condition": {
        "selection": "StateSelect",
        "value": 1
      },
      "value": 0.2
    }
  },
  "selection": {
    "StateSelect": {
      "type": "multi",
      "fields": ["State"],
      "bind": {
        "input": "select",
        "options": [
          "Australian Capital Territory",
          "Northern Territory",
          "New South Wales",
          "Western Australia"
        ]
      }
    }
  }
};

// Render the interactive line chart
vegaEmbed('#interactive-vis', lineChartSpec).then(result => {
  console.log("Line chart rendered successfully");
}).catch(console.error);