function getdata(){
    console.log("button clicked");

    // step 1: create an XHR object
    var xhr = new XMLHttpRequest();
    

    // step 2: request specification
    // xhr.open("GET","input.txt",true);
    // xhr.open("GET","data.json",true);
    xhr.open("GET","https://jsonplaceholder.typicode.com/todos",true);


    // step 3: sending the request
    xhr.send();
    

    // step 4: create an event listner
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            // var data = this.responseText;
        }
        function test(data){
            console.log(data);
        var data=JSON.parse(data);

    
            let output= `<tr>
                <th>Task</th>
                <th>Status</th>
            </tr>`
            for(let i = 0;i<data.length;i++){}
                if(data[i].completed == true){
                    output += `<tr>
                    <td>${data[i].title}<td>
                    <td><input class="form-check-input" type="checkbox checked="true" disabled="true"></input></td>`
                    
                }
                else{
                    output += `<tr>
                    <td>${data[i].title}</td>
                    <td><input class="form-check-input" type="checkbox id="box"></input></td>
                    </tr>`
                } 
            } 
            document.getElementById("tb").innerHTML = output;
        }
        count =0;
        function val(c){
            if(c.checked){
                count++;
                displaymsg();

            }
            else{
                count--;

            }
            function displaymsg(){
                let promisefn = new Promise(function(resolve,reject){
                    if (count==5){

                    }
                })
            }
        }
    }
}
