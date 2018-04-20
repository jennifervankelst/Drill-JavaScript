


<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Mouse-Event</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
</head>
<body>
    <div class="premiere"></div>
    <div class="deuxieme"></div>
    <div class="troisieme"></div>
    <div class="quatrieme"></div>
</body>
</html>

<!-- Exercice 1 et 2  -->

<script>
let div1 = document.querySelector('div');

div1.addEventListener('mouseover', Fonction1);
div1.addEventListener('mouseout', Reset1);
function Fonction1() {
   this.style.display = 'none';
}

function Reset1() {
    this.style.display = 'block';
}
</script>