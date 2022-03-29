const path=require("path"),
fs=require("fs"),
rp=require("request-promise"),
articlePath=path.join(__dirname, "popular-articles.json");

rp("https://reddit.com/r/popular.json")
    .then(data=>JSON.parse(data))
    .then(articles=> {

        const articleArr=[];
        articles.data.children.forEach(article=> {
            const articleObj={
                title: article.data.title,
                author: article.data.author,
                url: article,data,url
            };
            articleArr.push(articleObj);
        });
        fs.writeFileSync(articlePath, JSON.stringify(articleArr));

    })

.catch(err=> console.log(err)); 