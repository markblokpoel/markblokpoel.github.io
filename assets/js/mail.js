/* 1. define variables */
var me = "mark.blokpoel";
var place = "donders.ru.nl";

/* 2. find email link to replace */
var elink = document.getElementById("mlink");

/* 3. replace link href with variables  */
elink.href = `mailto:${me}@${place}`;
