export async function appDetails() {
  try {
    const appId = document.getElementById("appId").value;
    // const appId = "377160";
    const response = await fetch(
      `https://steamy-kanban-service.c006ju9rk0vp0.us-east-2.cs.amazonlightsail.com/v1/steamfacade/appdetails?appids=${appId}`
    );
    if (!response.ok) {
      throw new Error("stupid bitch");
    }

    const app = await response.json();

    const d = app[appId];

    if (d.data.type == "game") {
      return d;
    }
    // const appName = d.data.name;
    // const developers = d.data.developers;

    // const unquoted = appName.replace(/"([^"]+)":/g, "$1:");
    // document.getElementById("name").innerHTML = unquoted;
    // document.getElementById("developers").innerHTML = developers;

    // const url = "https://steamcdn-a.akamaihd.net/steam/apps/" + appId +"/library_600x900_2x.jpg";
    // const gameArt = document.getElementById('url');
    // gameArt.src = url;
  } catch (error) {
    console.log(error);
  }
}

export async function renderInformation() {
  document.getElementById("name").innerHTML = "";
  document.getElementById("developers").innerHTML = "";
  try {
    const d = await appDetails();

    const appName = d.data.name;
    console.log(appName);
    if (appName == "undefined") {
      throw new Error("Game Not Found");
    }
    const developers = d.data.developers;
    document.getElementById("name").innerHTML = appName;
    document.getElementById("developers").innerHTML = developers;
  } catch (error) {
    console.log(error);
    document.getElementById("name").innerHTML = "Game Not Found";
  }
}

export async function renderAchievments() {
  document.getElementById("achievements").innerHTML = "";
  try {
    const d = await appDetails();

    const achievements = d.data.achievements.highlighted;
    if (achievements == "undefined") {
      throw new Error("No Achievments");
    }
    var i = [];
    var test;
    var display = [];
    let t;

    let newLi;
    let newText;
    var currentDiv;

    for (i = 0; i < achievements.length; i++) {
      let obj = achievements[i];
      test += obj.name;

      t = obj.name;

      display.push(t);

      newLi = document.createElement("div");
      newLi.style.cssText =
        "position:relative;width:200px;height:100px;border-radius:20px;border:1px  solid #ddd;text-align:left";

      newText = document.createTextNode(display[i]);

      newLi.appendChild(newText);

      currentDiv = document.getElementById("achievements");

      currentDiv.insertBefore(newLi, currentDiv.nextSibling);
    }
  } catch (error) {
    console.log(error);
    document.getElementById("achievements").innerHTML = "No Achievements";
  }
}
