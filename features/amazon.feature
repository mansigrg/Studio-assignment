Feature: amazon
Scenario: Add a product in cart
    Given I launch the url "https://www.amazon.in/"

   # And I click "signin_dropdown"

   # And I enter "email" in the web element "email_ID"

    #And I click "continuebttn"

   # And I enter "pass" in the web element "password"

    #And I click "signin"

   # And I wait for "10" seconds

    #And I enter password and captcha and click sign in manually if the pop up appears
    
    And I click "All"

    And I wait for "3" seconds

    And I click "menfashion"

    And I click "shirts"

    Then I hover on element "shirt_1"

    And I wait for "5" seconds

    And I click "quicklook"

    And I wait for "3" seconds

    And I click "product_details"

    And I scroll to see the element "size_dropdown"

    And I click "size_dropdown"

    And I click "size_l"

    And I click "blueshirt"

    And I wait for "5" seconds

    And I click "addtocart"

    And I click "gotocart"

    #And I verify text of "cart_count" as "cart_count_1"
  

