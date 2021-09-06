  	// warning !!! komen dihapus error

    function insert(num){
  		document.form.view.value = document.form.view.value + num; 
  	}
  	function result(){
      // val = nilai
  		var val = document.form.view.value;
  		if(val) document.form.view.value = eval(val); 
  	}
  	function reset(){
  		document.form.view.value = "";
  	}
  	function deletee(){
  		var val = document.form.view.value;
  		document.form.view.value = val.substring(0,val.length-1);
      }
    function root(){
      var rankOP = document.form.view.value;
      document.form.view.value = Math.sqrt(rankOP);
    }  
