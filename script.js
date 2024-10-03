<script>
function calculateIncomeRevenue() {
    // Get input values
    var nightlyRate = parseFloat(document.getElementById("nightly-rate").value);
    var numberOfNights = parseInt(document.getElementById("number-of-nights").value);
    var guests = parseInt(document.getElementById("guests").value);
    var beds = parseInt(document.getElementById("beds").value);
    var bedrooms = parseInt(document.getElementById("bedrooms").value);  // Added reference for bedrooms
    var bathrooms = parseInt(document.getElementById("bathrooms").value);
    var livingAreas = parseInt(document.getElementById("living-areas").value);  // Added reference for living areas
    var kitchen = parseInt(document.getElementById("kitchen").value);

    // Cleaning Fee is fixed at 0 as per your instructions
    var cleaningFee = 0;

    // Calculate Linen Fee
    var linenFee = (beds * 27) + (guests * 4) + (bathrooms * 4.5) + (kitchen * 4.2);

 // Calculate Cleaning Fee
    var cleaningFee = (beds * 5) + (bedrooms * 20) + (bathrooms * 20) + (livingAreas * 20) + (kitchen * 30);
  
    // Management Fee at 20% of total earnings
    var managementFeeRate = 0.20;
    var totalEarnings = nightlyRate * numberOfNights;
    var managementFee = totalEarnings * managementFeeRate;
             
 	// Calculate Guest Fee (Nightly Rate × Number of Nights)
    var guestFee = nightlyRate * numberOfNights;          

    // Online Booking Site Commission at 17%
    var bookingCommissionRate = 0.17;
    var bookingCommission = totalEarnings * bookingCommissionRate;

    // Calculate Owner Receives
    var ownerReceives = totalEarnings - cleaningFee - managementFee - bookingCommission - linenFee;

    // Calculate Owner Net %
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
</script>
