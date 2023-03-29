async function sendMessageToTelegramGroup(headline,message){
	let myMessage = `<b>${headline}</b> %0A ${message}`
	let token = "5832961787:AAEWJHSdti9H4V7r2DKH1uvQrvCz652SIEY";
	let chat_id = "@bjp";
	let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`
	let api = new XMLHttpRequest();
	api.open("GET", url, true);
	api.send();
	console.log("Message sent successfully");
}