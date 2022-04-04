<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>JSON</title>
	<style type="text/css">
		select{
			width: 173px;
			cursor: pointer;
		}
	</style>
</head>
<body>
	
	<form action="json.php" method="post">
		<table>
			<tr>
				<td>Name:</td>
				<td><input type="text" name="name" id="name"></td>
			</tr>
			<tr>
				<td>Age:</td>
				<td><input type="text" name="age" id="age"></td>
			</tr>
			<tr>
				<td>Address:</td>
				<td><input type="text" name="addr" id="addr"></td>
			</tr>
			<tr>
				<td>Country:</td>
				<td>
					<select name="country" id="country">
						<option value="0">- - Select Your Country - -</option>
					</select>
				</td>
			</tr>
			<tr>
				<td>State:</td>
				<td>
					<select name="state" id="state">
						<option value="0">- - Select Your State - -</option>
					</select>
				</td>
			</tr>
			<tr>
				<td>Sub State:</td>
				<td>
					<select name="subState" id="subState">
						<option value="0">-Select Your Sub-State-</option>
					</select>
				</td>
			</tr>
			<tr>
				<td></td>
				<td><input type="submit" value="Submit"></td>
			</tr>
		</table>
	</form>

	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script type="text/javascript">
		jQuery(document).ready(function() {
			jQuery('form').on('submit', function(event) {
				event.preventDefault();
				var content = jQuery(this).serialize();

				jQuery.ajax({
					url: 'json.php',
					type: 'post',
					dataType: 'json',
					data: content,
					success: function(data){
						if(data.success){
							var result = data.result;
							for(var i in result){
								console.log(i + ": " + result[i]);
							}
						}
					}
				});
			});






			// Country vs State
			var country = jQuery('select#country');
			var state = jQuery('select#state');
			var subState = jQuery('select#subState');
			var countries = {
				a: [
					{
						A1: "A"
					}
				],
				b: [
					{
						B1: "B"
					},
					{
						B2: "BB"
					}
				],
				c: [
					{
						C1: "C"
					},
					{
						C2: "CC"
					},
					{
						C3: "CCC"
					}
				]
			};

			for(var i in countries){
				country.append('<option value="'+ i +'">'+ i +'</option>');
			}

			country.change(function(){
				state.empty();
				state.append('<option value="0">- - Select Your State - -</option>');
				var countryVal = jQuery(this).val();
				if(countryVal != "0"){
					var count = 0;
					for(var j in countries[countryVal]){
						var stateVal = countries[countryVal][j];
						for(var k in stateVal){
							count++;
							state.append('<option value="'+ count +'">'+ k +'</option>');
						}
					}
				}
			});

			state.change(function(){
				subState.empty();
				subState.append('<option value="0">-Select Your Sub-State-</option>');
				var countryVal = country.val();
				var stateVal = (parseInt(jQuery(this).val()) - 1);
				if(countryVal != "0"){
					var count = 0;
					for(var l in countries[countryVal][stateVal]){
						var subStateVal = countries[countryVal][stateVal][l];
						subState.append('<option value="'+ count +'">'+ subStateVal +'</option>');
					}
				}
			});
		});
	</script>


	
	<script type="text/javascript">
		var abc = {
			lname : "Shakib",
			fname : "Ahmed",
			skils: [
				{
					java: "100%",
					python: "99%",
					php: "98%"
				}
			],
			salary: 100
		};

		// for(var i in abc){
		// 	if(typeof(abc[i]) == "object"){
		// 		for(var j in abc[i]){
		// 			if(typeof(abc[i][j]) == "object"){
		// 				for(var k in abc[i][j]){
		// 					console.log(abc[i][j][k]);
		// 				}
		// 			}
		// 		}
		// 	}else{
		// 		console.log(abc[i]);
		// 	}
		// }

		//console.log(JSON.stringify(abc));


		jQuery(document).ready(function() {
			jQuery.getJSON( "index.json", function( data ) {
				var items = [];
				jQuery.each( data, function( key, val ) {
					items.push( "<li id='" + key + "'>" + val + "</li>" );
				});

				//jQuery( "<ul/>", { "class": "my-new-list", html: items.join( "" ) }).appendTo( "body" );
			});
		});
	</script>
</body>
</html>