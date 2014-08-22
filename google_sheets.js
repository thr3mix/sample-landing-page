var DATA_SPREADSHEET_ID = "1vYxMgaQdqRr20nN5I6gfeBKYUR4EztOf3hc5ERpM84o/pubhtml"

function runExample() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];

  var dataSs = SpreadsheetApp.openById(DATA_SPREADSHEET_ID);
  var dataSheet = dataSs.getSheets()[0];

  // Fetch all the data
  var data = getRowsData(dataSheet);

  // This is the data we want to display
  var columnNames = ["Name", "Quote", "Type"];

  var dataByType = {};
  var type = [];
  for (var i = 0; i < data.length; ++i) {
    var rowData = data[i];
    if (!dataByType[rowData.type]) {
      dataByType[rowData.type] = [];
      types.push(rowData.type);
    }
    dataByType[rowData.type].push(rowData);
  }

}