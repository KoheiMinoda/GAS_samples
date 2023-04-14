function createChart() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var chart = sheet.newChart()
      .addRange(sheet.getRange('A41:D52'))
      .setPosition(5, 5, 0, 0)
      .setOption('hAxis', {title: '相対日付', slantedText: true})
      .setOption('vAxis', {viewWindow: {min: -0.5, max: 1.25}})
      .setOption('vAxis', {title: '業績予想・実績'})
      .setOption('vAxis', {viewWindow: {min: 100000, max: 1000000}})
      .setOption('title', '業績予想')
      .setChartType(Charts.ChartType.LINE)
            .setOption('legend', {
        position: 'top',
        series : {
          0: { labelInLegend: '系列1' },
          1: { labelInLegend: '系列2' },
          2: { labelInLegend: '系列3' }
        }
        })
      .setOption('series', {
        0: {pointSize: 4},
        1: {pointSize: 4}
        })
      .setOption('series', {2: {pointSize: 4}})
      .build();
  sheet.insertChart(chart);
}
