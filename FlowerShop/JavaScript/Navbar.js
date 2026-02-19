//會員
let isLogin = localStorage.getItem("isLogin")
let memberNav = document.querySelector("#nav_main-member");

if (isLogin=="true"){
    memberNav.href = "./memberctr.html";
}else{
    memberNav.href = "./login2.html";
}

function productType(type){
    localStorage.setItem("productType",type);
}

function productID(ID){
    localStorage.setItem("checkProductID",ID);
}

//Sidenav
            //關Sidenav
            function menu() {
                var x = document.getElementById("mySidenav");
                if (x.className === "sidenav") {
                    x.className += " close";
                    var e = document.getElementById("sideNav_festival");
                    e.className = "sideNav_festival-ul";
                } else {
                    x.className = "sidenav";
                    var e = document.getElementById("sideNav_festival");
                    e.className = "sideNav_festival-ul";
                }
            }

            //關sideCart
            function sideCart() {
                var x = document.getElementById("mySideCartnav");
                if (x.className === "sideCartNav") {
                    x.className += " close";
                } else {
                    x.className = "sideCartNav";
                }
            }

            //開Flower Sidenav
            function openSideFlowerNav() {
                var x = document.getElementById("mySideFlowerNav");
                var y = document.getElementById("mySidenav");
                //開Flower Sidenav
                if (x.className === "sideFlowerNav close") {
                    x.className = "sideFlowerNav";
                } else {
                    x.className += " close";
                }
                //關Sidenav
                if (y.className === "sidenav") {
                    y.className += " close";
                } else {
                    y.className = "sidenav";
                }

                //關li
                //花束li
                var y = document.getElementById("sideNav_bouquet");
                y.className = "sideNav_bouquet-ul";
                //花箱li
                var z = document.getElementById("sideNav_flowerBoxes");
                z.className = "sideNav_flowerBoxes-ul";
                //收藏li
                var a = document.getElementById("sideNav_collection");
                a.className = "sideNav_collection-ul";
                //婚禮li
                var b = document.getElementById("sideNav_wedding");
                b.className = "sideNav_wedding-ul";
                //安排li
                var c = document.getElementById("sideNav_arrangements");
                c.className = "sideNav_arrangements-ul";
                //花架li
                var d = document.getElementById("sideNav_flowerStands");
                d.className = "sideNav_flowerStands-ul";
                var e = document.getElementById("sideNav_festival");
                e.className = "sideNav_festival-ul";
            }
            //關Flower Sidenav
            function closeSideFlowerNav() {
                var x = document.getElementById("mySideFlowerNav");
                if (x.className === "sideFlowerNav") {
                    x.className += " close";
                } else {
                    x.className = "sideFlowerNav";
                }

                //關li
                //花束li
                var y = document.getElementById("sideNav_bouquet");
                y.className = "sideNav_bouquet-ul";
                //花箱li
                var z = document.getElementById("sideNav_flowerBoxes");
                z.className = "sideNav_flowerBoxes-ul";
                //收藏li
                var a = document.getElementById("sideNav_collection");
                a.className = "sideNav_collection-ul";
                //婚禮li
                var b = document.getElementById("sideNav_wedding");
                b.className = "sideNav_wedding-ul";
                //安排li
                var c = document.getElementById("sideNav_arrangements");
                c.className = "sideNav_arrangements-ul";
                //花架li
                var d = document.getElementById("sideNav_flowerStands");
                d.className = "sideNav_flowerStands-ul";
                var e = document.getElementById("sideNav_festival");
                e.className = "sideNav_festival-ul";
            }

            //一堆li
            //節日li
            function hideSidefestivalUl() {
                var x = document.getElementById("sideNav_festival");

                if (x.className === "sideNav_festival-ul show") {
                    x.className = "sideNav_festival-ul";
                } else {
                    x.className = "sideNav_festival-ul";
                    x.className += " show";
                }
            }
            //花束li
            function hideSideFlowerNavBouquetUl() {
                var x = document.getElementById("sideNav_bouquet");

                if (x.className === "sideNav_bouquet-ul show") {
                    x.className = "sideNav_bouquet-ul";
                } else {
                    x.className = "sideNav_bouquet-ul";
                    x.className += " show";
                }
            }
            //花箱li
            function hideSideFlowerNavFlowerBoxesUl(){
                var x = document.getElementById("sideNav_flowerBoxes");
                if (x.className === "sideNav_flowerBoxes-ul show") {
                    x.className = "sideNav_flowerBoxes-ul";
                } else {
                    x.className = "sideNav_flowerBoxes-ul";
                    x.className += " show";
                }
            }
            //收藏li
            function hideSideFlowerNavCollectionUl(){
                var x = document.getElementById("sideNav_collection");
                if (x.className === "sideNav_collection-ul show") {
                    x.className = "sideNav_collection-ul";
                } else {
                    x.className = "sideNav_collection-ul";
                    x.className += " show";
                }
            }
            //婚禮li
            function hideSideFlowerNavWeddingUl(){
                var x = document.getElementById("sideNav_wedding");
                if (x.className === "sideNav_wedding-ul show") {
                    x.className = "sideNav_wedding-ul";
                } else {
                    x.className = "sideNav_wedding-ul";
                    x.className += " show";
                }
            }
            //安排li
            function hideSideFlowerNavArrangementsUl(){
                var x = document.getElementById("sideNav_arrangements");
                if (x.className === "sideNav_arrangements-ul show") {
                    x.className = "sideNav_arrangements-ul";
                } else {
                    x.className = "sideNav_arrangements-ul";
                    x.className += " show";
                }
            }
            //花架li
            function hideSideFlowerNavFlowerStandsUl(){
                var x = document.getElementById("sideNav_flowerStands");
                if (x.className === "sideNav_flowerStands-ul show") {
                    x.className = "sideNav_arrangements-ul";
                } else {
                    x.className = "sideNav_flowerStands-ul";
                    x.className += " show";
                }
            }

            document.addEventListener("DOMContentLoaded", function() {
                // 當螢幕大於768px時執行
                console.log("DOM 已加載");
                function checkScreenSize() {
                    if (window.matchMedia("(min-width: 769px)").matches) {
                        // 關 Sidenav
                        menuResponsive();
                        // 關Flower Sidenav
                        closeSideFlowerNavResponsive();
                    }
                }
                checkScreenSize();
                    // 視窗調整大小時執行
                    window.addEventListener('resize', checkScreenSize);
            })

            //當螢幕大於768px關Flower Sidenav
            function closeSideFlowerNavResponsive() {
                var x = document.getElementById("mySideFlowerNav");
                if (x.className === "sideFlowerNav") {
                    x.className += " close";
                }
            }

            //當螢幕大於768px關Sidenav
            function menuResponsive() {
                var x = document.getElementById("mySidenav");
                if (x.className === "sidenav") {
                    x.className += " close";
                }

                //關li
                //花束li
                var y = document.getElementById("sideNav_bouquet");
                y.className = "sideNav_bouquet-ul";
                //花箱li
                var z = document.getElementById("sideNav_flowerBoxes");
                z.className = "sideNav_flowerBoxes-ul";
                //收藏li
                var a = document.getElementById("sideNav_collection");
                a.className = "sideNav_collection-ul";
                //婚禮li
                var b = document.getElementById("sideNav_wedding");
                b.className = "sideNav_wedding-ul";
                //安排li
                var c = document.getElementById("sideNav_arrangements");
                c.className = "sideNav_arrangements-ul";
                //花架li
                var d = document.getElementById("sideNav_flowerStands");
                d.className = "sideNav_flowerStands-ul";
                var e = document.getElementById("sideNav_festival");
                e.className = "sideNav_festival-ul";
            }