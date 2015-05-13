
      // Returns a random integer between min (included) and max (excluded)
      // Using Math.round() will give you a non-uniform distribution!
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + 1) + min;
      }
      // creat a calculation and display the number of donuts
      function DonutsShop (location, MinPerHour, MaxPerHour, AvgPerCustomer) {
        this.location = location;
        this.MinPerHour = MinPerHour;
        this.MaxPerHour = MaxPerHour;
        this.AvgPerCustomer = AvgPerCustomer;

        this.getDonutsPerHour = function() {
          var numPerHour = Math.floor(this.AvgPerCustomer * getRandomInt(this.MinPerHour, this.MaxPerHour));
          console.log("Shop located in " + this.location + " bakes " + numPerHour + " donuts every hour");
          return numPerHour;
        };
        this.getDonutsPerDay = function() {
         var numPerDay = 8 * this.getDonutsPerHour();
          console.log("Shop located in " + this.location + " bakes " + numPerDay+ " donuts every day");
        };
      }

      // Create a DonutMaster object with two methods
      function DonutMaster() {
        this.shops = [];
        this.addShop = function(location, MinPerHour, MaxPerHour, AvgPerCustomer) {
          // create a shop
          var shop = new DonutsShop(location, MinPerHour, MaxPerHour, AvgPerCustomer);
          // add a new DonutShop to the list
            this.shops.push(shop);
        };

        this.generateReport = function() {
          // loop all list, with for loop
          for(var i = 0; i < this.shops.length; i++) {
            this.shops[i].getDonutsPerDay();
          }
        };
      }

      var shopMaster = new DonutMaster();
      shopMaster.addShop('Downtown', 8, 43, 4.50);
      shopMaster.addShop('Capitol Hill', 4, 37, 2.00);
      shopMaster.addShop('South Lake Union', 9, 23, 6.33);
      shopMaster.addShop('Wedgewood', 2, 28, 1.25);
      shopMaster.addShop('Ballard', 8, 58, 3.75);
      shopMaster.generateReport();


