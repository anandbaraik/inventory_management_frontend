export const ADD_ITEM = "ADD_ITEM";
export const DATA_LOADED = "DATA_LOADED";
export const LOADING = "LOADING";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const LOAD_SALE = "LOAD_SALE";
export const ADD_SALE = "ADD_SALE";
export const ERROR = "ERROR";

export const formatNumber = (num) => {
  return new Intl.NumberFormat('en-US').format(num);
}

export const MENUS = [
    {
      id: 'f5f0d953-5d50-4093-877a-87480da7b0ab',
      name: "Inventory",
      route: "/",
    },
    {
      id: 'f5f0d953-5d50-4093-wq21a-87480da7b0ab',
      name: "Sales",
      route: "/sales",
    },
    {
      id: 'f5f0d953-78ws-4093-877a-87480da7b0ab',
      name: "Reports",
      route: "/reports",
    },
  ];