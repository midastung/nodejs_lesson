"use strict";

var getfirmdata = this.getfirmdata ? (() => { throw new Error() }) : {};
$(() => {
  jQuery("#grid").jqGrid({           //對應table id
    url: '/api/getfirmdata',
    datatype: "json",
    mtype: "POST",
    colNames: ['編號', '廠商', '產品名'],
    colModel: [
      { name: 'fiId', index: 'fiId'},
      { name: 'firmId', index: 'firmId'},
      { name: 'fiName', index: 'fiName'},
    ],
    rowNum: 20,
    rowList: [10, 20, 30],
    pager: '#pager',                //對應上面div
    sortname: 'id',
    viewrecords: true,
    sortorder: "desc",
    loadonce: false,
    caption: "Load Once Example"
  });
  
   //關閉額外按鈕
   $('#grid').jqGrid('navGrid', '#pager', {
    edit:true,
    add:true,
    del:true,
    search:false,
    refresh:false,
  });

});



