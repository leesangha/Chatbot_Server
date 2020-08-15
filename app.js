var express = require("express");
var http = require("http");
const { Router } = require("express");

var app = express();
var router = express.Router();

router.route("/process/login").get((req, res) => {
  console.log("login");
  res.send("<h3>서버에서 응답1 : " + "asdf" + " </h3>");
});
router.route("/chatbot").get((req, res) => {
  var sentence = req.query.sentence || "  Hi,there";
  if (sentence === "hi") {
    sentence = "hello";
  } else if (sentence === "what is your name") sentence = "Lee Sang-ha";
  else if (sentence === "where are you located") sentence = "Seoul";
  res.writeHead("200", { "Content-Type": "text/html; charset=utf8" });
  res.write(
    "<h1>챗봇 페이지입니다  </h1><span>chatbot :" + sentence + "</span><br/>"
  );
  res.write(
    "<input id ='sentence' type=text/> <button onclick = onClick()>입력</button>"
  );
  res.write(
    "<script>function onClick (){  var link = document.location.href.split('?')[0] + '?';var sen =document.getElementById('sentence').value; location.href = link + 'sentence=' + sen;}</script> "
  );

  res.end();
});
app.use("/", router);

app.set("port", 8080);

app.use(function (req, res, next) {
  console.log("middle ware default");

  res.send("<h3>챗봇 초기화면입니다 :  </h3>");
});
var server = http.createServer(app).listen(app.get("port"), () => {
  console.log("express로 웹서버 실행" + app.get("port"));
});
