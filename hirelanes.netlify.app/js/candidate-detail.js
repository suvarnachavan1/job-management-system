function reverseString(str) {
    return str.split('').reverse().join('');
}

function aws_config(){
    AWS.config.update(
        {
            region: "us-east-1",/*endpoint: "http://localhost:8000",*/
            accessKeyId: reverseString("O5NBTV7GZCTCLAVVAIKA"),
            secretAccessKey: reverseString("+wG9Dhby2DObU8whmjid1jrysrmMDvZOZ29NRtv4")
        });
}

function put_object(body, key){
    aws_config()
    var s3 = new AWS.S3();
    var params = {
        Body: JSON.stringify(body),
        Bucket: "job-candidate-details",
        Key: key, 
        ServerSideEncryption: "AES256", 
        StorageClass: "STANDARD_IA"
    };

    s3.putObject(params, function(err, data) {
         if(err){
            //console.log(err, err.stack); // an error occurred
            
         }else{
            //console.log(data);           // successful response
            
         }   
    });
}

function delete_object(key){
    aws_config()
    var s3 = new AWS.S3();
    var params = {
        Bucket: "job-candidate-details", 
        Key: key
       };
       s3.deleteObject(params, function(err, data) {
         if (err){
                //console.log(err, err.stack); // an error occurred
         }else{
                //console.log(data);           // successful response
         }     
       });
}

function get_object(){
        aws_config()
        var s3 = new AWS.S3();
		var params = {
			Bucket: "job-candidate-details",
			Key: "lalitbharindwal@gmail.com.json"
			};
		s3.getObject(params, function(err, data) {
			if(err) {
				console.log(err, err.stack); // an error occurred
			}
			else{
				var detail_json   = data.Body.toString('utf-8');         // successful response
				temp_data = JSON.parse(detail_json);
        }
    });
}
     