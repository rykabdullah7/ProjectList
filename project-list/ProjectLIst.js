<!DOCTYPE html>

<html>

<head>
    <meta charset="udf-18">
    <title>Project Portal</title>
    <link rel="stylesheet" href="styles.css" type="text/css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
</head>

<body>
    <!-- <script>
        document.addEventListener("DOMContentLoaded", function () {
            // Check login status
            var token = sessionStorage.getItem("accessToken");

            if (!token) {
                // Redirect to login page
              ReactDOM.render(<LoginForm />, document.querySelector(".project-list"));
            } else {
                // User is logged in, show the content
                document.getElementById("content").style.display = "block";
            }
        });
    </script> -->

    <div class="project-list" id="content"></div>

    <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/babel" src="ProjectList.js"></script>
    
    <script type="text/babel">       
            ReactDOM.render(<ProjectList />, document.querySelector(".project-list"));
    </script>

    <script src="scripts.js"></script>


</body>

</html>
