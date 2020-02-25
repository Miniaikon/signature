<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    test
    <img src="" id="image" alt="">
    <button onclick="setSig()">Firmar</button>
    <textarea name="image" id="imageCode" cols="30" rows="10"></textarea>

    <script>
        window.addEventListener('load', function(evt){
            var isInstalled = document.documentElement.getAttribute('SigPlusExtLiteExtension-installed');
            if (!isInstalled) {
            alert("SigPlusExtLite extension is either not installed or disabled. Please install or enable extension.");
            }
        });
        function setSig(){
            var message = { "firstName": "", "lastName": "", "eMail": "", "location": "", "imageFormat": 1, "imageX": "200",
                        "imageY": "200", "imageTransparency": false, "imageScaling": false, "maxUpScalePercent": 0.0,
                        "rawDataFormat": "ENC", "minSigPoints": 25 };
            top.document.addEventListener('SignResponse', SignResponse, false);
            var messageData = JSON.stringify(message);
            var element = document.createElement("MyExtensionDataElement");
            element.setAttribute("messageAttribute", messageData);
            document.documentElement.appendChild(element);
            var evt = document.createEvent("Events");
            evt.initEvent("SignStartEvent", true, false);
            element.dispatchEvent(evt);
            function SignResponse(event)
            {
                var str = event.target.getAttribute("msgAttribute");
                var obj = JSON.parse(str);
                console.log(obj);
                document.querySelector('#image').setAttribute('src', 'data:image/gif;base64,'+obj.imageData)
                document.querySelector('#imageCode').value = obj.imageData;
                //Process the response
            }
        }
    </script>
</body>
</html>
