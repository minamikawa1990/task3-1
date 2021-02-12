'use strict'

{

    //追加ボタンを押下時にタスクを登録できる

    const add = document.getElementById('add');
    const input =document.getElementById('input');
    const tbodyTasks = document.getElementById('tasks');
    const todos = [];
    const btn_remove = document.createElement('button');
    const trItem = document.createElement('tr');

    function displayTodos() {
        
        const todo = {
            task: input.value,
            status: "作業中",
        }

        // 配列に格納
        todos.push(todo);

        // tr要素をtbodyに追加
        const trItem = document.createElement('tr');
        tbodyTasks.appendChild(trItem);

        // IDの作成
        const ID_td = document.createElement('td');
        for (let i = 0; i < todos.length; i++) {
            ID_td.id = i;
        }
        trItem.appendChild(ID_td);
        ID_td.textContent = ID_td.id;
            
         //コメントの追加
         const comment = document.createElement('td');
         comment.textContent = todo.task;
         trItem.appendChild(comment);
 
         //ボタンの追加（作業中）
         const working_td = document.createElement('td');
         const btn_working = document.createElement('button');
         trItem.appendChild(working_td);
         working_td.appendChild(btn_working);
         btn_working.textContent = todo.status;
         console.log(working_td);
         
         //ボタンの追加（削除）
         const remove_td = document.createElement('td');
         const btn_remove = document.createElement('button');
         trItem.appendChild(remove_td);
         remove_td.appendChild(btn_remove);
         btn_remove.textContent = '削除';
         console.log(remove_td);
 
         console.log(todos);
         input.value = "";
    }

    add.addEventListener('click' , () => {
        displayTodos();
    })

}

    

   

    
    

    

    