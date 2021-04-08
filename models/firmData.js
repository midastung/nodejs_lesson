const db = require('./getDB');
const query = db.query;

exports.firmData = async(req, res)=>{
    let firmItemList = []
    let getFirmItem = await query("SELECT FI_id, Firm_id, FI_name FROM FIRM_ITEM;");
    for(let i = 0; i<getFirmItem.length; i++){
        let fiId = getFirmItem[i].FI_id;       //FI_id對資料庫欄位
        let firmId = getFirmItem[i].Firm_id;
        let fiName = getFirmItem[i].FI_name;
        firmItemList.push({fiId: fiId, firmId: firmId, fiName: fiName,})
    }
    return firmItemList;
}
module.exports = exports;