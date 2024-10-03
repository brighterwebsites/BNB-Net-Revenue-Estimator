# BNB-Net-Revenue-Estimator
Per Booking Net Revenue Estimator

Income and Revenue Calculator
## Overview
This project provides an HTML and JavaScript-based Income and Revenue Calculator. It allows users to input several details like nightly rate, number of nights, number of beds, bedrooms, bathrooms, living areas, and kitchens, and computes various fees such as guest fees, linen fees, cleaning fees, and more. The script also calculates the owner’s net income and percentage after considering management fees and booking commissions.

## Files
HTML File: Contains the structure of the form where users input values and the result sections where calculations are displayed.
JavaScript (embedded): Implements the calculations for the fees and revenue based on the user input.
## Inputs
- **Nightly Rate ($):** The cost per night of the property.
- **Number of Nights:** Total number of nights the property is booked.
- **Max Guests:** Maximum number of guests.
- **Number of Beds:** Total number of beds available.
- **Number of Bedrooms:** Total number of bedrooms.
- **Number of Bathrooms or Ensuites:** Total number of bathrooms or ensuites.
- **Number of Living Areas:** Total number of living areas.
- **Number of Kitchens:** Total number of kitchens.

## Outputs
- **Guest Fee:** Calculated as Nightly Rate × Number of Nights.
- **Cleaning Fee:** Calculated based on the following formula:  
  (Beds × 5) + (Bedrooms × 20) + (Bathrooms × 20) + (Living Areas × 20) + (Kitchens × 30)
- **Linen Fee:** Calculated based on the following formula:  
  (Beds × 27) + (Guests × 4) + (Bathrooms × 4.5) + (Kitchens × 4.2)
- **Management Fee:** Calculated as 20% of the total earnings.
- **Online Booking Site Commission:** 17% of the total earnings.
- **Owner Receives:** The net income the owner receives after deducting all fees:  
  Total Earnings - Cleaning Fee - Management Fee - Booking Commission - Linen Fee
- **Owner Net Percentage:** The percentage of total earnings the owner receives after all deductions.


## Formulae Used
- **Guest Fee:**
guestFee = nightlyRate * numberOfNights;

- **Cleaning Fee:**
cleaningFee = (beds * 5) + (bedrooms * 20) + (bathrooms * 20) + (livingAreas * 20) + (kitchens * 30);

- **Linen Fee:**
linenFee = (beds * 27) + (guests * 4) + (bathrooms * 4.5) + (kitchens * 4.2);

- **Management Fee (20% of total earnings):**
managementFee = totalEarnings * 0.20;

- **Online Booking Site Commission (17% of total earnings):**
bookingCommission = totalEarnings * 0.17;```

- **Owner Receives:**
ownerReceives = totalEarnings - cleaningFee - managementFee - bookingCommission - linenFee;```

- **Owner Net Percentage:**
ownerPercentage = (ownerReceives / totalEarnings) * 100;


## JavaScript Logic
The core function responsible for the calculations is:
### Output:

```javascript
function calculateIncomeRevenue() {
    // Get input values from the form
    var nightlyRate = parseFloat(document.getElementById("nightly-rate").value);
    var numberOfNights = parseInt(document.getElementById("number-of-nights").value);
    var guests = parseInt(document.getElementById("guests").value);
    var beds = parseInt(document.getElementById("beds").value);
    var bedrooms = parseInt(document.getElementById("bedrooms").value);  
    var bathrooms = parseInt(document.getElementById("bathrooms").value);
    var livingAreas = parseInt(document.getElementById("living-areas").value);  
    var kitchen = parseInt(document.getElementById("kitchen").value);

    // Calculate Linen Fee

var linenFee = (beds * 27) + (guests * 4) + (bathrooms * 4.5) + (kitchen * 4.2);

    // Calculate Cleaning Fee

var cleaningFee = (beds * 5) + (bedrooms * 20) + (bathrooms * 20) + (livingAreas * 20) + (kitchen * 30);

    // Management Fee (20% of total earnings)

var totalEarnings = nightlyRate * numberOfNights;
    var managementFee = totalEarnings * 0.20;

// Online Booking Site Commission (17% of total earnings)

var bookingCommission = totalEarnings * 0.17;

// Calculate Guest Fee (Nightly Rate × Number of Nights)
var guestFee = nightlyRate * numberOfNights;

// Calculate Owner Receives (Net earnings after fees)
var ownerReceives = totalEarnings - cleaningFee - managementFee - bookingCommission - linenFee;

// Calculate Owner Net Percentage
var ownerPercentage = (ownerReceives / totalEarnings) * 100;

// Update the results in the HTML
document.getElementById("guest-fees").textContent = `$${guestFee.toFixed(2)}`;
    document.getElementById("cleaning-fee").textContent = `$${cleaningFee.toFixed(2)}`;
    document.getElementById("linen-fee").textContent = `$${linenFee.toFixed(2)}`;
    document.getElementById("management-fee").textContent = `$${managementFee.toFixed(2)}`;
    document.getElementById("commission").textContent = `$${bookingCommission.toFixed(2)}`;
    document.getElementById("owner-receives").textContent = `$${ownerReceives.toFixed(2)}`;
    document.getElementById("owner-percentage").textContent = `${ownerPercentage.toFixed(2)}%`;
}
```

## How to Use
Input the values into the form:

- Nightly Rate
- Number of Nights
- Max Guests
- Number of Beds
- Number of Bedrooms
- Number of Bathrooms
- Number of Living Areas
- Number of Kitchens

Click the Calculate button to trigger the calculateIncomeRevenue() function.

The calculated fees and percentages will be displayed under the Results section.

## Customisation
- Management Fee and Booking Commission: The management fee is set to 20% and the booking commission to 17%. These values can be adjusted in the JavaScript by modifying the managementFeeRate and bookingCommissionRate variables.
- Additional Fees: You can add additional calculations for fees like credit card processing or stock items in a similar way to how the other fees are calculated.
## Disclaimer
Online Booking Site Commission and Credit Card Processing Fees may vary. Stock items such as tea, coffee, toilet paper, etc., are not included in the above calculations.
