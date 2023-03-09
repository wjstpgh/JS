//shopping
const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchase: [],
};

let amzHistory = [];

//Shopping usecase
// 1. Add items to cart
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchase
// 4. Empty cart
// 5. Accept refunds
// 6. Track user history

const compose =
  (f, g) =>
  (...args) =>
    f(g(...args));

purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItems,
  addItemToCart
)(user, { name: "phone", price: 200 });

function purchaseItem(...fns) {
  amzHistory.push(user);
  return fns.reduce(compose);
}

function addItemToCart(user, item) {
  const updateCart = user.cart.concat(item);
  return Object.assign({}, user, { cart: updateCart });
}

function applyTaxToItems(user) {
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map((item) => {
    return { name: item.name, price: item.price * taxRate };
  });
  return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
  return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
  return Object.assign({}, user, { cart: [] });
}

//if i want to add another func
function refundItem() {
  //just go back history of user
}
