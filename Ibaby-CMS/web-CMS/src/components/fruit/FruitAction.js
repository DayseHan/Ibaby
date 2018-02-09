export function Init(){
    return {
        types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: 'controller.php',
        select:'select * from goodslist',
        method: 'post'
    }
}
export function Edit(newData){
	let other=`update goodslist set name='${newData.name}',  title='${newData.title}', oldPrice='${newData.oldPrice}', zhekou='${newData.zhekou}',buyNum='${newData.buyNum}', size='${newData.size}',color='${newData.color}', listsId='${newData.listsId}', brandId='${newData.brandId}' , imgurl='${newData.imgurl}',groundImg='${newData.groundImg}'  where goodslist_id='${newData.id}'`;
	console.log(newData)
    return {
		types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: 'controller.php',
        other: other,
        method: 'post'
	}
}
export function Add(data){
    let other = `insert into goodslist (name, title, oldPrice, zhekou,buyNum, size, color, listsId,brandId, imgurl,groundImg) values ("${data.name}", "${data.title}", ${data.oldPrice}, ${data.zhekou}, "${data.buyNum}", "${data.size}", "${data.color}","${data.listsId}","${data.brandId}", "${data.imgurl}","${data.groundImg}")`;
    console.log(other)
    return {
        types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: 'controller.php',
        other: other,
        method: 'post'
    }
}
export function Delete(id){
	let other = `delete from goodslist where \`id\`=${id}`;
	return {
		types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: 'controller.php',
        other: other,
        method: 'post'
	}
}