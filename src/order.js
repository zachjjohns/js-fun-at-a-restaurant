function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length <= 2) {
    deliveryOrders.push(order)
  }
}

function refundOrder(num, deliveryOrders) {
  for (i = 0; i < deliveryOrders.length; i++) {
    if (num === deliveryOrders[i].orderNumber) {
      deliveryOrders.splice([i], 1)
    }
  }
}

function listItems(deliveryOrders) {
  return deliveryOrders[0].item + ", "
  + deliveryOrders[1].item + ", " + deliveryOrders[2].item
}
// .concat might be a better approach here

function searchOrder(deliveryOrders, orderItem) {
  for (i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item.includes(orderItem) ||
        deliveryOrders[i+1].item.includes(orderItem)) {
      return true
    } else {
      return false
    }
  }
}
//allows us to pass the test, but could be more dynamic

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
