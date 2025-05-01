The following are bugs and notes found while testing and creating this test suite

## Issues found while testing
1. On the sign in popup, you have 2 data-testid for the password field, thereby making it harder to use data-testid to fill out the password field.  Search for "auth-password". Same for the account creation page
2. All the data-testid's for the different sections under the account name are the same, "account-link"
3. There is no validation for creating an account with a random email.  It seems that as long as I use a @someword.com format it will create the account. 
4. testId for the state dropdown needs to be updated to be more specific, currently it's ('autocomplete-field-div').
5. The state dropdown, when entering in a state abbreviation should show that abbreviation's result first, then other results.  For example Louisiana (LA) brings up Alaska first.  
    5.1. Alternatively, the zipcode could be first, at which point, the state and city can be determined automatically. 
6. On the settings page, the edit contact info has the same testID as the edit Password. Easy workaround, but also easy fix.
7. The contact card info should have more testids to make it easier to veriy the info


## Notes
 - I would  normally have a backend call done to delete the users after the tests are run, but I don't have access for that and will just inform you of any users I've created that need to be deleted. (See Below)
 



 ## Delete these users after reviewing this code
 - sapoli5013@hedotu.com


