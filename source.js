/*var moreHeader = ["Software", "PC & Devices", "Entertainment",
                  "Bussiness", "Developer & IT", "Other"];
var moreItems = [];

moreItems[0] = ["Windows apps", "OneDrive", "Outlook", "Skype", "OneNote"];
moreItems[1] = ["PC & Tablets", "Accessories"];
moreItems[2] = ["XBox games", "PC games", "Windows digital games"];
moreItems[3] = ["Microsoft Azure", "Microsoft Dynamics 365",
                "Microsoft 365", "Cloud Platform", "Enterprise Solutions",
                "Data platform"];
moreItems[4] = [".NET", "Visual Studio", "Window Dev Center", "Docs"];
moreItems[5] = ["Microsoft Store", "Free download & security", "Education"];

var firstDiv = document.createElement('div');
var moreList = document.querySelector('#moreList');



function displayList() {
  for (var q = 0; q < moreHeader.length; q++) {
    var firstul = document.createElement('ul');
    var firsth = document.createElement('h5');
    firsth.textContent = moreHeader[q];
    firstul.appendChild(firsth);

    for (var p = 0; p < moreItems.length; p++) {
      var firstli = document.createElement('li');
      firstli.textContent = moreItems[q][p];
      firstul.appendChild(firstli);
    }
    //firstul.style.listStyleType = 'none';
    firstul.style.float = 'left';
    //firstDiv.style.width = '200px';
    //firstDiv.style.height = '320px';
    firstDiv.appendChild(firstul);
  }
}

moreList.onclick = function() {
  //var secondDiv = document.createElement('div');
  moreList.appendChild(firstDiv);
}*/


var i=0;
var images = [];
var time = 3000;

images[0] = 'images/image1';
images[1] = 'images/image2.jpeg';

function slider() {
    document.slide.src = images[i];
    if(i < images.length-1)
        i++;
    else
        i=0;
  setTimeout("slider()", time);
  }

window.onload = slider;

var subs = document.querySelector('.subs');
var h = ["Xbox One S", "Windows 10 Update", "Outlook", "OneNote"];
var p = ["The ultimate games and 4K entertainment system.",
          "Take advantage of all the new features available in the April update.",
          "Take advantage of all the new features available in the April update.",
          "Organise your notes and your life."];
var b = ["LEARN MORE ", "GET IT NOW ", "DOWNLOAD NOW ", "DOWNLOAD ONENOTE FOR FREE "];
var imgs = ["images/image01", "images/image02", "images/image03", "images/REQzDg.jpeg"];
var divs = [];

for (var i = 0; i < 4; i++) {
var div = document.createElement('div');
var img = document.createElement('img');
img.setAttribute('src', imgs[i]);
img.style.width = '382px';
img.style.height = '215px';
var head = document.createElement('h4');
head.textContent = h[i];
var para = document.createElement('p');
para.textContent = p[i];
var but = document.createElement('button');
but.textContent = b[i];
but.style.border = '0px';
but.style.background = 'white';
but.style.color = 'blue';

div.appendChild(img);
div.appendChild(head);
div.appendChild(para);
div.appendChild(but);
subs.appendChild(div);

div.style.float = 'left';
div.style.width = '382px';
div.style.height = '344px';
div.style.padding = '12px';
div.style.position = 'relative';
div.style.top = '20px';
divs.push(div);
}
subs.style.height = '450px';

for (var j = 0; j < divs.length; j++) {
  divs[j].onmouseover = function(e) {
    e.target.style.filter = 'brightness(105%)';
  }

  divs[j].onmouseout = function(e) {
    e.target.style.filter = 'brightness(95%)';
  }
}



var secondary = document.querySelector('.secondary');
var sec = document.createElement('div');
var imageSource = "images/RW5kpU.jpeg";
var secImage = document.createElement('img');
secImage.setAttribute('src', imageSource);
sec.appendChild(secImage);
secondary.appendChild(sec);



var secondSubs = document.querySelector('.secondSubs');
var h2 = ["Office 365 for Business","Windows 10 Enterprise",
          "Visual Studio 2017", "Microsoft Azure"];
var p2 = ["Access your files anywhere, online or offline.",
          "Download the free 90-day evaluation for IT professionals.",
          "Productivity for any device, app and platform.",
          "Go serverless—build apps more quickly, without managing infrastructure."];
var b2 = ["LEARN MORE ABOUT OFFICE 365 ", "DOWNLOAD NOW ",
          "DOWNLOAD VISUAL STUDIO 2017 ", "LEARN MORE "];
var imgs2 = ["images/image001.jpeg", "images/image002.jpeg",
             "images/image003.jpeg", "images/image004.jpeg"];
var divs2 = [];

for (var i = 0; i < 4; i++) {
var div2 = document.createElement('div');
var img2 = document.createElement('img');
img2.setAttribute('src', imgs2[i]);
img2.style.width = '382px';
img2.style.height = '215px';
var head2 = document.createElement('h4');
head2.textContent = h2[i];
var para2 = document.createElement('p');
para2.textContent = p2[i];
var but2 = document.createElement('button');
but2.textContent = b2[i];
but2.style.border = '0px';
but2.style.background = 'white';
but2.style.color = 'blue';

div2.appendChild(img2);
div2.appendChild(head2);
div2.appendChild(para2);
div2.appendChild(but2);
secondSubs.appendChild(div2);

div2.style.float = 'left';
div2.style.width = '382px';
div2.style.height = '344px';
div2.style.padding = '12px';
div2.style.position = 'relative';
div2.style.top = '20px';
divs2.push(div2);
}
secondSubs.style.height = '450px';

