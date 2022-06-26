console.log("Hello World!")
//declaration
// 20 variables 7
let x = 1;
let userName, userDescription, userGender, userAge, userEmail, numSuscriptions, numVideos, nameVideo, numList, nameList,
numShoppingCart, productName, productQuantity, productColor, totalProducts, userSearch, userPhoto, userVisualizations, userPassword, userCountry;

//assign the value
userName="Diana";
userDescription="Computer Systems student, I like to make videos on Youtube and buy online";
userGender="Female";
userAge=22;
userEmail="a18490965@itmexicali.edu.mx";
numSuscriptions=20;
numVideos=6;
nameVideo="Backup and Restore SQL Server";
numList=1;
nameList="Liked videos";
numShoppingCart=2;
productName="Laptop";
productQuantity=2;
productColor="black";
totalProducts=3;
userSearch=["Tableau tutorial","SQL Server installation","How to create a program using Javascript"];
userPhoto="diana.png";
userVisualizations=200;
userPassword="12345";
userCountry="Mexico";


document.write(`
    <p>${x++} Name: ${userName}</p>
    <p>${x++} Description: ${userDescription}</p>
    <p>${x++} Gender: ${userGender}</p>
    <p>${x++} Age: ${userAge}</p>
    <p>${x++} Email: ${userEmail}</p>
    <p>${x++} Number of Suscriptions: ${numSuscriptions}</p>
    <p>${x++} Searching: ${userSearch}</p>
    <p>${x++} Photo: ${userPhoto}</p>
    <p>${x++} Visualizations: ${userVisualizations}</p>
    <p>${x++} Password: ${userPassword}</p>
    <p>${x++} Country: ${userCountry}</p>
    <p>${x++} Number of Videos: ${numVideos}</p>
    <p>${x++} Name of Video: ${nameVideo}</p>
    <p>${x++} Number of Lists: ${numList}</p>
    <p>${x++} Name of List: ${nameList}</p>
    <p>${x++} Number of Shopping Cart: ${numShoppingCart}</p>
    <p>${x++} Product: ${productName}</p>
    <p>${x++} Quantity: ${productQuantity}</p>
    <p>${x++} Color: ${productColor}</p>
    <p>${x++} Total of Products: ${totalProducts}</p>
`); // :)