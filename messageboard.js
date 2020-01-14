function Node(name,comment){
        this.name = name; //元素
        this.comment = comment;//元素
        this.link = null; //指標
    }

function linkedList(){
    let length = 0;  //record the size of the list
    let head = null; //指向first node
    
    this.append = function(name, comment){  //add new node
        
        const node = new Node(name,comment);

        if(head === null){   //empty list
            head = node;
        }
        else{
            let current = head;
            while(current.link != null){
                current = current.link;
            }
            current.link = node;
        }
        length++;   
    };


    this.find = function(element){   //find a specific element
        
    }

    this.remove = function(name, comment){  //remove a specific element
        let current = head;
        while(current.link != null){
            console.log("hi");
            if(current.link.name == name ^ current.link.comment == comment){ //find the node to be deleted
                console.log("hi delete!");
            }
            current = current.link;
        }
    }
    

    this.insert = function(position, element){   //????

    }

    this.size = function(){   //how many nodes in the list
        return length;
    }

    this.print = function(){   //print all the nodes
        let current = head;
        while(current != null){
            console.log(current.name, current.comment);
            current = current.link;
            //return current.element;
        }
    }
}

let lk = new linkedList();

let submit = document.getElementById('submit');

submit.onclick = function(){
    //存入linklist
    let form = document.forms['form'];  
    let username = form.elements.name.value;
    let usercomment = form.elements.comment.value;
    lk.append(username, usercomment);  
    
    //輸出名字
    let namenode = document.createElement("li");
    let userinputname = document.createTextNode(username);
    namenode.appendChild(userinputname);
    document.getElementById("username").appendChild(namenode);  

    //輸出留言
    let commentnode = document.createElement("li"); //新一個li
    let userinputcomment = document.createTextNode(usercomment);  //文字轉html
    commentnode.appendChild(userinputcomment);  //html存進li
    document.getElementById("usermessage").appendChild(commentnode);  //li放進去
    
    //輸出時間
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let time = `${hour}:${minute}:${second}`;

    let timenode = document.createElement("li");
    let presentTime = document.createTextNode(time);
    timenode.appendChild(presentTime);
    document.getElementById("time").appendChild(timenode);

    //改變post數
    let post = document.getElementById("postnum");
    post.innerHTML = `post:${lk.size()}`;
    
}


