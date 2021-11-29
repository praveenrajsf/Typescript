//unique id for user generated //auto increment 
var _userId = 100;
//class to store user information name,age,phone number
var User = /** @class */ (function () {
    function User(UserName1, Age1, PhoneNumber1) {
        this.UserId = "C" + _userId.toString();
        this.UserName = UserName1;
        this.Age = Age1;
        this.PhoneNumber = PhoneNumber1;
        _userId++;
    }
    return User;
}());
//class to store user enrolled courses and required days
var Course = /** @class */ (function () {
    function Course(courseName, day, cuserid) {
        this.CourseName = courseName;
        this.Day = day;
    }
    return Course;
}());
//stores user details
var UserArrayList = new Array();
//stores user selected course and required days
var CourseArrayList = new Array();
//user entered information stored in class user
function adduser() {
    var name = document.getElementById('username');
    var age = document.getElementById('age');
    var phoneNumber = document.getElementById('phonenumber');
    var user = new User(name, +age, +phoneNumber);
    UserArrayList.push(user);
    //    UserArrayList.push(new User(name, +age, +phoneNumber));
    alert("Register Succesful  " + user.UserId);
}
// Get user information
function registerpage() {
    var show = document.getElementById('registerdiv');
    var hide = document.getElementById('maindiv');
    hide.style.display = "none";
    show.style.display = "block";
}
// Existing user can login using login id
function loginPage() {
    var show = document.getElementById('logindiv');
    var hide = document.getElementById('maindiv');
    hide.style.display = "none";
    show.style.display = "block";
}
//validate user given id is alredy registerd
function validate() {
    var uid = document.getElementById('userid');
    for (var i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].UserId == uid) { //show option page and hide other pages
            var show = document.getElementById('optiondiv');
            var hide = document.getElementById('logindiv');
            hide.style.display = "none";
            show.style.display = "block";
        }
    }
}
//shows user available corse and enrolled course
function optionPage() {
    // let show=(document.getElementById('optiondiv')as HTMLDivElement);
    // let hide=(document.getElementById('logindiv')as HTMLDivElement);
    // hide.style.display="none";
    // show.style.display="block";
    var cname = document.getElementById('course');
}
//history of user selected course and required days to complete
function enrollPage() {
    var show = document.getElementById('enrolldiv');
    var hide = document.getElementById('optiondiv');
    hide.style.display = "none";
    show.style.display = "block";
}
//return to home page when home button is pressed
function home() {
    var show = document.getElementById('maindiv');
    show.style.display = "block";
    //hide register page
    var hide = document.getElementById('registerdiv');
    hide.style.display = "none";
    //hide login page
    var hide1 = document.getElementById('logindiv');
    hide1.style.display = "none";
    // hide option page
    var hide2 = document.getElementById('optiondiv');
    hide2.style.display = "none";
    //hide enroll page
    var hide3 = document.getElementById('enrolldiv');
    hide3.style.display = "none";
}
