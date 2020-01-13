<template>
<div id="todolistapp">
        <div id="header">
            <h2>todolistapp</h2>
            <input type="text" class="input" id="task" placeholder="입력 후 엔터!" v-model.trim="todo" v-on:keyup.enter="addTodo">
            <span class="addbutton" v-on:click="addTodo">추가</span>
        </div>
        <ul id="todolist">
            <li v-for="a in todolist" v-bind:class="checked(a.done)" v-on:click="doneToggle(a.id)">
                <span>{{ a.todo }}</span>
                <span v-if="a.done">(완료)</span>
                <span class="close" v-on:click.stop="deleteTodo(a.id)">&#x00D7;</span>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
    export default({
    data () {
      return {
        todo: '',
        todolist: [
            { id: 1, todo: "영화보기", done: false },
            { id: 2, todo: "헬스장가기", done: true },
            { id: 3, todo: "놀고먹기", done: false },
            { id: 4, todo: "공부안하기", done: true }
        ]
      }
    },
    methods: {
        checked: function(done) { //todolist 데이터 속성에서 done 속성이 true인경우 checked 클래스를 적용 여부를 결정하는 기능 제공
            if (done) return { checked: true };
            else return { checked: false }
        },
        addTodo: function(e) { // 추가 버튼을 클릭하거나 입력 필드에서 엔터 키를 눌렀을때 할일을 목록에 추가하는 기능 제공
            if (this.todo.trim() != "") {
                this.todolist.push({ todo: this.todo.trim(), done: false });
                this.todo = "";
            }
        },
        deleteTodo: function(id) { //할일 목록 오른쪽 끝의 x를 클릭하면 목록에서 삭제한다.
            var index = this.todolist.findIndex(function(item) {
                return item.id === id;
            })
            this.todolist.splice(index, 1); // 삭제를 위해서 배열의 splice 메서드를 사용한다. 
        },
        doneToggle: function(id) { // 할일 목록을 클릭하면 done 속성을 true/false로 토글
            var index = this.todolist.findIndex(function(item) {
                return item.id === id;
            })
            this.todolist[index].done = !this.todolist[index].done;
        }
    }
})
</script>
<style>
    * {
        box-sizing: border-box;
    }
    
    ul {
        margin: 0;
        padding: 0;
    }
    
    ul li {
        cursor: pointer;
        position: relative;
        padding: 12px 8px 12px 40px;
        background: #eee;
        font-size: 14px;
        transition: 0.2s;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    
    ul li:hover {
        background: #ddd;
    }
    
    ul li.checked {
        background: #bbb;
        color: #fff;
        text-decoration: line-through;
    }
    
    ul li.checked::before {
        content: '';
        position: absolute;
        border-color: #fff;
        border-style: solid;
        border-width: 0px 1px 1px 0px;
        top: 10px;
        left: 16px;
        transform: rotate(45deg);
        height: 8px;
        width: 8px;
    }
    
    .close {
        position: absolute;
        right: 0;
        top: 0;
        padding: 12px 16px 12px 16px;
    }
    
    .close:hover {
        background-color: #f44336;
        color: white;
    }
    
    .header {
        background-color: purple;
        padding: 30px 30px;
        color: yellow;
        text-align: center;
    }
    
    .header::after {
        content: "";
        display: table;
        clear: both;
    }
    
    .input {
        border: black;
        width: 75%;
        height: 42px;
        padding: 10px;
        font-size: 16px;
    }
    
    .addbutton {
        padding: 12px;
        width: 25%;
        height: 42px;
        background-color: #d9d9d9;
        color: #555;
        text-align: center;
        float: right;
        font-size: 13px;
        cursor: pointer;
        transition: 0.3s;
    }
    
    .addbutton:hover {
        background-color: #bbb;
    }
    
    .completed {
        text-decoration: none;
    }
</style>