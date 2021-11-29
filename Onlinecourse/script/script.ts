//unique id for user generated //auto increment 
let _userId:number=100;
//class to store user information name,age,phone number
class User
{
    UserName:any;
    Age:number;
    PhoneNumber:number;
    UserId:any;
    constructor(UserName1:any,Age1:any,PhoneNumber1:any)
    {
         this.UserId="C"+_userId.toString();
        this.UserName=UserName1;
        this.Age=Age1;
        this.PhoneNumber=PhoneNumber1;
        _userId++; 
    }
}
//class to store user enrolled courses and required days
class Course
{
CourseName:any;
Day:number;
CuserId:any;
constructor(courseName:any,day:number,cuserid:any)
{
this.CourseName=courseName;
this.Day=day;
}
}
//stores user details
 let UserArrayList:Array<User>=new Array<User>();
 //stores user selected course and required days
 let CourseArrayList:Array<Course>=new Array<Course>();
 //user entered information stored in class user
function adduser()
{
   let name=document.getElementById('username') as HTMLDivElement;
   let age=document.getElementById('age') as HTMLDivElement;
   let phoneNumber=document.getElementById('phonenumber') as HTMLDivElement;
   let user = new User(name,+age,+phoneNumber);
   UserArrayList.push(user);
//    UserArrayList.push(new User(name, +age, +phoneNumber));
   alert("Register Succesful  " +user.UserId);

}
// Get user information
function registerpage()
{   //show register page and hide other pages
    let show=(document.getElementById('registerdiv')as HTMLDivElement);
    let hide=(document.getElementById('maindiv')as HTMLDivElement);
    hide.style.display="none";
    show.style.display="block";
}
// Existing user can login using login id
function loginPage()
{   //show login page and hide other pages
    let show=(document.getElementById('logindiv')as HTMLDivElement);
    let hide=(document.getElementById('maindiv')as HTMLDivElement);
    hide.style.display="none";
    show.style.display="block";
}
//validate user given id is alredy registerd
function validate()
{
 let uid=document.getElementById('userid') as HTMLDivElement
for(let i=0;i<UserArrayList.length;i++)
{
  if(UserArrayList[i].UserId== uid)
  { //show option page and hide other pages
    let show=(document.getElementById('optiondiv')as HTMLDivElement);
    let hide=(document.getElementById('logindiv')as HTMLDivElement);
    hide.style.display="none";
    show.style.display="block";
  }
}
}
//shows user available corse and enrolled course
function optionPage()
{
    // let show=(document.getElementById('optiondiv')as HTMLDivElement);
    // let hide=(document.getElementById('logindiv')as HTMLDivElement);
    // hide.style.display="none";
    // show.style.display="block";
    let cname=document.getElementById('course') as HTMLDivElement;

}
//history of user selected course and required days to complete
function enrollPage()
{   //show enrolled courses history and hide other pages
    let show=(document.getElementById('enrolldiv')as HTMLDivElement);
    let hide=(document.getElementById('optiondiv')as HTMLDivElement);
    hide.style.display="none";
    show.style.display="block";
}
//return to home page when home button is pressed
function home()
{
    let show=(document.getElementById('maindiv')as HTMLDivElement);
    show.style.display="block";
    //hide register page
    let hide=(document.getElementById('registerdiv')as HTMLDivElement);
    hide.style.display="none";
    //hide login page
    let hide1=(document.getElementById('logindiv')as HTMLDivElement);
    hide1.style.display="none";
    // hide option page
    let hide2=(document.getElementById('optiondiv')as HTMLDivElement);
    hide2.style.display="none";
    //hide enroll page
    let hide3=(document.getElementById('enrolldiv')as HTMLDivElement);
    hide3.style.display="none";  
}