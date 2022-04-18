$( document ).ready(function() {

    var list=0;
    /*$( "#carouselExampleControls" ).hover(
        function() {
            $( ".carousel-control-next" ).fadeIn( 100 );
        },function() {
            $( ".carousel-control-next" ).fadeOut( 100 );
        }
      );
      
    $( ".carousel-control-next" ).click(
        
        function() {
            var childrenArray = $(this).parent().children('div').toArray();
            console.log(childrenArray.length);
            $(this).next().fadeIn( 100 );
            if(list<childrenArray.length-1)
                list=list+1;
        }
        );
    $( ".carousel-control-prev" ).click(
        function() {
            list=list-1;
            if(list==0){
                $( "#carouselExampleControls" ).on( "mouseenter mouseleave",rebin());
                $( ".carousel-control-prev" ).fadeOut( 100 );
            }
        }
        );
    function rebin(){
        $( "#carouselExampleControls" ).hover(
            function() {
                $( ".carousel-control-next" ).fadeIn( 100 );
            }
        );
    }*/
    $( ".carousel-control-next" ).click(
        
        function() {
            $(this).prev().fadeIn();

        }
        );
        
    submitForms = function(){
        document.getElementById("q1-form").submit();
        document.getElementById("q2-form").submit();
        document.getElementById("q3-form").submit();
    }
});




//---------------------------------------------------------------------------------------------------------------------------------
// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAD-VAti7-V7PUhLd_W7qtxf9YpZCScflk",
    authDomain: "focal-sabry.firebaseapp.com",
    databaseURL: "https://focal-sabry.firebaseio.com",
    projectId: "focal-sabry",
    storageBucket: "focal-sabry.appspot.com",
    messagingSenderId: "642470154623",
    appId: "1:642470154623:web:700e83da7cc686e0bc8a4a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference contacts collection    
var contactsRef = firebase.database().ref('contacts');
//---------------------------------------------------------------------------------------------------------------------------------
// Listen for form submit
document.getElementById('myform').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    //Get value
    var name = getInputVal('name');
    var phone = getInputVal('phone');
    var email = getInputVal('email');




    var choice
    var targetChoice
    var booksChoice
    document.getElementsByName("choice").forEach(function(elm) {
        if (elm.checked) {
            choice = elm.value;
        }
        })
    document.getElementsByName("target-choice").forEach(function(elm) {
        if (elm.checked) {
            targetChoice = elm.value;
        }
        })
    document.getElementsByName("books-choice").forEach(function(elm) {
        if (elm.checked) {
            booksChoice = elm.value;
        }
        })
    
    // console.log(choice,targetChoice,booksChoice)

    // Save message
    saveMessage(name, phone, email, choice, targetChoice, booksChoice);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form
    document.getElementById('myform').reset();
}




// Function to get form value
function getInputVal(id){
return document.getElementById(id).value;
}


//---------------------------------------------------------------------------------------------------------------------------------
// Save message to firebase
function saveMessage(name, phone, email, choice, targetChoice, booksChoice){
var newMessageRef = contactsRef.push();
newMessageRef.set({
        name: name,
        phone: phone,
        email: email,
        choice: choice,
        targetChoice: targetChoice,
        booksChoice: booksChoice,
    });
}
