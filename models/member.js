const db = require('./getDB');
const query = db.query;

exports.member = async(req, res) =>{
  let memberList = [];
  let getList = await query('SELECT Member_id, Member_name, Member_phone from MEMBER');
  for (let i = 0; i < getList.length; i++) {
    let memberId = getList[i].Member_id;
    let memberName = getList[i].Member_name;  
    let memberPhone = getList[i].Member_phone;    
    memberList.push({ memberId: memberId, memberName: memberName, memberPhone: memberPhone})
  }
  return memberList;
}