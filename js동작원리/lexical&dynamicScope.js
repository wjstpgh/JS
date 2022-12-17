const a = function () {
  console.log('a', this)
  const b = function () {
    console.log('b', this)
    const c = {
      hi: function () {
        console.log('c', this)
      }
    }
    c.hi()
  }
  b()
}
a()

const obj1 = {
  name: 'name',
  say() {
    console.log('a', this);
    var func = function () {
      console.log('b', this)
    }
    func()
  }
}

obj1.say()

//js==lexical, but this is dynamic

const obj2 = {
  name: 'name',
  say() {
    console.log('a', this);
    var func = () => {
      console.log('b', this)
    }
    func()
  }
}

obj2.say()

//or

const obj3 = {
  name: 'name',
  say() {
    console.log('a', this);
    var func = function () {
      console.log('b', this)
    }
    return func.bind(this)
  }
}

obj3.say()()