export function Init(){
    return {
        types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: 'controller.php',
        select:'select * from user',
        method: 'post'
    }
}

export function Delete(user_id){
	let other = `delete from user where \`user_id\`=${user_id}`;
	return {
		types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: 'controller.php',
        other: other,
        method: 'post'
	}
}
