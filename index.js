
    know ={
      "hello": "hi there!",
      "how are you": "I am SKN clg's chatBOt",
      "How are you": "I am fine"
    };

    function talk(){
      var user = document.getElementById("userBox").value;
      document.getElementById("userBox").value="";
      document.getElementById("chatLog").innerHTML +=user+"<br>";

      if(user in know){
        document.getElementById("chatLog").innerHTML+= know[user]+"<br>";
      }

      else {
        document.getElementById("chatLog").innerHTML+="I dont understand.... <br>";
      }
    }
