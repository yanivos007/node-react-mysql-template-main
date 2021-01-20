


export const post = async (url, data) => {
	try {
		const response = await fetch('/api'+ url + '/post', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		});
		return parseResponse(response);
	} catch (err) {
		return err;
	}
}

export const get = async (url) => {
	try {
		const response = await fetch('/api'+ url);
		return parseResponse(response);
	} catch (err) {
		return err;
	}
}


const parseResponse = async response => {
	const result = await response.json();
	if (response.status === 200) {
		return {data: result};
	}
	return {errors: result.errors};
}
