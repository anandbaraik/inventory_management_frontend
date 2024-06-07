import axios from "axios";
import {ADD_ITEM, ADD_SALE, DATA_LOADED, LOADING, LOAD_SALE, REMOVE_ITEM, UPDATE_ITEM, ERROR} from "../utils";

export const addItem = (item) => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/items/add-item`, {
			...item,
		});
		dispatch({ type: ADD_ITEM, payload: response.data.data });
	} catch (error) {
		dispatch({ type: ERROR });
	}
};

export const fetchItem = () => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/items/items`);
		dispatch({ type: DATA_LOADED, payload: response.data.data });
	} catch (error) {
		dispatch({ type: ERROR });
	}
};

export const deleteItem = (itemId) => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/items/${itemId}`);
		dispatch({ type: REMOVE_ITEM, payload: itemId });
	} catch (error) {
		dispatch({ type: ERROR });
	}
};

export const editItem = (itemId, updatedItem) => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/items/${itemId}/update`, {
			...updatedItem,
		});
		dispatch({ type: UPDATE_ITEM, payload: response.data.data });
	} catch (error) {
		dispatch({ type: ERROR });
	}
};

export const loadSales = () => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/sales/sales`);
		dispatch({ type: LOAD_SALE, payload: response.data.data });
	} catch (error) {
		dispatch({ type: ERROR });
	}
};

export const addSale = (newSale) => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/sales/add-sale`, {
			...newSale,
		});
		dispatch({ type: ADD_SALE, payload: response.data.data });
	} catch (error) {
		dispatch({ type: ERROR });
	}
};