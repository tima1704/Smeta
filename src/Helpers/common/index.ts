export namespace URLS {
	export namespace AUTH {
		export const LOGIN = '/login'
		export const REGISTER = '/register'
	}
	export const $HOME = "/";

	export const ADD_SMETA = "/add_smeta";
	export const SMETA = "/smeta";
	export const GET_SMETA_BYID = "/smeta/:id";
	export const SMETA_ITEM_ID = (id: string | number) => "/smeta/id:" + id;

	export const ERROR_PAGE = "*"
	// export const AUTH = "/auth";
}
