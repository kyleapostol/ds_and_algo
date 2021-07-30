const isFirstComeFirstServed = (takeOutOrders, dineInOrders, servedOrders) => {
    // Check if we're serving orders first-come, first-served
  console.log('take out orders: ', takeOutOrders);  
  console.log('dine in orders: ', dineInOrders);  
  console.log('served orders: ', servedOrders);  

  //base case
  if(servedOrders.length === 0){
    return true;
  }

    // if the first order in servedOrders is the same as the
    // first order in takeOutOrders
    // (making sure first that we have an order in takeOutOrders)
    if (takeOutOrders.length && takeOutOrders[0] === servedOrders[0]) {

      // take the first order off takeOutOrders and servedOrders and recurse
      return isFirstComeFirstServed(takeOutOrders.slice(1), dineInOrders, servedOrders.slice(1));

  // if the first order in servedOrders is the same as the first
  // in dineInOrders
  } else if (dineInOrders.length && dineInOrders[0] === servedOrders[0]) {

      // take the first order off dineInOrders and servedOrders and recurse
      return isFirstComeFirstServed(takeOutOrders, dineInOrders.slice(1), servedOrders.slice(1));

  // first order in servedOrders doesn't match the first in
  // takeOutOrders or dineInOrders, so we know it's not first-come, first-served
  } else {
      return false;
  }
}

export { isFirstComeFirstServed }

// const takeOutOrders = [1, 3, 5];
// const dineInOrders = [2, 4, 6];
// const servedOrders = [1, 2, 4, 6, 5, 3];

/*
What should be true of this customer order number if my service is first-come, first-served?
-Lets me know which order came first


*/