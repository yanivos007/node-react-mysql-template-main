


export const post = async (url, data) => {
	try {
		const response = await fetch('/api/'+ url , {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		});
		const result = await response.json();
		if(result.status === 200){
			return {data: result}
		}else{
			return 'error'
		}
	} catch (err) {
		return err;
	}
}

export const get = async (url) => {
	try {
		const response = await fetch('/api'+ url);
		const result = await response.json();
		if (response.status === 200) {
			return {data: result};
		}else{
			return 'error'
		}
	}catch (err) {
		return err;
	}
}




