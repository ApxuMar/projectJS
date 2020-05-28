<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Галерея</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="css/jquery.fancybox.min.css">
    <link rel="stylesheet" href="css/style.css">
    
</head>

<body>
    <header class="header"></header>
    <main class="main">

   <?php
        //Добавили константу директории папки img
        include "constant/constant.php";
        //Просканировали папку и создали массив картинок (можно быо использовать scandir и сэкономить время);
    function scanDirect()
    {
        $dir = opendir(imgDir);
        while ($filename = readdir($dir)) {
            if (!is_dir($filename)) {
                $fileType = explode("/", mime_content_type(imgDir . $filename))[0];
                if ($fileType == "image") {
                    $files[] = $filename;
                }
            }
        }
        closedir($dir);
        return $files;
    }

        //На этом этапе получили готовую галлерею, так же сразу обернули в блок и ссылку.
    function gallery()
    {
        echo '<div class="row">';

        $files = scanDirect();
        if(count($files) > 0) {
            foreach ($files as $fileName) {
                $fileNameFull = imgDir . $fileName;
                echo '<div class="col-md-4 col-6 thumb">';
                echo '<a href="' . $fileNameFull . '"  data-fancybox="gallery">'; /*добавив target="_blank" будет открываться в новом окне*/
                echo '<img class="img-fluid" src="' . $fileNameFull . '"/></a></div>';
            }
        } else {
            echo '<div class="page-header"><h4>Каталог пуст</h4></div>';
        }
        echo '</div>';
    }

    gallery();

    ?>

    </main>
    <footer class="footer"></footer>
    <script src="js/jquery-3.5.1.min.js"></script>
    
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
     <script src="js/jquery.fancybox.min.js"></script>

     
    
</body>

</html>
