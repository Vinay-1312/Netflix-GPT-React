export const checkValidData = (password) =>
{
 const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
if(!isValidPassword) return "Invalid Password!"

return null;

}

