// Congratulations! You've just been hired as employee #30,201 by that venerable purveyor of cash registers, NCR Corporation, aka National Cash Register.

// Your first task is to sketch out the object-oriented design and stubbed-out skeleton of a new cash register system called The Cashinator 3000.

// The skeleton of your O-O design, including class names with well-named stub methods and properties, is what you're going to submit at the end of this exercise.

// Identify your core data structures and illustrate your thinking by filling in some sample data for them.




// As a cashier, I can initialize the cash register with a price list in a simple comma-delimited format. The price list contains product names, SKU's (stock-keeping units, i.e., the product id), the price per unit, and whether the product is taxable. (Staple groceries are typically not taxable.)
// As a cashier, I can initialize the register with a starting amount of money.
// As a cashier, I can initialize the register with a sales tax percentage.
// As a cashier, when I am not actively handling a customer transaction, I can choose to view the current balance of cash that the register contains.
// As a cashier, I can start a new transaction. Transactions have id's and are time-stamped upon creation.
  // As a cashier, I can scan one item, whereupon that item is added to the transaction.
  // As a customer, I can see the last item scanned and a running subtotal of the current transaction cost.
  // As a cashier, I can input the money received from the customer, thus closing out the transaction.
  // Change is calculated to minimize the number of bills and coins that must be handled by the cashier.
  // As a customer, I can see the grand total and how much change I am to receive.
  // As a customer, I can see an itemized receipt of my purchases.
// As a cashier, I can view a report of all the transactions that have occurred since register initialization. Transactions are listed by id, # of items purchased, and the transaction amount.
// As a cashier, I can search all items purchased since register initialization. I can do a partial string match on product name.

// Again, do not construct a user interface for this application -- but do create a clean API (not a client-server API, mind you, a code API) that will allow the future UI layer of The Cashinator 3000 to render the data in a variety of ways, decoupled from the business logic of generating that data.



class cashinator () {
  constructor(arrPrices, startingCash, salesTax) {
    this.arrPrices = arrPrices;
    this.startingCash = startingCash;
    this.salesTax = salesTax;
    this.priceStorage = {};
    this.currentCash = startingCash;
    this.transactionCount = 0;
  }
  savePrices () {
    // take each item in the arrPrices and store it as different objects in an object priceStorage for O(1) lookup
    // each item will be an instantiation of the class PRODUCTS
      // keys for each item will be its unique SKU; all other attributes will be stored as an object as the value
      priceStorage = {
        182398: {
          productName: 'corn flakes',
          pricePerUnit: 5,
          taxable: true,
        },
        182889: {
          productName: 'barley',
          pricePerUnit: 99,
          taxable: false,
        }
      };
  }
  getCurrentCash () {
    return this.currentCash;
  }
  startNewTransaction (transactionCount) {
    // instantiate a new object of class TRANSACTION
      // new transactions will have these properties:
      transaction1004 = {
        creationTime: 18273797877, /* Math involving Date.now() to figure out current date/time */
        transactionId: 1004, /* determined by the cashier's current transaction count */
        itemsScanned = [],
        lastItemScanned = itemsScanned[itemsScanned.length - 1],
        runningSubtotal = 0;
      }

      // These are methods of the transaction class
      transaction.scanItem = (SKUNumber) => {
        this.itemsScanned.push(/* cashinator's instance priceStorage item by SKU number */);
        this.runningSubtotal += this.itemsScanned[this.itemsScanned.length - 1].pricePerUnit
      }
      transaction.returnSubtotal = () => {
        return this.runningSubtotal;
      }
      transaction.closeTransaction(customerPayment) => {
        // some calculation that will return the least number of bills/coins possible to make change
        return this.change;
      }
      transaction.provideReceipt = () => {
        let receipt = {
          runningSubtotal: 124,
          itemsScanned: [],
        };
        return receipt
      }
  }

}