for (var k = 0; k < divs2.length; k++) {
  divs2[k].onmouseover = function(e) {
    e.target.style.filter = 'brightness(105%)';
  }

  divs2[k].onmouseout = function(e) {
    e.target.style.filter = 'brightness(95%)';
  }
}

var social = document.querySelector('.social');
var divShort = document.createElement('div');
var per = document.createElement('p');
per.textContent = "Follow Microsoft";
per.style.color = '#616161';
per.style.marginRight = '20px';
divShort.appendChild(per);

var socLogos = ["images/facebook.png", "images/twitter.png",
                "images/linkedin.png", "images/youtube.png"];
for (var z = 0; z < 4; z++) {
  var img3 = document.createElement('img');
  img3.setAttribute('src', socLogos[z]);
  img3.style.marginRight = '10px';
  img3.style.width = '32px';
  img3.style.height = '32px';
  img3.style.position = 'relative';
  img3.style.top = '10px';
  divShort.appendChild(img3);
}

divShort.style.display = 'flex';
divShort.style.justifyContent = 'flex-start';
social.appendChild(divShort);

var mainFooter = document.querySelector('.main-footer');
var navFooter = document.createElement('div');
var baseFooter = document.createElement('div');

var baseHead = ["What's new", "Store & Support",
                "Education", "Enterprise", "Developer",
                "Company"];
var items = [];
items[0] = ["Surface Pro", "Windows 10 apps", "Office apps"];
items[1] = ["Account profile","Download Center",
              "Sales & support", "Returns", "Order tracking", "Support"];
items[2] = ["Microsoft in education", "Office for students",
              "Office 365 for schools", "Deals for students & parents",
              "Microsoft Azure in education"];
items[3] = ["Microsoft Azure", "Enterprise Data platform",
              "Microsoft partner resources", "Manufacturing & resources",
              "Financial services"];
items[4] = ["Microsoft Visual Studio", "Developer Network", "TechNet",
              "Microsoft Virtual Academy", "Channel 9", "Office", "Dev Center"];
items[5] = ["Careers", "About Microsoft", "Company news",
              "Privacy at Microsoft", "Investors", "Security"];

mainFooter.style.color = '#616161';
mainFooter.style.background = '#F2F2F2';
navFooter.style.display = 'flex';
navFooter.style.justifyContent = 'space-evenly';


for (var r = 0; r < baseHead.length; r++) {
  var ul1 = document.createElement('ul');
  var listHead = document.createElement('h5');
  listHead.textContent = baseHead[r];
  listHead.style.padding = '5px';
  ul1.appendChild(listHead);
  var s = 0;
  while (s < items[r].length) {
      var listItem = document.createElement('li');
      listItem.textContent = items[r][s];
      listItem.style.fontSize = 'x-small';
      listItem.style.padding = '10px';
      ul1.appendChild(listItem);
      s++;
    }
  ul1.style.listStyleType = 'none';
  ul1.style.float = 'left';
  navFooter.appendChild(ul1);
}

mainFooter.appendChild(navFooter);

var baseDiv = document.createElement('div');
var eng = document.createElement('a');
var linkimg = document.createElement('img');
var linkpara = document.createElement('p');

baseDiv.style.fontSize = 'x-small';

linkimg.setAttribute('src', 'images/Earth.png');
linkpara.textContent = 'English(India)';

linkpara.style.color = '#616161';
linkimg.style.padding = '10px';
linkimg.style.float = 'left';
linkimg.style.width = '25px';
linkimg.style.height = '25px';
linkpara.style.float = 'left';
baseDiv.style.height = '52px';
baseDiv.style.width = '1040px';

eng.setAttribute('href', '#');
eng.appendChild(linkimg);
eng.appendChild(linkpara);

eng.style.verticalAlign = 'text-top';

baseDiv.appendChild(eng);

var lastDiv = document.createElement('div');
var lastul = document.createElement('ul');
lastul.style.listStyleType = 'none';
var lastArr = [];

lastArr[0] = "Contact us";
lastArr[1] = "Privacy & cookies";
lastArr[2] = "Terms of use";
lastArr[3] = "Trademarks";
lastArr[4] = "About our ads";
lastArr[5] = "Microsoft 2018";

for (var n = 0; n < lastArr.length; n++) {
  var lastli = document.createElement('li');
  lastli.textContent = lastArr[n];
  lastli.style.float ='left';
  lastli.style.marginRight = '20px';
  lastul.appendChild(lastli);
}
lastDiv.style.fontSize = 'x-small';
lastDiv.appendChild(lastul);
baseFooter.appendChild(baseDiv);
baseFooter.appendChild(lastDiv);

baseFooter.style.display = 'flex';
baseFooter.style.justifyContent = 'center';

mainFooter.appendChild(baseFooter);
