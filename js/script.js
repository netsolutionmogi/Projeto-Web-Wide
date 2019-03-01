function rolartopo() {
		$('html, body').animate({scrollTop:'500'}, 'slow');
	}
     $(document).ready(function()
	  {
         $(".tabelas").css("display","none");
		 
	   $(".btn").on('click',function(event)
	   {
		   event.preventDefault();
	
	       rolartopo();
		   
		   $(".tabelas").css("display","block");
		   
		 $.ajax({
			 type:"GET",
			 dataType:'json',
		     url:"http://jsonplaceholder.typicode.com/users",
			 
			 beforeSend: function()
			 {
		     	
			 },
			 success: function(data)
			 {
				$.each(data, function(i, item) 
				  {
					var name = item.name;		   
					  var username=item.username;
					  var email=item.email;
							   
					  $("#tabela_usuarios").append( 
						   '<tr>'+
						   '<td>'  + name + ' </td>'+
						   '<td>'  + username + ' </td>'+
						   '<td>'  + email + ' </td>'+
						   '</tr>')
					});
				
		     console.log(data);		
			 

			},complete: function()
		    {
			
			
			},error: function(jqXHR, status)
		 
		      {
				 alert("erro ao conectar com a internet....");
				 
		      },
			 
		 });
		  return false;
	   });
	 
	 
  });
    