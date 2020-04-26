
export const updateFilterItems = (state, payload) => {
    // //   return state.SHOP_DATA.filter(val=>{
    // //      return val.items.includes(payload)
    // //  })
    // console.log("----------", state.SHOP_DATA, payload);
    // return state.SHOP_DATA;
    return state.SHOP_DATA.slice(0,Math.floor(Math.random() * 8) + 1);
};