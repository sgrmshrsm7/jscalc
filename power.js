function jscalc(result){
		form.display_result.value = form.display_result.value + result;
		//if (form.display_result.value % 1 != 0){
	//form.display_result.value = form.display_result.value.toFixed(4);
	//}
}
function backspace(){
	var value = form.display_result.value;
	form.display_result.value = value.substr(0, value.length - 1);
}
