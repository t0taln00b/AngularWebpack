export default class Service {
	static get $inject(){ return ['$cookies']; }

	constructor($cookies){
		this.$cookies = $cookies;
		this.settings = { path: '/' };
	}

	setCookie(key, value){
		this.$cookies.put(key, value, this.settings);
	}

	getCookie(key){
		return this.$cookies.get(key);
	};

	setCookieObject(key, value){
		this.$cookies.putObject(key, value, this.settings);
	}

	getCookieObject(key){
		let val;
		try{
			val = this.$cookies.getObject(key);
		}catch(err){
			console.error(err);
			val = {};
		}
		return val;
	};

	removeCookie(key){
		return this.$cookies.remove(key);
	}
}
