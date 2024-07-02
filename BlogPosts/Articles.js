export const articles = [["HTMLCSSPost.html", "HTML/CSS"], ["SearchEngines.html", "Search Engines"], ["KAN.html, KAN"]]


function makeArticleList (){
    let text = "<div class = 'articleList'>";
    for (let i = 0; i < articles.length; i++) {
        text += "<a class = 'articleList' href= '" + articles[i][0] + "'>" + articles[i][1] + "</a>";
        text += "<p class = 'articleList'>" + "<script >";

    }
    text += "</div>";
    document.getElementById("articlesJS").innerHTML = text;

}