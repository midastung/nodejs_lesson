'use strict';
var reSizeGrid=this.reSizeGrid?(()=>{throw new Error()})():{};
$(() => {
  reSizeGrid.gridSelector = "#grid";
  reSizeGrid.pagerSelector = reSizeGrid.gridSelector + "Toppager";  
  reSizeGrid.$grid = $(reSizeGrid.gridSelector);
  //重整Grid大小
  reSizeGrid.reSizejqGridWidth= () => { 
    //重新抓jqGrid容器的新width
    let newWidth = reSizeGrid.$grid.closest(".ui-jqgrid").parent().width();
    //是否縮齊column(相當於shrinkToFit)
    let shrinkToFit = true;
    reSizeGrid.$grid.jqGrid("setGridWidth", newWidth, shrinkToFit);
  } 
  reSizeGrid.reSizejqGridWidth(); 
  //當使用者改變瀏覽器視窗大小時
  $(window).on("resize", reSizeGrid.reSizejqGridWidth);

  $(window).resize(() => {
    var outerwidth = $('#grid').width();
    $('#grid').setGridWidth(outerwidth); // setGridWidth method sets a new width to the grid dynamically
  });
});