
var src_url = "http://192.168.43.140:6060/";
// var src_url = "http://172.105.158.108:5500/";


var seconds = 1000;
var loader_seconds = 3000;

function CreateCustomAlertBox()
{
    console.log("Called")
    this.render = function(dialog){
        let winW = window.innerWidth;
        let winH = window.innerHeight;
        let AlertBoxDisplayArea = document.getElementById('alert-box-display-area');
        let HtmlAlertBox = document.getElementById('alert-box');
        AlertBoxDisplayArea.style.display = "block";
        AlertBoxDisplayArea.style.height = winH+"px";
        HtmlAlertBox.style.left = (winW/2) - (550 * .5)+"px";
        HtmlAlertBox.style.top = "100px";
        HtmlAlertBox.style.display = "block";
        document.getElementById('alert-box-header').innerHTML = "Network Error ";
        document.getElementById('alert-box-body').innerHTML = dialog;
        document.getElementById('alert-box-footer').innerHTML = '<button class="ok-alert-btn" onclick="Alert.ok()">OK</button>';
    }
    this.ok = function()
        {
            document.getElementById('alert-box').style.display = "none";
            document.getElementById('alert-box-display-area').style.display = "none";
        }
}
var Alert = new CreateCustomAlertBox();

function ShowNetworkAlertBox (){Alert.render('<center>Please turn on <br> your network <br>and <br> Try Again</center>')}






function Load_developer () {window.location="developer.html"}
function Load_index () 
{
    window.location="index.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="index.html"}
}
function Load_food_view () 
{
    window.location="food.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="food.html"}
}
function Load_chips_view () 
{
    window.location="chips.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="chips.html"}
}
function Load_piloa_view () 
{
    window.location="piloa.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="piloa.html"}
}
function Load_drinks_view () 
{
    window.location="drinks.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="drinks.html"}
}

function Load_salads_view () 
{
    window.location="salads.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="salads.html"}
}
function Load_chicken_view () 
{
    window.location="chicken.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="chicken.html"}

}
function Load_luwombo_view () 
{
    window.location="luwombo.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="luwombo.html"}

}
function Load_local_dish_view () 
{
    window.location="localdishe.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="localdishe.html"}

}
function Load_break_fast_view () 
{
    window.location="breakfast.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="breakfast.html"}
}
function Load_beverages_view_ () 
{
    window.location="beverages.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="beverages.html"}
}
function Load_goat_meat_view () 
{
    window.location="goatmeat.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="goatmeat.html"}
}
function Load_beef_liver_view () 
{
    window.location="beefliver.html"
    // if(!navigator.onLine) {ShowNe8location="beefliver.html"}
}

function Load_orders_view () 
{
    window.location="ViewOrders.html"
    // if(!navigator.onLine) {ShowNetworkAlertBox ()}
    // if(navigator.onLine) {window.location="ViewOrders.html"}
}
function Hide_all_Divs ()
{
    // mains
    document.getElementById("orders-panel-div").style.display="none";

    // new orders tab
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    
}

function Show_orders_panel_div (){document.getElementById("orders-panel-div").style.display = "block";}

































// New orders div
function Show_chips_new_orders_div ()
{
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("chips-new-orders-div").style.display="block";
}

function Show_piloa_new_orders_div ()
{
    // clearInterval(stopchips);
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display="block";
}

function Show_soft_drinks_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display="block";
}
function Show_fresh_drinks_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display="block";
}
function Show_salads_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display="block";
}

function Show_chicken_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display="block";
}


function Show_luwombo_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display="block";
}

function Show_localdishe_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display="block";
}
function Show_breakfast_other_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display="block";
}
function Show_breakfast_egg_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display="block";
}
function Show_breakfast_teas_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display="block";
}
function Show_beverages_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display="block";
}
function Show_goatmeat_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display="block";
}

function Show_beefliver_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display="block";
}





























