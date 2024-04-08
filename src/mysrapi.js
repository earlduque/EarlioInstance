import { GlideCurrencyConfig, gs } from '@servicenow/glide'
import { GlideRecord } from '@servicenow/glide'
// import { RESTAPIRequest } from '@servicenow/glide';
// import { RESTAPIResponse } from '@servicenow/glide';

export const getPoints = function (request, response) {
	const user_id = request.queryParams.user_id + '';
	const user_name = request.queryParams.user_name + '';
	const commandType = request.queryParams.commandType + '';

	// gs.info(`sammi id: ${user_id}`);

	let points = 0;

	if (user_id){
		const userGr = new GlideRecord('x_snc_sndp_twitch_presence');
		if (userGr.get("user_id", user_id)){
			points = parseInt(userGr.getValue(commandType));
			user_name = userGr.getValue('user_name');
			if (userGr.getValue('real') === '0'){
				userGr.setValue('real', '1');
				userGr.update();
			}
		}
	}

	const responseMessage = points == 0 ? `I don't see any ${commandType} for ${user_name} yet!` : `${user_name}'s ${commandType} is ${points}`;
	response.setStatus(200);
	response.setContentType('text/plain');
	response.setBody({"responseMessage": responseMessage});
}

export const recordPresence = function (request, response) {

    // in a scripted REST API, set the request's request body to the variable requestResponse
    const requestBody = request.body;
	const requestData = JSON.parse(requestBody.dataString);

    // gs.info('Presence payload: ' + JSON.stringify(requestData));

    // create a record on the x_snc_sndp_twitch_presence table for each object in the array requestData.data
    for (let i = 0; i < requestData.data.length; i++) {
		const data = requestData.data[i];
		const records = new GlideRecord('x_snc_sndp_twitch_presence');
		if (records.get('user_id', data.user_id)){
			const points = parseInt(records.getValue('score') || 10);
			records.setValue('score', points + 10);
			const currency = parseInt(records.getValue('currency') || 10);
			records.setValue('currency', currency + 10);
			if (records.getValue('user_name') != data.user_name) records.setValue('user_name', data.user_name);
			if (records.getValue('user_login') != data.user_login) records.setValue('user_login', data.user_login);
			records.update();
		} else {
			records.initialize();
			records.setValue('user_id', data.user_id);
			records.setValue('user_name', data.user_name);
			records.setValue('user_login', data.user_login);
			records.setValue('score', 10);
			records.setValue('currency', 10);
			records.insert();
		}
	}

    const responseMessage= [];
	const realPeopleQuery = 'real=true^currency>50'; //'real=true^real=true^currency!=0';
	const currencyGr = new GlideRecord('x_snc_sndp_twitch_presence');
	currencyGr.addEncodedQuery(realPeopleQuery);
	currencyGr.query();
	while (currencyGr.next()){
		// const chatter = {
		// 	// 'user_id': currencyGr.getValue('user_id'),
		// 	'user_name': currencyGr.getValue('user_name'),
		// 	'currency': currencyGr.getValue('currency')
		// };
		// responseMessage[currencyGr.getValue('user_id')] = chatter;

		responseMessage.push(currencyGr.getValue('user_id'));
	}


	// build a response to this scripted rest api request that returns 200 success code and a text response
	response.setStatus(200);
	response.setContentType('application/json');
	response.setBody(responseMessage);
	// response.setBody(responseMessage);
	// const writer = response.getStreamWriter();
	// writer.writeStream(responseMessage);
}