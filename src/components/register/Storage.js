import { toast } from "react-toastify";

// Initial data
const users = JSON.parse(localStorage.getItem("users")) || [];

// Local Storage Function
const saveUsers = (data) => {
    localStorage.setItem("users", JSON.stringify(data));
}

// Register User
const registerUser = async (user) => {
    //console.log("Register", user);

    const extEmail = users.find((item) => item.email === user.email);
    const extMobile = users.find((item) => item.mobile === user.mobile);

    if(extEmail) {
        toast.error("Email already exists");
        return;     
    } else if (extMobile) {
        toast.error("Mobile number already exists");
        return;
    } else {
        users.push(user);
        //console.log(users);

        saveUsers(users);

    toast.success(`Hi ${user.name} you have registered successfully`);
    setTimeout(() => {
        window.location.href = "/login";
    }, 4000);
    
    }   
};

// Login Handler
const loginHandler = async (user) => {
   // console.log("Login", user);

   const userFound = users.find((item) => item.email === user.email);

   if(!userFound) {
    toast.error(`${user.email} does not exists.`);
    return;
   } else {
    if (userFound.password === user.password) {
        localStorage.setItem("loginStatus",true);
        toast.success(`Welcome ${userFound.name}`);
        setTimeout(() => {
            window.location.href = "/dashboard";
        }, 4000);
    } else {
        toast.error("Invalid password.");
    }
   }
};

// Logout Handler
const logoutHandler = async () => {
    localStorage.removeItem("loginStatus");
    toast.success("Successfully logout");
    setTimeout(() => {
        window.location.href = "/login"; 
    }, 4000);
};
export { registerUser, loginHandler, logoutHandler };