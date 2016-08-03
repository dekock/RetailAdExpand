window.onload = function() {
    //Variables===================================================================
    var adContainer = document.getElementById('retailAd');
    var closeBtn = document.getElementById('closeBtn');
    var mainAd = document.getElementById('mainAd');
    var listAds = document.getElementById('listAds');
    var getSide = document.getElementsByTagName('aside')[0];

    //Functions===================================================================
    // Get Data

    function loadJSON(callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'data/retailAd.json', true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function() {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }

    var getData = function(data) {
            var showData = loadJSON(function(response) {
                // Parse JSON string into object
                data = JSON.parse(response);

                for (var i = 0; i < data.item.length; i++) {
                    var getTitle = data.item[i].title;
                    var getDescription = data.item[i].description;
                    var getLogo = data.item[i].logo;
                    var getImage = data.item[i].image;
                    var getCTA = data.item[i].cta;
                    var getCtaUrl = data.item[i].url;


                    var createItem = document.createElement('article');
                    createItem.classList = "item";
                    var createHeader = document.createElement('header');
                    var createFigure = document.createElement('figure');
                    var createFooter = document.createElement('footer');


                    //Set List Logo
                    var createListLink = document.createElement('a');
                    createListLink.href = data.item[i].url;
                    createListLink.classList = "logo";
                    var createListImg = document.createElement('img');
                    createListImg.src = data.item[i].logo;
                    createListImg.alt = data.item[i].title;
                    createListLink.appendChild(createListImg);
                    createItem.appendChild(createListLink);

                    //Set List Title
                    var createListTitle = document.createElement('h1');
                    createListTitle.innerHTML = data.item[i].title;
                    createHeader.appendChild(createListTitle);


                    //Set List Description
                    var createListDescription = document.createElement('p');
                    createListDescription.innerHTML = data.item[i].description;
                    createHeader.appendChild(createListDescription);


                    //Set List Image
                    var createListProductImage = document.createElement('img');
                    createListProductImage.src = data.item[i].image;
                    createListProductImage.alt = data.item[i].title;
                    createFigure.appendChild(createListProductImage);


                    //Set List Button
                    var createListBTN = document.createElement('a');
                    createListBTN.href = data.item[i].url;
                    createListBTN.classList = 'btn';
                    createListBTN.target = '_blank';
                    createListBTN.innerHTML = data.item[i].cta;
                    createFooter.appendChild(createListBTN);


                    createItem.appendChild(createHeader);
                    createItem.appendChild(createFigure);
                    createItem.appendChild(createFooter);
                    listAds.appendChild(createItem);


                }
                var createMainItem = document.createElement('article');
                createMainItem.classList = "item";
                var createMainHeader = document.createElement('header');
                var createMainFigure = document.createElement('figure');
                var createMainFooter = document.createElement('footer');


                //Set Logo

                var createMainLink = document.createElement('a');
                createMainLink.href = data.item[0].url;
                createMainLink.classList = "logo";
                var createImg = document.createElement('img');
                createImg.src = data.item[0].logo;
                createImg.alt = data.item[0].title;
                createMainLink.appendChild(createImg);
                createMainItem.appendChild(createMainLink);


                //Set Title
                var createTitle = document.createElement('h1');
                createTitle.innerHTML = data.item[0].title;
                createMainHeader.appendChild(createTitle);


                //Set Description
                var createDescription = document.createElement('p');
                createDescription.innerHTML = data.item[0].description;
                createMainHeader.appendChild(createDescription);


                //Set Image
                var createProductImage = document.createElement('img');
                createProductImage.src = data.item[0].image;
                createProductImage.alt = data.item[0].title;
                createMainFigure.appendChild(createProductImage);


                //Set Button
                var createBTN = document.createElement('a');
                createBTN.href = data.item[0].url;
                createBTN.classList = 'btn';
                createBTN.target = '_blank';
                createBTN.innerHTML = data.item[0].cta;
                createMainFooter.insertBefore(createBTN, createMainFooter.childNodes[0]);

                //Set More Button
                var createMoreLink = document.createElement('a');
                createMoreLink.id = "moreinfo";
                createMoreLink.href = "#";
                createMoreLink.classList = "more";
                createMoreLink.innerHTML = "View More";
                createMainFooter.appendChild(createMoreLink);

                //Event======================================================================
                createMoreLink.onclick = showAds;
                //Event end==================================================================

                createMainItem.appendChild(createMainHeader);
                createMainItem.appendChild(createMainFigure);
                createMainItem.appendChild(createMainFooter);
                mainAd.appendChild(createMainItem);


                adContainer.classList.add("visible");
            });
        }

    getData(); 

    var showAds = function() {
        //console.log("You Clicked Me");
        adContainer.classList.add("show");
        getSide.setAttribute("class", "displayAside");
        mainAd.classList.add("hideAd");
        closeBtn.classList.add("showBtn");
        listAds.classList.add("showAds");

    }

    var hideAds = function() {
        //console.log("You Clicked Me");
        adContainer.classList.remove("show");
        mainAd.classList.remove("hideAd");
        closeBtn.classList.remove("showBtn");
        listAds.classList.remove("showAds");
        getSide.classList.remove("displayAside");
    }

    //Events======================================================================

    closeBtn.onclick = hideAds;

};
