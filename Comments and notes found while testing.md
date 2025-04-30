The following are bugs and notes found while testing and creating this test suite

## Bugs found while testing
1. On the sign in popup, you have 2 data-testid for the password field, thereby making it harder to use data-testid to fill out the password field.  Search for "auth-password". 
2. 


## Notes
 - Ideally an env file and secrets would be used for storing test users and passwords.  But for now, I'm just leaving things in the code.
 - I would also normally have a backend data done to delete the users after the tests are run, but I don't have access for that and will just inform you of any users I've created that need to be deleted. (See Below)



 ## Delete these users after reviewing this code
 - sapoli5013@hedotu.com


