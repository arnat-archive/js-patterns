// It is used to minimize memory usage or computational expenses
// by sharing as much as possible with similar objects.

class KarakTea {}

export class TeaMaker {
  availableTea?;
  constructor() {
    this.availableTea = {};
  }

  make(preference) {
    this.availableTea[preference] =
      this.availableTea[preference] || "KarakTea " + preference;
    return this.availableTea[preference];
  }
}

export class TeaShop {
  orders?;
  teaMaker?;
  constructor(teaMaker) {
    this.teaMaker = teaMaker;
    this.orders = [];
  }

  takeOrder(teaType, table) {
    this.orders[table] = this.teaMaker.make(teaType);
  }

  serve() {
    let orders = "";
    this.orders.forEach((order, index) => {
      orders = orders + " " + "#" + index + " " + order;
    });
    return orders;
  }
}

// const teaMaker = new TeaMaker()
// const shop = new TeaShop(teaMaker)

// shop.takeOrder('less sugar', 1)
// shop.takeOrder('more milk', 2)
// shop.takeOrder('without sugar', 5)

// shop.serve()
