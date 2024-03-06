# Gammazon

Gammazon is an e-commerce website that sells a variety of lesser known items.

## Live Link
[Gammazon](gammazon.onrender.com/)

## User Stories

## Users

### Sign Up

- As an unauthorized user I want to be able to create a new account through a sign-up form which can be navigated to by clicking on an option in a profile menu dropdown on the top right of every page in the site.
- When on the /signup page, I want to be able to fill in my email, username, and password in a user friendly form.
- On successful submission by clicking a Sign Up button, I want to be logged in to the site.
- If I enter invalid or incorrect data, I would like to be prompted to fix it in a user friendly way.

### Log In

- As an unauthorized user with an account, I want to be able to log in to my account through a log-in form which can be navigated to by clicking on an option in a profile menu dropdown on the top right of every page in the site.
- When on the /login page, I want to be able to fill in my email and password in a user friendly form.
- On successful submission by clicking a Login button, I want to be logged in to the site.
- If I enter invalid or incorrect data, I would like to be informed of which data was incorrect in a user friendly way.

### Log Out 

- As a logged in user, I want to be able to log out by clicking on a logout option which can be found in a profile menu dropdown on the top right of every page in the site.
- I want to be able to log out on any page of the website and be redirected to the home page.

### Demo User

- As an unauthorized user, I want to be able to log in to a Demo User account via clicking an easy to find button on both the signup and login pages.
- When used I would like the Demo User to to log me in to a demo account with normal user access to the site.

## 1. Products

### Create Products

- As a logged in user, I want to be able to create a product for sale through a create product form.
- I should able to navigate to the create product page by clicking the create product option in the profile dropdown menu in the top right of the site.
- When on the /new-product page, I want to be able to fill out a clearly labeled form with product information and submit it by clicking a Create Product button.
- If I leave out necessary data or input invalid data, I would like to be prompted to fix it with error messages that appear below the respective input boxes.


### View Products

- As a logged in or logged out user, I want to be able to view all products on the /all-products page, which can be navigated to by clicking an All Products button that is located to the right of the search bar on the top of the page.
- As a logged in or logged out user, I want to be able to view a product's information and reviews on the product on the /products/:productId page, which can be navigated to by clicking on the tile for the product located in the /all-products page.
- The /products/:productId page should contain a picture of the product, the name of the product, the username of the user that is selling the product and when the listing was created, the average stars of the reviews of the product, and the description.
- As a logged in user, I want to be able to view all of my product listings on the /my-products page, which can be navigated to by clicking a My Products option in the profile dropdown in the top right.

### Edit Products

- As a logged in user, I want to be able to edit my product listings by clicking an Edit button which is located on the product's tile in the /my-products page.
- When clicking the Edit button, I want to be brought to the /products/:productId/edit page to edit my product listing with a clearly labeled form prepopulated with the old information.
- I want to be able to submit the information with a Confirm Changes button located on the bottom of the page.
- If I leave out necessary data or input invalid data, I would like to be prompted to fix it with error messages that appear below the respective input boxes.

### Delete Products

- As a logged in user, I want to be able to permanently delete a created product listing by clicking a Delete button, which is located on the products's tile in the /my-products page.
- When clicking the Delete button, I want to have a modal popup that asks whether I am sure I want to delete my product.
- When clicking the yes option, it should permanently delete my listing.
- When clicking the no option, the modal should close.

## 2. Reviews

### Create Reviews

- As a logged in user, I want to be able to create a review for a product on the /products/:productId page by clicking a Post a Review button.
- I want to be able to input my review by typing out a title and description into text boxes and input my 1-5 star rating by clicking on the number of stars on a star bar above the text box.
- Both text boxes and the star input should be located just below the Reviews header on the /products/:productId.
- I want to be able to submit my review by clicking a Submit Review button located below the review inputs.
- If I leave out necessary data or input invalid data, I would like to be prompted to fix it with error messages that appear below the respective input boxes.
- As a logged in user I want to be able to see my review on the top of the list of reviews after submitting.
- As a logged out user if I click on the inputs or submit button I want to be prompted to login or signup with a modal which contains links to both the /login and /signup pages.

### View Reviews

- As a logged in or logged out user, I want to be able to view all reviews for a product on the /products/:productId page under the product information section.
- The reviews should be ordered from most recent to least recent.

### Edit Reviews

- As a logged in user, I want to be able to edit my reviews by clicking an Edit button located to the right of my review's title on the /products/:productId page which will open a modal containing an edit review form.
- When pressing the Edit button, I want to be prompted with a modal that contains an edit review form prepopulated with the old review information.
- I want to be able to submit the edited review with an Update Review button that is located on the bottom of the modal.
- If I leave out necessary data or input invalid data, I would like to be prompted to fix it with error messages that appear below the respective input boxes.
- If I want to exit the modal without making changes, I should be able to click a cancel button located next to the Update Review button on the bottom of the modal.


### Delete Reviews

- As a logged in user, I want to be able to delete my reviews by clicking a delete button which is located next to the title of my review in the /products/:productId page.
- When clicking the delete button, I want to permanently delete my review.

## Feature List

### 1. Products

- Logged in users should be able to create a product.
- Logged in or logged out users should be able to view all the products available.
- Logged in or logged out users should be able to view a specific product.
- Logged in users should be able to edit a product listing that was created by the user.
- Logged in users should be able to delete product listings that were created by the user.

### 2. Reviews
- Logged in users should be able to create a review for a product.
- Logged in or logged out users should be able to view the reviews on a product.
- Logged in users should be able to edit a review that was made by the user.
- Logged in users should be able to delete reviews that were made by the user.

## Future Features

### 3. Cart

- Logged in users should be able to add products to their cart.
- Logged in users should be able to view all the products in their shopping cart.
- Logged in users should be able to remove products from their shopping cart.
- Logged in users should be able to make an order for the items in their shopping cart.

### 4. Wishlist

- Logged in users should be able to add a product to their wishlist.
- Logged in users should be able to view all the products in their wishlist.
- Logged in users should be able to remove a product from their wishlist.

### 5. Search

- Logged in or logged out users should be able to search for products.
- Logged in or logged out users should be able to see all results for their search.

### 6. Order History

- Logged in users should be able to view order history.
- Logged in users should be able to reorder a past purchase.





