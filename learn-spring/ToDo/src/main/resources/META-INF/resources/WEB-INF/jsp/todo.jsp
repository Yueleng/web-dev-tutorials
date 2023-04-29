<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <title>Add Todo Page</title>
    <%--    <link href="/webjars/bootstrap/5.1.3/css/bootstrap.min.css" rel="stylesheet">--%>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous">

</head>
<body>
<div class="container">
    <h1>Enter todo Details</h1>
    <form method="post">
        Description: <input type="text" name="description"/>
        <input type="submit" class="btn btn-success"/>
    </form>

</div>
<%--<script src="/webjars/bootstrap/5.1.3/js/bootstrap.min.js"></script>--%>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossorigin="anonymous"></script>
<%--<script src="/webjars/jquery/3.6.0/jquery.min.js"></script>--%>
<script src=https://code.jquery.com/jquery-3.6.0.js></script>
</body>
</html>