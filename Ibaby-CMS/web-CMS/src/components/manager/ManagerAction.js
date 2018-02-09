export function Init(){
    return {
        types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: 'controller.php',
        select:'select * from manager',
        method: 'post'
    }
}
export function Edit(newData){
    console.log(newData)
	let other=`update manager set manager_name='${newData.name}', status='${newData.status}', password='${newData.password}' where manager_id = ${newData.id}`;
	return {
		types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: 'controller.php',
        other: other,
        method: 'post'
	}
}
export function Delete(key){
	let other = `delete from manager where manager_id=${key}`;
	return {
		types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: 'controller.php',
        other: other,
        method: 'post'
	}
}
export function Select(key){
    let select = `select * from manager where manager_name="${key}"`;
    return {
        types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: 'controller.php',
        select:select,
        method: 'post'
    }
}
export function Add(data){
    console.log(data)
    let other = `insert into manager (manager_name, status, password) values ('${data.manager_name}','${data.status}','${data.password}')`;
    return {
        types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: 'controller.php',
        other: other,
        method: 'post'
    }
}