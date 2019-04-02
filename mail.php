<?php

$recepient = "rann86@mail.ru";
$sitename = "http//:www.электроремонт.бел";

$name = trim($_GET["name"]);
$phone = trim($_GET["phone"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Заявка на звонок с вэб-сайта от клиента по имени $name , номер телефона $phone";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");