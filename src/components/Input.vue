<template>
  <div class="input">
    {{msg_about}}
    <img src="../assets/logo.png">
    <div>
      <input type="text" v-model="name" placeholder="이름을 입력하세요"> 입력된 이름:
      <h2 v-html="name"></h2>
    </div>
    <div>
      <h3>셀렉트 동적 렌더링</h3>
      <select v-model="selected">
                    <option v-for="option in options" v-bind:value="option.value">
                        {{ option.text }}
                    </option>
                </select>
      <span>Selected:
                    {{ selected }}</span>
    </div>
    <div>
      <h3>라디오</h3>
      <input type="radio" id="Radio1" value="Radio1" v-model="picked">
      <label for="Radio1">Radio1</label>
      <br>
      <input type="radio" id="Radio2" value="Radio2" v-model="picked">
      <label for="Radio2">Radio2</label>
      <br>
      <span>
                    선택된 라디오값:{{ picked }}
                </span>
    </div>
    <div>
      <h3>다중 셀렉트 (배열 바인딩)</h3>
      <!-- <select v-model="multiSelected" multiple>
              <option>하나</option>
              <option>둘</option>
              <option>셋</option>
        </select>
      <span>Selected: {{ multiSelected }}</span> -->
    </div>
    <div>
      <h3>체크박스</h3>
      <button type="button" @click="visibleFlag = !visibleFlag">toggle</button>
      <h4 v-if="visibleFlag">v-if는 조건이 True일 경우에만 엘리먼트를 생성합니다.</h4>
      <h4 v-show="visibleFlag">v-show는 엘리먼트가 생성되지만 조건이 True일 경우에만 화면상에 출력됩니다.</h4>
    </div>
    <div>
      <h3>카운트</h3>
      <button type="button" @click="count++;">카운트버튼을 누르시오</button>
      <h4 v-if="count >= 10">조건이 10 이상, 현재 {{count}}</h4>
      <h4 v-else-if="count > 5"> 5초과 이면 v-else-if: {{count}}</h4>
      <h4 v-else>이도저도 아닌아이들{{count}}</h4>
    </div>
    <div>
      <p>v-for 반복 렌더링 예제 (array)</p>
      <ul>
        <li v-for="(item, index) in contact" v-bind:class="[{'color-green': item.address == '강원'}, {'color-blue': item.address == '서울'}]">
          no: {{ index }} / name: {{item.name}} / tel: {{ item.tel }} / address: {{ item.address }}
        </li>
      </ul>
    </div>
    <div>
      <h4>v-for 반복 렌더링 예제 (object) </h4>
      <select name="" id="regions">
        <option disabled="disabled" selected>지역을 선택하세요</option>
        <option v-for="(val,key) in regions" v-bind:value="key">{{ val }}</option>
      </select>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'input',
    data: () => {
      return {
        msg_about: 'input 페이지 입니다.',
        name: '',
        selected: 'A',
        options: [{
          text: 'One',
          value: 'A'
        }, {
          text: 'Two',
          value: 'B'
        }, {
          text: 'Three',
          value: 'C'
        }],
        picked: 'Radio2',
        multiSelected: '[]',
        toggle: '',
        visibleFlag: false,
        count: 0,
        contact: [{
          name: '하서울',
          tel: '000-0000-0000',
          address: '서울'
        },
        {
          name: '하경기',
          tel: '111-1111-1111',
          address: '경기'
        },
        {
          name: '하강원',
          tel: '222-2222-2222',
          address: '강원'
        }],
        regions: {
          'a': 'Asia',
          'b': 'America',
          'c': 'Europe',
          'd': 'Africa',
          'e': 'Ocenia'
        }
      }
    },
    filters: {
      capitalize: function(value) {
        if (!value)
          return ''
        value = value.toString()
        return value
          .charAt(0)
          .toUpperCase() + value.slice(1)
      }
    }
  }
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #35495E;
  }

  .color-green {
    color: green;
  }
  .color-blue {
    color: blue;
  }
</style>