      // Returns a random integer between min (included) and max (excluded)
      // Using Math.round() will give you a non-uniform distribution!
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + 1) + min;
      }
      // creat a calculation and display the number of donuts
      function DonutsShop (location, MinPerHour, MaxPerHour, AvgPerCustomer, hourOp) {
        this.id = 0;
        this.location = location;
        this.numPerHour = 0;
        this.numPerDay = 0;
        this.MinPerHour = MinPerHour;
        this.MaxPerHour = MaxPerHour;
        this.hourOp = hourOp;
        this.AvgPerCustomer = AvgPerCustomer;

        this.getDonutsPerHour = function() {
          this.numPerHour = Math.floor(Number(this.AvgPerCustomer) * getRandomInt(Number(this.MinPerHour), Number(this.MaxPerHour)));
        };
        this.getDonutsPerDay = function() {
          this.numPerDay = Number(this.hourOp) * this.numPerHour;
        };
      }

      // Create a DonutMaster object with two methods
      function DonutMaster() {
        this.shops = [];
        this.addShop = function(location, MinPerHour, MaxPerHour, AvgPerCustomer,hourOp) {
          // create a shop
          var shop = new DonutsShop(location, MinPerHour, MaxPerHour, AvgPerCustomer,hourOp);
          // add a new DonutShop to the list
            this.shops.push(shop);
            shop.id = this.shops.length - 1;
            return shop;
        };

        this.generateReport = function() {
          // loop all list, with for loop
          for(var i = 0; i < this.shops.length; i++) {
            this.shops[i].getDonutsPerHour();
            this.shops[i].getDonutsPerDay();
            console.log("Make " + this.shops[i].numPerHour + " donuts per hour, and make " + this.shops[i].numPerDay + " donuts per day");
          }
        };
      }
