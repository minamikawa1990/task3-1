'use strict'

{

    //追加ボタンを押下時にタスクを登録できる

    const add = document.getElementById('add');
    const input =document.getElementById('input');
    const tbodyTasks = document.getElementById('tasks');
    const todos = [];
    const btnRemove = document.createElement('button');
    const trItem = document.createElement('tr');

    function displayTodos() {
        
        const todo = {
            task: input.value,
            status: "作業中",
        }

        // 配列に格納
        todos.push(todo);

        // tr要素をtbodyに追加
        
        tbodyTasks.appendChild(trItem);

        // IDの作成
        const tdId = document.createElement('td');
        for (let i = 0; i < todos.length; i++) {
            tdId.id = i;
        }
        trItem.appendChild(tdId);
        tdId.textContent = tdId.id;
            
         //コメントの追加
         const comment = document.createElement('td');
         comment.textContent = todo.task;
         trItem.appendChild(comment);
 
         //ボタンの追加（作業中）
         const tdWorking = document.createElement('td');
         const btnWorking = document.createElement('button');
         trItem.appendChild(tdWorking);
         tdWorking.appendChild(btnWorking);
         btnWorking.textContent = todo.status;
         console.log(tdWorking);
         
         //ボタンの追加（削除）
         const tdRemove = document.createElement('td');
         const btnRemove = document.createElement('button');
         trItem.appendChild(tdRemove);
         tdRemove.appendChild(btnRemove);
         btnRemove.textContent = '削除';
         console.log(tdRemove);
 
         console.log(todos);
         input.value = "";
    }

    add.addEventListener('click' , () => {
        displayTodos();
    })

}

    

   

    
    

    

    