
    function calculateTotalCost() {
        var items = document.querySelectorAll('input[type="checkbox"]:checked');
        var totalCost = 0;

        for (var i = 0; i < items.length; i++) {
            var itemName = items[i].value;
            var propertyValue = document.querySelector('input[name="property[' + itemName + ']"]:checked').value;
            var units = document.querySelector('select[name="units[' + itemName + ']"]').value;

            // Calculate cost based on selected property and units
            var propertyPrice = getPropertyPrice(itemName, propertyValue);
            var itemCost = propertyPrice * units;
            totalCost += itemCost;

            // Update the cost display for the item
            var itemCostElement = document.getElementById('item' + (i + 1) + 'cost');
            itemCostElement.textContent = '$' + itemCost.toFixed(2);
        }

        // Apply discount or tax based on total cost
        var totalCostElement = document.getElementById('totalCost');
        if (totalCost > 1000) {
            totalCostElement.textContent = 'Total Cost: $' + (totalCost - totalCost * 0.15).toFixed(2) + ' (15% discount)';
        } else {
            totalCostElement.textContent = 'Total Cost: $' + (totalCost + totalCost * 0.15).toFixed(2) + ' (15% tax)';
        }

        // Prompt for confirmation
        var confirmation = confirm('Do you accept the calculated total cost for payment?');
        if (confirmation) {
            alert('Thank you for your purchase!');
        } else {
            alert('Payment process withdrawn.');
        }
    }

    function getPropertyPrice(itemName, propertyValue) {
        switch (itemName) {
            case 'beats-studio-3':
                switch (propertyValue) {
                    case '1':
                        return 100; 
                    case '2':
                        return 150; 
                    case '3':
                        return 200; 
                    default:
                        return 0;
                }
            case 'xiaomi-scooter':
                switch(propertyValue) {
                    case '1':
                        return 50; 
                    case '2':
                        return 100; 
                    case '3':
                        return 150; 
                    default:
                        return 0;
                }
                case 'hdmi-cable':
                    switch(propertyValue) {
                        case '1':
                            return 5; 
                        case '2':
                            return 10; 
                        case '3':
                            return 15; 
                        default:
                            return 0;
                    }
                case 'iphone-14':
                    switch(propertyValue) {
                        case '1':
                            return 800; 
                        case '2':
                            return 980; 
                        case '3':
                            return 1500; 
                        default:
                            return 0;
                        }
                case 'macbook-air':
                switch(propertyValue) {
                    case '1':
                        return 1000; 
                    case '2':
                        return 1300; 
                    case '3':
                        return 1800; 
                    default:
                        return 0;
                    }
                case 'red-camera':
                    switch(propertyValue) {
                        case '1':
                            return 2500; 
                        case '2':
                            return 3500; 
                        case '3':
                            return 4500; 
                        default:
                            return 0;
                        }  
                case 'galaxy-s22':
                    switch(propertyValue) {
                        case '1':
                            return 800; 
                        case '2':
                            return 980; 
                        case '3':
                            return 1500; 
                        default:
                            return 0;
                        }
                case 'crystal-tv':
                    switch(propertyValue) {
                        case '1':
                            return 500; 
                        case '2':
                            return 650; 
                            case '3':
                            return 800; 
                        default:
                            return 0;
                        }
                case 'sony-xperia':
                    switch(propertyValue) {
                        case '1':
                            return 900; 
                        case '2':
                            return 1680; 
                        case '3':
                            return 2150; 
                        default:
                            return 0;
                        }
                case 'surface-pro':
                    switch(propertyValue) {
                        case '1':
                            return 720; 
                        case '2':
                            return 1080; 
                        case '3':
                            return 1440; 
                        default:
                            return 0;
                        }
                case 'wireless-router':
                    switch(propertyValue) {
                        case '1':
                            return 80; 
                        case '2':
                            return 150; 
                        case '3':
                            return 200; 
                        default:
                            return 0;
                        }
        }
    }
