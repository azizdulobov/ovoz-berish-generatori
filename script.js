var ism = document.getElementById("ism");
var familya = document.getElementById("familya");


document.getElementById("btn").addEventListener(
    "click", function() {
        function fx(){
            var v1=document.getElementById('v1');
            var v2=document.getElementById('v2');
            var v3=document.getElementById('v3');
            if (v1.checked) {
                return v1.value;
            }else if(v2.checked){
                return v2.value;
            }else if(v3.checked){
                return v3.value;
            }else{
                return 'Hech kim!';
            }
            }
        if ( fx() != '') {
            alert(`ovoz muvoffaqiyatli. Siz ${fx()}ga ovoz berdingiz`)   
        }else {
            alert('xatolik')
        }        
    }
)