/**
 * 容器基类
 */
class Functor {
  constructor(val) {
    this.__value = val;
  }
  map(f) {
    return Functor.of(f(this.__value));
  }
  chain(f) {
    return this.map(f).join();
  }
  join() {
    return this.isNothing() ? Functor.of(null) : this.__value;
  }
  ap(other) {
    return this.isNothing() ? Functor.of(null) : other.map(this.__value);
  }
  inspect() {
    let _inspect = function(x) {
      return x && x.inspect ? x.inspect() : x;
    };
    return 'Functor(' + _inspect(this.__value) + ')';
  }
  isNothing(f) {
    return this.__value === null || this.__value === void 0;
  }
}
Functor.of = function(x) {
  return new Functor(x);
};

export default Functor;
