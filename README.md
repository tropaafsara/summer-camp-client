# b712-summer-camp-client-side-tropaafsara

# Website Name : Melodia
# Live Website Link : https://summer-camp-school-c6599.web.app/
* Admin Email : admin1@gmail.com	
* Admin password : 123456

# About This Project
* Frontend : Html, CSS, Javascript
* Backend : MongoDB , Firebase authentication, Stripe Integration  
* Framework : Node JS, Express JS

# Website Features :
* User Authentication: Firebase Authentication to allow users to sign up & log in. 
* Single Page Application.
* Private Route implementation. 
* Axios & JWT implementation

1. Student Dashboard 
    * Selected Class : Students selected classes with update, delete & pay button.
    * Enrolled Class : Shows all the Classes a student selected after successful payment.
    * Stripe Payment Integration
    
2. Payment: (Student Dashboard)
    * Pay button Action : Upon clicking the Pay button for a Class on the My Selected Classes, the student will be redirected to the payment page to finalize their payment. After a successful payment, the Available seats for the particular Class will be reduced by 1. The Class information will be shown on the My Enrolled Classes page and removed from the My Selected Classes page.
    * Transaction History

3. Instructor Dashboard 
    * Add Class : Instructors can add classes
    * My Classes : Shows all the Classes an instructor has added 
    * Manage Booked Class : Shows all the Classes booked by students including pending/ approved/ denied status, Total Enrolled Students, Feedback & Update button. 

4. Admin Dashboard 
    * Admin has the power to approve/deny classes & provide feedback. Admins can also manage user roles, prompting users to admin/instructor 

